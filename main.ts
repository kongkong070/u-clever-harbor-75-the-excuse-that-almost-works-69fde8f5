// The Excuse That Almost Works — u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5
// A gamer's text to the boss to skip work on GTA 6 launch week,
// written to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "Boss, my appendix burst the same night GTA 6 launched. Doctor says rest, no screens. Definitely no screens.";

const MAX_CHARS = 140;
const MAX_WORDS = 20;

function checkGate(text: string): void {
  // Gate: 1-140 UTF-8 characters, not only whitespace; and the task
  // caps the excuse at 20 words. Refuse anything that would fail.
  if (text.trim().length === 0) throw new Error("excuse is empty");
  const chars = [...text].length;
  if (chars > MAX_CHARS)
    throw new Error(`excuse is ${chars} chars, over the ${MAX_CHARS}-char gate`);
  const words = text.trim().split(/\s+/).length;
  if (words > MAX_WORDS)
    throw new Error(`excuse is ${words} words, over the ${MAX_WORDS}-word cap`);
  if (text.includes("\n")) throw new Error("excuse must be a single line");
}

checkGate(EXCUSE);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
