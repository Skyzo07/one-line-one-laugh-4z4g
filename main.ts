import { mkdirSync, writeFileSync } from "node:fs";

const JOKE = "I told my GPS I wanted the scenic route; it took me past my ex's house twice and called it \"closure.\"";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

if (JOKE.length < 1 || JOKE.length > 140) {
  throw new Error(`entry must be 1-140 chars, got ${JOKE.length}`);
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (JOKE.trim().length === 0) {
  throw new Error("entry must not be only white space");
}

writeFileSync(outDir + "/entry.txt", JOKE + "\n");
