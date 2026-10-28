// Downloads every image/icon used on the site from the Figma file into /public.
// Run once after cloning:  npm run assets
// (Figma MCP asset links expire ~7 days after export. If a link is dead,
//  re-export that layer from Figma into the same path.)
import { readFile, mkdir, writeFile, stat } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const manifest = JSON.parse(await readFile(join(root, 'scripts/figma-assets.json'), 'utf8'));
const force = process.argv.includes('--force');

let ok = 0;
let skipped = 0;
const failed = [];

await Promise.all(
  Object.entries(manifest).map(async ([target, url]) => {
    const dest = join(root, target);
    if (!force) {
      try {
        if ((await stat(dest)).size > 0) return skipped++;
      } catch {}
    }
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      await mkdir(dirname(dest), { recursive: true });
      await writeFile(dest, Buffer.from(await res.arrayBuffer()));
      ok++;
      console.log(`✓ ${target}`);
    } catch (err) {
      failed.push(`${target} (${err.message})`);
    }
  }),
);

console.log(`\n${ok} downloaded, ${skipped} already present, ${failed.length} failed.`);
if (failed.length) {
  console.log('Failed:\n  ' + failed.join('\n  '));
  process.exitCode = 1;
}
