import { createServer } from 'node:http';
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const port = Number(process.env.PORT || 4180);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
};

createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  let filePath = path.join(root, url.pathname === '/' ? 'index.html' : url.pathname);
  if (existsSync(filePath) && path.extname(filePath) === '') {
    filePath = path.join(filePath, 'index.html');
  }
  if (!filePath.startsWith(root) || !existsSync(filePath)) {
    res.writeHead(404);
    res.end('Not found');
    return;
  }
  res.writeHead(200, { 'content-type': types[path.extname(filePath)] || 'application/octet-stream' });
  res.end(readFileSync(filePath));
}).listen(port, () => console.log(`AI FlowPal site running at http://localhost:${port}`));
