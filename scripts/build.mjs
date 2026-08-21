import { cp, mkdir, readdir, rm, writeFile } from 'node:fs/promises';

const outputDirs = ['dist', 'docs'];
const appPaths = ['index.html', 'src'];

async function copyPublicAssets(outputDir) {
  try {
    const publicEntries = await readdir('public');
    for (const entry of publicEntries) {
      await cp(`public/${entry}`, `${outputDir}/${entry}`, { recursive: true });
    }
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
}

for (const outputDir of outputDirs) {
  await rm(outputDir, { recursive: true, force: true });
  await mkdir(outputDir, { recursive: true });

  for (const path of appPaths) {
    await cp(path, `${outputDir}/${path}`, { recursive: true });
  }

  await copyPublicAssets(outputDir);
}

await writeFile('docs/.nojekyll', '');
console.log('Built static portfolio to dist/ and docs/');
