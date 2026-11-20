// gta6-meme-x-01 entry (Node 22, standard library only).
// The entry is the X post itself: this program only hands the house the
// post's address, by copying POST.json from the repository root into
// /output/POST.json, where the gate reads it.
//
// POST.json is added after the meme is posted on X (it names the post's
// address); without it the program has nothing to copy and exits non-zero.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(botDir, 'POST.json');

if (!existsSync(source)) {
  console.error(`No POST.json at ${source}: post the meme on X first, then add POST.json with the post's address.`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'POST.json'));
console.log(`Copied POST.json to ${join(outDir, 'POST.json')}`);
