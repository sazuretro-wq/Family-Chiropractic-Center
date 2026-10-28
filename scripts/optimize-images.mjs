// Makes web-sized WebP copies of the Figma PNGs in /public/images (the PNGs stay as sources
// but aren't deployed — see public/.assetsignore).
// Run after `npm run assets` or after replacing a photo:  npm run images  (--force to redo all)
import { readdir, stat } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const images = join(root, 'public/images');
const force = process.argv.includes('--force');

// Longest edge per folder ≈ 2× the largest size it's shown at.
const MAX_EDGE = { doctors: 800, staff: 480, team: 800 };
// Hero is full-bleed, so it gets a srcset (see HeroSection.astro).
const HERO_WIDTHS = [640, 1280, 1920];

const exists = async (p) => stat(p).then(() => true, () => false);

async function write(src, dest, pipeline) {
  if (!force && (await exists(dest))) return;
  await pipeline(sharp(src)).toFile(dest);
  console.log(`✓ ${relative(root, dest)} (${Math.round((await stat(dest)).size / 1024)} KiB)`);
}

const hero = join(images, 'hero-bg.png');
for (const w of HERO_WIDTHS) {
  await write(hero, join(images, `hero-bg-${w}.webp`), (s) => s.resize({ width: w }).webp({ quality: 70 }));
}
// Social share image (og:image) — JPEG for the widest support.
await write(hero, join(images, 'og-image.jpg'), (s) => s.resize(1200, 630).jpeg({ quality: 80, mozjpeg: true }));

for (const [folder, edge] of Object.entries(MAX_EDGE)) {
  for (const file of await readdir(join(images, folder))) {
    if (!file.endsWith('.png')) continue;
    const src = join(images, folder, file);
    await write(src, src.replace(/\.png$/, '.webp'), (s) =>
      s.resize({ width: edge, height: edge, fit: 'inside', withoutEnlargement: true }).webp({ quality: 78 }),
    );
  }
}
