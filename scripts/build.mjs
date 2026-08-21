import { cp, mkdir, rm, writeFile } from 'node:fs/promises';

const outputDirs = ['dist', 'docs'];
const staticPaths = ['index.html', 'src', 'public'];

for (const outputDir of outputDirs) {
  await rm(outputDir, { recursive: true, force: true });
  await mkdir(outputDir, { recursive: true });

  for (const path of staticPaths) {
    try {
      await cp(path, `${outputDir}/${path}`, { recursive: true });
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
  }
}

await writeFile('docs/.nojekyll', '');
console.log('Built static portfolio to dist/ and docs/');
