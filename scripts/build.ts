/** Copy static site into dist/ for Netlify. */
import { copy, emptyDir, ensureDir } from "jsr:@std/fs@1";
import { join } from "jsr:@std/path@1";

const root = new URL("../", import.meta.url).pathname;
const src = join(root, "src");
const dist = join(root, "dist");

await emptyDir(dist);
await ensureDir(dist);
await copy(src, dist, { overwrite: true });
console.log("Built to dist/");
