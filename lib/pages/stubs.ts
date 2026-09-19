/** Process, Gallery, Contact — full SSR pages (not "coming soon"). */

export const processMeta = {
  title: "What happens after you reach out | Fortress Roofing",
  description:
    "From first call to final walkthrough—how we inspect, support your claim, install, and stand behind the work.",
  path: "/process",
};

export const galleryMeta = {
  title: "Gallery | Fortress Roofing",
  description:
    "Real homes. Real weather. Real finish. Storm restoration, replacements, and repairs built to hold.",
  path: "/gallery",
};

export const contactMeta = {
  title: "Contact | Fortress Roofing",
  description:
    "Request a free claim review or a no-pressure inspection. Serving [SERVICE AREA].",
  path: "/contact",
};

export function processPage(): string {
  return `
  <section class="hero-navy">
    <div class="container">
      <p class="eyebrow">Clear steps · No surprises</p>
      <h1>What happens after you reach out</h1>
      <p class="lead">One team, one plan. You always know where the claim stands and what comes next.</p>
      <div class="cta-row">
        <a class="btn btn-copper" href="/contact">Start a free claim check</a>
        <a class="btn btn-ghost" href="/insurance">How insurance fits in</a>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h2>Your project timeline</h2>
      <p class="lead">Six steps from first contact to a roof you can trust.</p>
      <div class="grid-2 mt-6">
        <div class="card">
          <span class="step-num">1</span>
          <h3>Call or form</h3>
          <p>Tell us what’s going on—storm damage, leak, age, or a claim already open. We confirm within [RESPONSE SLA].</p>
        </div>
        <div class="card">
          <span class="step-num">2</span>
          <h3>On-site inspection</h3>
          <p>We document the roof honestly: photos, notes, and a plain-language read. If a claim isn’t the right move, we say so.</p>
        </div>
        <div class="card">
          <span class="step-num">3</span>
          <h3>Claim support</h3>
          <p>You own the policy. With your okay, we help assemble scope and photos and coordinate with the adjuster—advocacy with evidence, not pressure.</p>
        </div>
        <div class="card">
          <span class="step-num">4</span>
          <h3>Materials &amp; schedule</h3>
          <p>When the numbers are clear and you choose to move forward, we lock materials and a start window that respects your home and weather.</p>
        </div>
        <div class="card">
          <span class="step-num">5</span>
          <h3>Install</h3>
          <p>Tear-off through finish with the quiet details that keep water out—flashing, underlayment, ventilation, ridge.</p>
        </div>
        <div class="card">
          <span class="step-num">6</span>
          <h3>Final walkthrough &amp; warranty</h3>
          <p>We walk it together. Punch list if needed. Warranty path and who to call after a storm—clear before we leave.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-mist">
    <div class="container">
      <h2>What we handle. What we need from you.</h2>
      <div class="grid-2 mt-6">
        <div class="card">
          <h3>We handle</h3>
          <ul class="clean">
            <li>Inspection and documentation</li>
            <li>Claim coordination (with your permission)</li>
            <li>Scheduling, crew, and quality checks</li>
            <li>Walkthrough and warranty handoff</li>
          </ul>
        </div>
        <div class="card">
          <h3>We need from you</h3>
          <ul class="clean">
            <li>Access to the property</li>
            <li>Policy / claim basics if you have them</li>
            <li>Decisions on offers and timing</li>
            <li>A contact who can answer day-of questions</li>
          </ul>
        </div>
      </div>
      <p class="mt-6"><a href="/insurance">Where the claim fits in the process →</a></p>
    </div>
  </section>

  <section class="section">
    <div class="container max-w-3xl">
      <h2>Aftercare</h2>
      <p>Warranty terms depend on materials and workmanship scope—we’ll spell yours out in writing. Weather callbacks: if something doesn’t look right after a storm, call us. You’re not alone after the check clears.</p>
      <div class="cta-row">
        <a class="btn btn-copper" href="/contact">Start with a free inspection or claim check</a>
        <a class="btn btn-outline-navy" href="tel:[PHONE]">Call [PHONE]</a>
      </div>
    </div>
  </section>`;
}

export function galleryPage(): string {
  const cards = [
    { tag: "Storm restoration", line: "Neighborhood · After hail · Quiet finish" },
    { tag: "Full replacement", line: "Family home · Tear-off · Built to hold" },
    { tag: "Repair", line: "Leak path · Targeted fix · No upsell" },
    { tag: "Before / after", line: "Worn ridge · New system · Same skyline" },
    { tag: "Storm restoration", line: "Wind lift · Documented claim · Carrier-aligned scope" },
    { tag: "Full replacement", line: "Aging shingles · Full decking check · Warranty path" },
  ];
  const grid = cards
    .map(
      (c) => `
        <article class="card gallery-card">
          <div class="gallery-ph" role="img" aria-label="Project photo placeholder">${c.tag}</div>
          <p class="eyebrow">${c.tag}</p>
          <p class="mb-0">${c.line}</p>
        </article>`,
    )
    .join("");

  return `
  <section class="hero-navy">
    <div class="container">
      <p class="eyebrow">Craft proof</p>
      <h1>Roofs built to protect</h1>
      <p class="lead">Real homes. Real weather. Real finish. Photo placeholders until your project shots are cleared to publish.</p>
      <div class="cta-row">
        <a class="btn btn-copper" href="/contact">Want this for your home?</a>
      </div>
    </div>
  </section>

  <section class="section section-mist">
    <div class="container">
      <p class="filter-bar" aria-label="Gallery filters">
        <span class="chip">All</span>
        <span class="chip">Storm restoration</span>
        <span class="chip">Full replacement</span>
        <span class="chip">Repair</span>
        <span class="chip">Before / after</span>
      </p>
      <div class="grid-3 mt-6">${grid}</div>
    </div>
  </section>

  <section class="section">
    <div class="container max-w-3xl">
      <h2>Before the storm. After the fortress.</h2>
      <p>Featured before/after pairs will live here—same angle, honest light, no drama filters. Until then, the grid above marks the kinds of work we intend to show.</p>
      <h2 class="mt-6">Details that keep water out</h2>
      <p>Flashing, underlayment, ridge, and ventilation rarely make the highlight reel. They should. Ask us to walk those details on your walkthrough.</p>
      <div class="cta-row">
        <a class="btn btn-copper" href="/contact">Request a free claim review</a>
        <a class="btn btn-outline-navy" href="/process">See the process</a>
      </div>
    </div>
  </section>`;
}

export function contactPage(): string {
  return `
  <section class="hero-navy">
    <div class="container">
      <p class="eyebrow">Help first</p>
      <h1>Let’s look at your roof</h1>
      <p class="lead">Free claim check or inspection—tell us what’s going on. No pressure. Straight next steps.</p>
      <p class="micro-trust">Call <a href="tel:[PHONE]">[PHONE]</a> · Serving [SERVICE AREA] · Hours [HOURS]</p>
    </div>
  </section>

  <section class="section">
    <div class="container contact-grid">
      <div class="card">
        <h2>Request my free claim check</h2>
        <form class="contact-form" method="post" action="/contact" name="claim-check">
          <label>Name
            <input name="name" type="text" autocomplete="name" required />
          </label>
          <label>Phone
            <input name="phone" type="tel" autocomplete="tel" required />
          </label>
          <label>Email
            <input name="email" type="email" autocomplete="email" required />
          </label>
          <label>Address / area
            <input name="area" type="text" autocomplete="address-level2" placeholder="City or neighborhood in [SERVICE AREA]" />
          </label>
          <label>What’s going on
            <select name="issue" required>
              <option value="">Select one</option>
              <option>Storm damage</option>
              <option>Leak</option>
              <option>Age / wear</option>
              <option>Open claim — need help</option>
              <option>Other</option>
            </select>
          </label>
          <label>Insurance company <span class="optional">(optional)</span>
            <input name="carrier" type="text" />
          </label>
          <label>Best time to call
            <input name="best_time" type="text" placeholder="Weekday mornings, etc." />
          </label>
          <label class="checkbox">
            <input name="consent" type="checkbox" required />
            <span>I agree Fortress Roofing may contact me about this request. No spam. Easy opt-out.</span>
          </label>
          <button class="btn btn-copper" type="submit">Request my free claim check</button>
          <p class="form-note">Form posts to this Deno server next; until wired, call <a href="tel:[PHONE]">[PHONE]</a> or email [EMAIL].</p>
        </form>
      </div>
      <aside>
        <div class="card">
          <h2>Prefer to talk?</h2>
          <p class="lead"><a href="tel:[PHONE]">[PHONE]</a></p>
          <p>We’ll confirm within [RESPONSE SLA], then schedule a no-pressure look at your roof.</p>
        </div>
        <div class="card mt-6">
          <h2>What happens next</h2>
          <ol class="clean">
            <li>We confirm we got your note</li>
            <li>We schedule inspection or claim review</li>
            <li>You get a plain-English read—file, wait, or repair</li>
          </ol>
        </div>
        <div class="card mt-6">
          <h2>Where we work</h2>
          <p>[SERVICE AREA — cities / counties / radius]</p>
          <p class="form-note mb-0">Licenses: [LICENSE NOTE]</p>
        </div>
        <p class="mt-6 page-note">We treat every home like a place families should feel safe.</p>
      </aside>
    </div>
  </section>`;
}
