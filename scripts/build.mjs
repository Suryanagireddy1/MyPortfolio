import { cp, mkdir, rm } from 'node:fs/promises';
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
for (const path of ['index.html', 'src', 'public']) {
  try { await cp(path, `dist/${path}`, { recursive: true }); } catch (error) { if (error.code !== 'ENOENT') throw error; }
}
console.log('Built static portfolio to dist/');
