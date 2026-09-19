/**
 * Static site generator for Netlify (and zip) deploys.
 * Writes HTML for each route into dist/ and copies static/ → dist/static/.
 *
 * Run: deno run -A scripts/build-static.ts
 *      deno task build
 */
import { layout } from "../lib/layout.ts";
import { homeMeta, homePage } from "../lib/pages/home.ts";
import { insuranceMeta, insurancePage } from "../lib/pages/insurance.ts";
import { faithMeta, faithPage } from "../lib/pages/faith.ts";
import {
  contactMeta,
  contactPage,
  galleryMeta,
  galleryPage,
  processMeta,
  processPage,
} from "../lib/pages/stubs.ts";

const ROOT = new URL("../", import.meta.url);
const DIST = new URL("../dist/", import.meta.url);
const STATIC_SRC = new URL("../static/", import.meta.url);

type Page = {
  /** URL path without trailing slash (except home "/"). */
  path: string;
  meta: { title: string; description: string; path: string };
  render: () => string;
};

const pages: Page[] = [
  { path: "/", meta: homeMeta, render: homePage },
  { path: "/insurance", meta: insuranceMeta, render: insurancePage },
  { path: "/faith", meta: faithMeta, render: faithPage },
  { path: "/process", meta: processMeta, render: processPage },
  { path: "/gallery", meta: galleryMeta, render: galleryPage },
  { path: "/contact", meta: contactMeta, render: contactPage },
];

function outFileFor(path: string): URL {
  if (path === "/") return new URL("index.html", DIST);
  const dir = path.replace(/^\//, "");
  return new URL(`${dir}/index.html`, DIST);
}

async function rmrf(url: URL): Promise<void> {
  try {
    await Deno.remove(url, { recursive: true });
  } catch (e) {
    if (!(e instanceof Deno.errors.NotFound)) throw e;
  }
}

async function ensureParent(file: URL): Promise<void> {
  const path = file.pathname;
  const parent = path.slice(0, path.lastIndexOf("/"));
  await Deno.mkdir(parent, { recursive: true });
}

async function copyDir(src: URL, dest: URL): Promise<void> {
  await Deno.mkdir(dest, { recursive: true });
  for await (const entry of Deno.readDir(src)) {
    const from = new URL(entry.name, src);
    // Ensure trailing slash semantics for nested dirs
    const fromUrl = entry.isDirectory
      ? new URL(`${entry.name}/`, src)
      : from;
    const toUrl = entry.isDirectory
      ? new URL(`${entry.name}/`, dest)
      : new URL(entry.name, dest);
    if (entry.isDirectory) {
      await copyDir(fromUrl, toUrl);
    } else if (entry.isFile) {
      await Deno.copyFile(fromUrl, toUrl);
    }
  }
}

async function main(): Promise<void> {
  await rmrf(DIST);
  await Deno.mkdir(DIST, { recursive: true });

  for (const page of pages) {
    const html = layout(page.meta, page.render());
    const out = outFileFor(page.path);
    await ensureParent(out);
    await Deno.writeTextFile(out, html);
    const rel = out.pathname.replace(new URL(".", ROOT).pathname, "");
    console.log(`wrote ${rel}`);
  }

  const staticDest = new URL("static/", DIST);
  await copyDir(STATIC_SRC, staticDest);
  console.log("copied static/ → dist/static/");
  console.log("build complete → dist/");
}

if (import.meta.main) {
  await main();
}
