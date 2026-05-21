// AI FlowPal contact + lightweight first-party analytics backend
// Deploy as a Google Apps Script web app: Execute as Me, Anyone can access.
// After deploying, paste the /exec URL into index.html as analyticsEndpoint.

// Public visitors still see hello@aiflowpal.com, but direct website submissions
// deliver to the real login mailbox to avoid alias/inbox confusion.
const CONTACT_TO = 'ashevchuk@aiflowpal.com';
const PUBLIC_CONTACT_ALIAS = 'hello@aiflowpal.com';
const SHEET_PROP = 'AIFLOWPAL_ANALYTICS_SHEET_ID';
const ANALYTICS_HEADERS = [
  'receivedAt',
  'event',
  'path',
  'title',
  'referrer',
  'visitorId',
  'sessionId',
  'details',
  'language',
  'screen',
  'viewport',
  'timezone',
  'userAgent'
];
const CONTACT_HEADERS = [
  'receivedAt',
  'replyTo',
  'subject',
  'messageLength',
  'deliveredTo',
  'publicAlias'
];

function doPost(e) {
  const params = (e && e.parameter) || {};
  if (params.action === 'analytics') return logAnalytics_(params);
  return sendContact_(params);
}

function doGet() {
  const sheet = getAnalyticsSheet_();
  return json_({ ok: true, message: 'AI FlowPal endpoint is live.', analyticsSheetUrl: sheet.getParent().getUrl() });
}

function sendContact_(params) {
  const email = clean_(params.email || '');
  const subject = clean_(params.subject || 'New AI FlowPal workflow opportunity');
  const message = clean_(params.message || '');

  if (!email || !message) {
    return json_({ ok: false, error: 'Missing email or message.' });
  }

  MailApp.sendEmail({
    to: CONTACT_TO,
    name: 'AI FlowPal Website',
    replyTo: email,
    subject,
    body: message
  });

  logContact_(email, subject, message);

  return json_({ ok: true, deliveredTo: CONTACT_TO, publicAlias: PUBLIC_CONTACT_ALIAS });
}

function logContact_(email, subject, message) {
  const sheet = getSheet_('contacts', CONTACT_HEADERS);
  sheet.appendRow([
    new Date(),
    clean_(email),
    clean_(subject),
    String(message || '').length,
    CONTACT_TO,
    PUBLIC_CONTACT_ALIAS
  ]);
}

function logAnalytics_(params) {
  const sheet = getSheet_('events', ANALYTICS_HEADERS);
  sheet.appendRow([
    new Date(),
    clean_(params.event),
    clean_(params.path),
    clean_(params.title),
    clean_(params.referrer),
    clean_(params.visitorId),
    clean_(params.sessionId),
    clean_(params.details),
    clean_(params.language),
    clean_(params.screen),
    clean_(params.viewport),
    clean_(params.timezone),
    clean_(params.userAgent)
  ]);
  return json_({ ok: true });
}

function getAnalyticsSheet_() {
  return getSheet_('events', ANALYTICS_HEADERS);
}

function getSheet_(sheetName, headers) {
  const props = PropertiesService.getScriptProperties();
  let sheetId = props.getProperty(SHEET_PROP);
  let spreadsheet;

  if (sheetId) {
    spreadsheet = SpreadsheetApp.openById(sheetId);
  } else {
    spreadsheet = SpreadsheetApp.create('AI FlowPal Website Analytics');
    props.setProperty(SHEET_PROP, spreadsheet.getId());
  }

  let sheet = spreadsheet.getSheetByName(sheetName);
  if (!sheet) sheet = spreadsheet.insertSheet(sheetName);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function clean_(value) {
  return String(value || '').slice(0, 5000);
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
