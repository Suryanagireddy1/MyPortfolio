import { createServer } from 'node:http';
import { networkInterfaces } from 'node:os';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const root = process.argv[2] || '.';
const port = Number(process.argv[3] || process.env.PORT || 5173);
const types = { '.html':'text/html', '.js':'text/javascript', '.css':'text/css', '.svg':'image/svg+xml', '.pdf':'application/pdf' };

function getNetworkUrls() {
  return Object.values(networkInterfaces())
    .flat()
    .filter((iface) => iface && iface.family === 'IPv4' && !iface.internal)
    .map((iface) => `http://${iface.address}:${port}`);
}

createServer(async (req,res)=>{
  try {
    const url = new URL(req.url, 'http://localhost');
    const { full, content } = await readStaticFile(url.pathname);
    res.writeHead(200, { 'content-type': types[extname(full)] || 'application/octet-stream' });
    res.end(content);
  } catch { res.writeHead(404); res.end('Not found'); }
}).listen(port, '0.0.0.0', ()=>{
  console.log(`Portfolio dev server running at http://localhost:${port}`);
  for (const networkUrl of getNetworkUrls()) console.log(`Network preview available at ${networkUrl}`);
  console.log('If you are using a cloud IDE, open/forward this port from the Ports or Preview panel.');
});
