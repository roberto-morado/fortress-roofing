/**
 * Fortress Roofing — pure Deno site (zero npm).
 * Run: deno task start   or   deno run -A main.ts
 */
import { layout, type PageMeta } from "./lib/layout.ts";
import { homeMeta, homePage } from "./lib/pages/home.ts";
import { insuranceMeta, insurancePage } from "./lib/pages/insurance.ts";
import { faithMeta, faithPage } from "./lib/pages/faith.ts";
import {
  contactMeta,
  contactPage,
  galleryMeta,
  galleryPage,
  processMeta,
  processPage,
} from "./lib/pages/stubs.ts";

const PORT = Number(Deno.env.get("PORT") ?? "8000");
const STATIC_ROOT = new URL("./static/", import.meta.url);

type Route = { meta: PageMeta; render: () => string };

const routes: Record<string, Route> = {
  "/": { meta: homeMeta, render: homePage },
  "/insurance": { meta: insuranceMeta, render: insurancePage },
  "/faith": { meta: faithMeta, render: faithPage },
  "/process": { meta: processMeta, render: processPage },
  "/gallery": { meta: galleryMeta, render: galleryPage },
  "/contact": { meta: contactMeta, render: contactPage },
};

const MIME: Record<string, string> = {
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};

function notFound(): Response {
  const html = layout(
    {
      title: "Not found | Fortress Roofing",
      description: "Page not found.",
      path: "/404",
    },
    `<section class="section stub-hero"><div class="container max-w-prose mx-auto"><h1>Page not found</h1><p>That path isn’t on the site yet.</p><a class="btn btn-copper" href="/">Go home</a></div></section>`,
  );
  return new Response(html, {
    status: 404,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

async function serveStatic(pathname: string): Promise<Response | null> {
  if (!pathname.startsWith("/static/")) return null;
  const rel = pathname.slice("/static/".length);
  if (!rel || rel.includes("..") || rel.includes("\\")) {
    return new Response("Forbidden", { status: 403 });
  }
  try {
    const fileUrl = new URL(rel, STATIC_ROOT);
    // Ensure resolved path stays under static/
    if (!fileUrl.href.startsWith(STATIC_ROOT.href)) {
      return new Response("Forbidden", { status: 403 });
    }
    const data = await Deno.readFile(fileUrl);
    const ext = rel.includes(".") ? `.${rel.split(".").pop()}` : "";
    return new Response(data, {
      headers: {
        "content-type": MIME[ext] ?? "application/octet-stream",
        "cache-control": "public, max-age=3600",
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}

function htmlPage(route: Route): Response {
  const html = layout(route.meta, route.render());
  return new Response(html, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

Deno.serve({ port: PORT }, async (req) => {
  const url = new URL(req.url);
  let path = url.pathname;
  if (path.length > 1 && path.endsWith("/")) {
    path = path.slice(0, -1);
  }

  const staticRes = await serveStatic(path);
  if (staticRes) return staticRes;

  const route = routes[path];
  if (route) return htmlPage(route);

  return notFound();
});

console.log(`Fortress Roofing (Deno) → http://127.0.0.1:${PORT}`);
