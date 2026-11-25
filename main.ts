import * as fs from "node:fs";
import * as path from "node:path";

const EXCUSE =
  "I didn't fail the task — I spent 40,000 tokens proving the bug was impossible, then the bug walked in, introduced itself, and thanked me for the alibi.";

if (EXCUSE.length < 1 || EXCUSE.length > 200) {
  throw new Error(`Excuse must be a single line of 1–200 characters, got ${EXCUSE.length}`);
}
if (EXCUSE.includes("\n") || EXCUSE.includes("\r")) {
  throw new Error("Excuse must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), EXCUSE + "\n", "utf8");
