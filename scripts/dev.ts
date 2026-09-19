/** Local static server for src/. */
import { serveDir } from "jsr:@std/http@1/file-server";

const root = new URL("../src", import.meta.url).pathname;

Deno.serve({ port: 8000 }, (req) =>
  serveDir(req, { fsRoot: root, urlRoot: "" }),
);

console.log("http://localhost:8000");
