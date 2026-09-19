/** Shared HTML chrome for Fortress Roofing (pure Deno, zero npm). */

export type PageMeta = {
  title: string;
  description: string;
  path: string;
};

const NAV = [
  { href: "/", label: "Home" },
  { href: "/insurance", label: "Insurance" },
  { href: "/faith", label: "Faith" },
  { href: "/process", label: "Process" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

const FOOTER_NAV = [
  { href: "/insurance", label: "How insurance works" },
  { href: "/faith", label: "Our faith" },
  { href: "/process", label: "Process" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

function navLinks(
  items: ReadonlyArray<{ href: string; label: string }>,
  path: string,
  className = "",
): string {
  return items
    .map((item) => {
      const active =
        item.href === "/" ? path === "/" : path.startsWith(item.href);
      const current = active ? ' aria-current="page"' : "";
      return `<a href="${item.href}" class="${className}"${current}>${item.label}</a>`;
    })
    .join("\n");
}

export function layout(meta: PageMeta, body: string): string {
  const year = new Date().getFullYear();
  const { title, description, path } = meta;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/static/styles.css" />
</head>
<body>
  <div class="utility-bar">
    Licensed &amp; insured · Serving [SERVICE AREA] · Call [PHONE]
  </div>

  <header class="site-header">
    <div class="container header-inner">
      <a class="logo" href="/">Fortress Roofing</a>
      <nav class="nav-desktop" aria-label="Main">
        ${navLinks(NAV, path)}
      </nav>
      <div class="header-actions">
        <a class="btn btn-copper header-cta-desktop" href="/contact">Request a free claim review</a>
        <button type="button" class="menu-toggle" id="menu-toggle" aria-expanded="false" aria-controls="mobile-nav" aria-label="Open menu">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
    <div class="container">
      <nav class="nav-mobile" id="mobile-nav" aria-label="Mobile">
        ${navLinks(NAV, path)}
        <a class="btn btn-copper" href="/contact" style="margin-top:0.5rem">Request a free claim review</a>
      </nav>
    </div>
  </header>

  <main>
    ${body}
  </main>

  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <p class="footer-brand">Fortress Roofing</p>
          <p style="font-size:0.875rem;opacity:0.85;margin:0 0 1rem">[LEGAL ENTITY NAME if different]</p>
          <ul class="clean" style="font-size:0.875rem">
            <li>Phone: <span style="color:var(--stone)">[PHONE]</span></li>
            <li>Email: <span style="color:var(--stone)">[EMAIL]</span></li>
            <li>Hours: <span style="color:var(--stone)">[HOURS]</span></li>
          </ul>
        </div>
        <div>
          <p style="color:var(--stone);font-weight:500;margin:0 0 0.5rem">Serving</p>
          <p style="font-size:0.875rem">[SERVICE AREA]</p>
          <p style="font-size:0.875rem;margin-top:1rem">Licenses: [LICENSE NUMBERS / STATES]</p>
          <p style="font-size:0.875rem">Insured: [GL NOTE]</p>
        </div>
        <div>
          <p style="color:var(--stone);font-weight:500;margin:0 0 0.75rem">Explore</p>
          <nav class="footer-nav" aria-label="Footer">
            ${navLinks(FOOTER_NAV, path)}
          </nav>
        </div>
      </div>
      <p class="footer-tagline">We treat every home like a place families should feel safe.</p>
      <p class="footer-copy">© ${year} Fortress Roofing. All rights reserved.</p>
    </div>
  </footer>

  <script>
    (function () {
      var btn = document.getElementById("menu-toggle");
      var nav = document.getElementById("mobile-nav");
      if (!btn || !nav) return;
      btn.addEventListener("click", function () {
        var open = nav.classList.toggle("open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
        btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      });
    })();
  </script>
</body>
</html>`;
}

export function escapeHtml(s: string): string {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function ctaBand(opts: {
  title: string;
  body: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  reassurance?: string;
}): string {
  const primaryLabel = opts.primaryLabel ?? "Request a free claim review";
  const primaryHref = opts.primaryHref ?? "/contact";
  const secondary = opts.secondaryLabel && opts.secondaryHref
    ? `<a class="btn btn-ghost" href="${opts.secondaryHref}">${opts.secondaryLabel}</a>`
    : "";
  const reassurance = opts.reassurance
    ? `<p class="micro-trust" style="margin-top:1rem">${opts.reassurance}</p>`
    : "";

  return `
  <section class="section section-navy">
    <div class="container text-center max-w-3xl mx-auto">
      <h2>${opts.title}</h2>
      <p>${opts.body}</p>
      <div class="cta-row" style="justify-content:center">
        <a class="btn btn-copper" href="${primaryHref}">${primaryLabel}</a>
        ${secondary}
      </div>
      ${reassurance}
    </div>
  </section>`;
}
