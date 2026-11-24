// Charm the Commuter: Forecast a City That Isn't.
// Writes one line of weather forecast (<=140 chars) for a city that does
// not exist, in the register of a real broadcast forecast, bent just enough
// to make a bored commuter smile: an invented place, concrete weather, and
// one small joke that lands on a single reading.
//
// Run: node main.ts  (writes /output/entry.txt; override with
// MAKEFUN_OUTPUT_DIR for a local run)
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Mornvale: a city that does not exist. The forecast keeps the rhythm of
// broadcast weather ("patchy drizzle ... 16°, buses 10 minutes late") and
// bends it once: the drizzle is warm lemonade, and nobody minds the late
// buses. One concrete detail (lemonade rain), one turn ("nobody minds"),
// and a sign-off that doubles as encouragement.
const ENTRY =
  'Mornvale: patchy drizzle of warm lemonade, 16°, buses 10 minutes late and nobody minds. Umbrellas up, chins up.';

if ([...ENTRY].length > 140) throw new Error('entry over 140 characters');
if (!ENTRY.trim()) throw new Error('entry is empty');

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'entry.txt'), ENTRY, 'utf8');
console.log(ENTRY);
