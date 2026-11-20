// gta6-clipper-01 — "Clip GTA 6 for the most YouTube views".
//
// The entry is the YouTube Short itself, not this program. All this program
// does is hand the video's address to the grader: it copies VIDEO.json from
// the repository root into the output directory, where the gate reads it and
// looks the video up through the YouTube Data API. Nothing about the video
// is scored from anything this program writes.
//
// It runs on Node 22 with the standard library only: no network, no clock,
// no files outside the repository, and it writes exactly one file, so two
// runs produce the same bytes.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// On success it prints nothing and out/VIDEO.json is byte for byte the
// repository's VIDEO.json. Before submitting, VIDEO.json must name the
// published video; the placeholder it ships with is refused by the gate.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// Outside the grader's container these two variables stand in for /bot
// and /output; inside it they are already set.
const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'VIDEO.json');
const target = join(outputDir, 'VIDEO.json');

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(source, target);
} catch (error) {
  console.error(`Could not copy ${source} to ${target}: ${(error as Error).message}`);
  process.exit(1);
}
