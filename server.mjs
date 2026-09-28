import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));
const port = Number(process.env.PORT || 3000);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.ico': 'image/x-icon' };
const publicFiles = new Set(['/manus-routes.json', '/favicon.svg', '/rhine-logo.png']);

createServer(async (req, res) => {
  const requestPath = new URL(req.url, `http://${req.headers.host || 'localhost'}`).pathname;
  const safePath = normalize(requestPath === '/' ? '/index.html' : requestPath);
  const filePath = join(root, publicFiles.has(safePath) ? `/public${safePath}` : safePath);
  if (!filePath.startsWith(root)) { res.writeHead(403); return res.end('Forbidden'); }
  try {
    const body = await readFile(filePath);
    res.writeHead(200, { 'Content-Type': types[extname(filePath)] || 'application/octet-stream', 'Cache-Control': safePath === '/index.html' ? 'no-cache' : 'public, max-age=3600' });
    res.end(body);
  } catch {
    if (!extname(safePath)) {
      const body = await readFile(join(root, 'index.html'));
      res.writeHead(200, { 'Content-Type': types['.html'], 'Cache-Control': 'no-cache' });
      return res.end(body);
    }
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not found');
  }
}).listen(port, '0.0.0.0', () => console.log(`RHine listening on ${port}`));
