export const processMeta = {
  title: "Our process | Fortress Roofing",
  description:
    "From first call to final walkthrough—how Fortress Roofing inspects, guides claims, and builds.",
  path: "/process",
};

export const galleryMeta = {
  title: "Gallery | Fortress Roofing",
  description: "Real homes. Real weather. Real finish. Project gallery coming soon.",
  path: "/gallery",
};

export const contactMeta = {
  title: "Contact | Fortress Roofing",
  description:
    "Request a free claim review or a no-pressure inspection. Serving [SERVICE AREA].",
  path: "/contact",
};

function stub(
  title: string,
  body: string,
  extra = "",
): string {
  return `
  <section class="section stub-hero">
    <div class="container max-w-prose mx-auto">
      <p class="eyebrow">Coming soon</p>
      <h1>${title}</h1>
      <p class="lead">${body}</p>
      <div class="cta-row" style="justify-content:center">
        <a class="btn btn-copper" href="/contact">Request a free claim review</a>
        <a class="btn btn-outline-navy" href="/">Back home</a>
      </div>
      ${extra}
    </div>
  </section>`;
}

export function processPage(): string {
  return stub(
    "Our process",
    "Full step-by-step process page is on the way. For now, see the four-step snapshot on the homepage—or start with a free claim review.",
    `<p class="mt-6 form-note">Serving [SERVICE AREA] · Call [PHONE]</p>`,
  );
}

export function galleryPage(): string {
  return stub(
    "Gallery",
    "Project photos and captions will live here—real homes, real weather, real finish. Placeholder strip is on the homepage until then.",
  );
}

export function contactPage(): string {
  return `
  <section class="hero-navy">
    <div class="container">
      <p class="eyebrow">Start with help</p>
      <h1>Request a free claim review</h1>
      <p class="lead">Tell us what’s going on. We’ll confirm within [RESPONSE SLA], then schedule a no-pressure look at your roof.</p>
      <p class="micro-trust">Call [PHONE] · Serving [SERVICE AREA] · Hours [HOURS]</p>
    </div>
  </section>
  <section class="section">
    <div class="container max-w-prose mx-auto">
      <div class="card">
        <h2>Contact form (stub)</h2>
        <p>Form wiring comes later. For now, use the placeholders below or call [PHONE].</p>
        <ul class="clean">
          <li>Name</li>
          <li>Phone</li>
          <li>Email</li>
          <li>City / area</li>
          <li>What’s going on (damage / leak / age / other)</li>
          <li>Insurance carrier (optional)</li>
          <li>Best time to call</li>
        </ul>
        <p class="form-note mb-0">Consent: I agree Fortress Roofing may contact me about this request. No spam. Easy opt-out.</p>
      </div>
      <p class="mt-6 page-note">Email: [EMAIL] · Licenses: [LICENSE NOTE]</p>
    </div>
  </section>`;
}
