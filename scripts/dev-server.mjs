import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
const root = process.argv[2] || '.';
const port = Number(process.argv[3] || 5173);
const types = { '.html':'text/html', '.js':'text/javascript', '.css':'text/css', '.svg':'image/svg+xml', '.pdf':'application/pdf' };
createServer(async (req,res)=>{
  try {
    const url = new URL(req.url, 'http://localhost');
    let file = normalize(url.pathname === '/' ? '/index.html' : url.pathname).replace(/^\.\.\//,'');
    const full = join(root, file);
    res.writeHead(200, { 'content-type': types[extname(full)] || 'application/octet-stream' });
    res.end(await readFile(full));
  } catch { res.writeHead(404); res.end('Not found'); }
}).listen(port, '0.0.0.0', ()=>console.log(`Portfolio dev server running at http://localhost:${port}`));
