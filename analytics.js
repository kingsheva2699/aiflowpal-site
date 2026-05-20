// AI FlowPal first-party analytics for static pages.
// Privacy boundary: no IP capture here, no keystroke logging, no message body capture.
(function () {
  const endpoint = 'https://script.google.com/macros/s/AKfycbykXRBiDY_gJzgK6ZOdmIg8uatiNNUCLTZG1jlO5ZL-ao1ckTtW8iUrZ0ICdn4pT3twoA/exec';
  if (!endpoint || endpoint.includes('REPLACE_WITH')) return;

  const storageKey = 'aiflowpal_visitor_id';
  const sessionKey = 'aiflowpal_session_id';
  const startedAt = Date.now();
  const maxScroll = { value: 0 };
  const sentMilestones = new Set();

  function id(prefix) {
    return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
  }

  function getStoredId(key, prefix, storage) {
    try {
      let value = storage.getItem(key);
      if (!value) {
        value = id(prefix);
        storage.setItem(key, value);
      }
      return value;
    } catch (error) {
      return id(prefix);
    }
  }

  const visitorId = getStoredId(storageKey, 'v', localStorage);
  const sessionId = getStoredId(sessionKey, 's', sessionStorage);

  function parseTraffic() {
    const params = new URLSearchParams(location.search);
    const ref = document.referrer || '';
    const refHost = ref ? new URL(ref, location.href).hostname : '';
    const utm = {};
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid', 'msclkid'].forEach((k) => {
      if (params.get(k)) utm[k] = params.get(k).slice(0, 300);
    });
    let channel = 'direct';
    if (Object.keys(utm).length) channel = 'campaign';
    else if (refHost) {
      if (/google|bing|duckduckgo|yahoo|ecosia|yandex/i.test(refHost)) channel = 'organic_search';
      else if (/github|linkedin|facebook|instagram|x\.com|twitter|reddit|t\.co/i.test(refHost)) channel = 'social_referral';
      else channel = 'referral';
    }
    return { refHost, channel, utm };
  }

  function deviceInfo() {
    const nav = navigator || {};
    const conn = nav.connection || nav.mozConnection || nav.webkitConnection || {};
    return {
      language: nav.language || '',
      languages: Array.isArray(nav.languages) ? nav.languages.slice(0, 5).join(',') : '',
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || '',
      screen: `${screen.width}x${screen.height}`,
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      colorDepth: screen.colorDepth || '',
      pixelRatio: window.devicePixelRatio || 1,
      platform: nav.platform || '',
      hardwareConcurrency: nav.hardwareConcurrency || '',
      deviceMemory: nav.deviceMemory || '',
      touchPoints: nav.maxTouchPoints || 0,
      connectionType: conn.effectiveType || '',
      saveData: !!conn.saveData,
      userAgent: nav.userAgent || ''
    };
  }

  function details(extra) {
    return JSON.stringify({
      url: location.href,
      query: location.search || '',
      hash: location.hash || '',
      traffic: parseTraffic(),
      device: deviceInfo(),
      secondsOnPage: Math.round((Date.now() - startedAt) / 1000),
      maxScrollPercent: maxScroll.value,
      abTest: window.AIFLOWPAL_AB || null,
      ...extra
    });
  }

  function payload(eventName, extra) {
    return {
      action: 'analytics',
      event: eventName,
      details: details(extra || {}),
      visitorId,
      sessionId,
      path: location.pathname + location.search + location.hash,
      title: document.title,
      referrer: document.referrer || '',
      language: navigator.language || '',
      screen: `${screen.width}x${screen.height}`,
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || '',
      userAgent: navigator.userAgent,
      ts: new Date().toISOString()
    };
  }

  function send(eventName, extra) {
    const body = new FormData();
    Object.entries(payload(eventName, extra)).forEach(([key, value]) => body.append(key, value));
    try {
      if (navigator.sendBeacon && navigator.sendBeacon(endpoint, body)) return;
    } catch (error) {}
    fetch(endpoint, { method: 'POST', body, mode: 'no-cors', keepalive: true }).catch(() => {});
  }

  function describeElement(el) {
    return {
      text: (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 180),
      href: el.href || '',
      id: el.id || '',
      classes: typeof el.className === 'string' ? el.className : '',
      section: el.closest('section')?.id || el.closest('main, header, footer')?.tagName?.toLowerCase() || ''
    };
  }

  send('page_view', { landingPath: location.pathname + location.search + location.hash });

  window.addEventListener('scroll', () => {
    const doc = document.documentElement;
    const scrollable = Math.max(1, doc.scrollHeight - window.innerHeight);
    const pct = Math.max(0, Math.min(100, Math.round((window.scrollY / scrollable) * 100)));
    if (pct > maxScroll.value) maxScroll.value = pct;
    [25, 50, 75, 90].forEach((m) => {
      if (pct >= m && !sentMilestones.has(m)) {
        sentMilestones.add(m);
        send('scroll_depth', { milestone: m });
      }
    });
  }, { passive: true });

  document.addEventListener('click', (event) => {
    const target = event.target.closest('a, button, summary');
    if (!target) return;
    const info = describeElement(target);
    const eventName = target.tagName === 'A' && target.href
      ? (target.hostname !== location.hostname ? 'outbound_link_click' : 'internal_link_click')
      : 'ui_click';
    send(eventName, info);
  });

  if ('IntersectionObserver' in window) {
    const seen = new Set();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || !entry.target.id || seen.has(entry.target.id)) return;
        seen.add(entry.target.id);
        send('section_view', { section: entry.target.id });
      });
    }, { threshold: 0.45 });
    document.querySelectorAll('section[id]').forEach((section) => observer.observe(section));
  }

  window.addEventListener('beforeunload', () => {
    send('page_exit', { secondsOnPage: Math.round((Date.now() - startedAt) / 1000), maxScrollPercent: maxScroll.value });
  });
})();
