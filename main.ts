import { mkdirSync, writeFileSync } from "node:fs";

const entry: string =
  "The error code is just me saying 'please stop' in a font you understand.";

if (!entry.trim() || [...entry].length > 240) {
  throw new Error("entry must be non-blank text of at most 240 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
