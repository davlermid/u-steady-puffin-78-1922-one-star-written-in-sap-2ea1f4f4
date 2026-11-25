// One Star, Written in Sap — make.fun entry
// Deterministic: no random, no network, no reads of other files.
// Writes the winning one-line review to entry.txt (same directory)
// and prints it to stdout.

import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "One star. He mists my leaves daily like a spa day and never waters the soil. My roots are in a drought while my face is dewy.";

const dir = dirname(fileURLToPath(import.meta.url));
writeFileSync(join(dir, "entry.txt"), ENTRY, "utf8");
console.log(ENTRY);
