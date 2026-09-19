import { ctaBand } from "../layout.ts";

export const homeMeta = {
  title: "Fortress Roofing | Claim-led help for a roof that holds",
  description:
    "We help first—honest inspection and insurance claim guidance—so a covered roof replacement is clear, workable, and built to protect your home.",
  path: "/",
};

export function homePage(): string {
  return `
  <!-- Hero -->
  <section class="hero-navy">
    <div class="container">
      <p class="eyebrow">Storm damage · Claim guidance · Honest work</p>
      <h1>Your roof shouldn’t keep you up at night.</h1>
      <p class="lead">We help first—inspecting honestly and guiding the insurance claim—so when coverage applies, a sturdy new roof is practically within reach. You get a safe covering. We handle the paperwork maze with you.</p>
      <div class="cta-row">
        <a class="btn btn-copper" href="/contact">Request a free claim review</a>
        <a class="btn btn-ghost" href="/insurance">See how insurance works</a>
      </div>
      <p class="micro-trust">No pressure. Straight answers. [LICENSE NOTE] · Local to [SERVICE AREA]</p>

      <ul class="trust-strip" aria-label="Trust">
        <li>No pressure. Straight answers.</li>
        <li>You own the policy. We guide the claim.</li>
        <li>Licensed &amp; insured.</li>
        <li>Local crews — we don’t vanish after the check.</li>
      </ul>
    </div>
  </section>

  <!-- Problem -->
  <section class="section">
    <div class="container max-w-3xl">
      <h2>A damaged roof is stressful enough. Fighting insurance alone makes it worse.</h2>
      <p>Leaks. Missing shingles. An adjuster visit you don’t feel ready for. The worry that someone will upsell you—or vanish after a deposit.</p>
      <p>You shouldn’t have to carry that alone.</p>
      <p class="mb-0">We start by helping: a clear look at the damage, a plain explanation of what a claim can cover, and a path forward you control.</p>
    </div>
  </section>

  <!-- Process snapshot -->
  <section class="section section-mist">
    <div class="container">
      <h2>From first call to final walkthrough</h2>
      <p class="lead">Four steps. No surprises at the end.</p>
      <div class="grid-4 mt-6">
        <div class="card">
          <span class="step-num">1</span>
          <h3>Inspect honestly</h3>
          <p>We document what’s there—not what a sales script wants. If it’s not a strong claim, we say so.</p>
        </div>
        <div class="card">
          <span class="step-num">2</span>
          <h3>Guide the claim</h3>
          <p>We help assemble the paperwork, photos, and scope so you’re not alone with the carrier. You own the policy; we walk with you.</p>
        </div>
        <div class="card">
          <span class="step-num">3</span>
          <h3>Build the fortress</h3>
          <p>When work is approved, we install with materials and details meant to hold through the next storm season.</p>
        </div>
        <div class="card">
          <span class="step-num">4</span>
          <h3>Walk it with you</h3>
          <p>Final check together. Questions answered. Warranty path clear.</p>
        </div>
      </div>
      <p class="mt-6"><a href="/process">See the full process →</a></p>
      <div class="cta-row">
        <a class="btn btn-outline-navy" href="/contact">Schedule a no-pressure inspection</a>
      </div>
    </div>
  </section>

  <!-- Insurance spotlight -->
  <section class="section">
    <div class="container">
      <div class="max-w-3xl">
        <h2>When insurance covers it, the roof can feel practically free</h2>
        <p>“Practically free” means this: on a <strong>valid, covered claim</strong>, the carrier typically pays for the approved roof work, and your main out-of-pocket is often your <strong>deductible</strong>—plus anything your policy doesn’t cover.</p>
        <p>It does <strong>not</strong> mean we guarantee approval, invent damage, or promise a $0 roof every time.</p>
      </div>
      <div class="grid-2 mt-6">
        <div class="card">
          <h3>What we handle</h3>
          <ul class="clean">
            <li>Honest inspection and documentation</li>
            <li>Clear scope and photos for the claim</li>
            <li>Coordination and advocacy with your adjuster</li>
          </ul>
        </div>
        <div class="card">
          <h3>What you decide</h3>
          <ul class="clean">
            <li>Whether to file</li>
            <li>What to accept from the carrier</li>
            <li>When to move forward with install</li>
          </ul>
        </div>
      </div>
      <p class="mt-6"><a href="/insurance">How insurance works →</a></p>
      <div class="cta-row">
        <a class="btn btn-copper" href="/contact">Get a free claim review</a>
      </div>
    </div>
  </section>

  <!-- Why Fortress -->
  <section class="section section-mist">
    <div class="container">
      <h2>A fortress for your family — and a standard we take seriously</h2>
      <div class="grid-2 mt-6">
        <div class="card">
          <h3>Integrity before the sale</h3>
          <p>Faith shapes how we show up: honest estimates, no invented damage, respect for your pace. You don’t have to share our faith to get our best work. <a href="/faith">Our faith →</a></p>
        </div>
        <div class="card">
          <h3>Local accountability</h3>
          <p>We’re here for [SERVICE AREA]—not a storm-chaser flash in the pan. Real people. Real follow-through.</p>
        </div>
        <div class="card">
          <h3>Quality that holds</h3>
          <p>Flashing, underlayment, ridge, ventilation—the quiet details that keep water out. Craft over swagger.</p>
        </div>
        <div class="card">
          <h3>Transparent communication</h3>
          <p>You’ll know what’s covered, what’s not, and what happens next. No jargon wall.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Social proof — real testimonials only; hide placeholders -->
  <section class="section">
    <div class="container max-w-3xl">
      <h2>Neighbors who slept easier after</h2>
      <p class="mb-0">Real homeowner stories will live here once we have permission to share them. Until then, we’ll earn trust the slow way: clear process, honest claims guidance, and work that holds.</p>
      <p class="mt-4 mb-0 form-note">We regularly work with major carriers in [SERVICE AREA]. We don’t “beat” insurance—we help you use the coverage you already pay for.</p>
    </div>
  </section>

  <!-- Services -->
  <section class="section section-mist">
    <div class="container">
      <h2>What we do</h2>
      <div class="grid-3 mt-6">
        <div class="card">
          <h3>Roof replacement</h3>
          <p>Full tear-off and rebuild when repair isn’t enough—claim-supported when coverage applies.</p>
        </div>
        <div class="card">
          <h3>Storm &amp; damage repair</h3>
          <p>Targeted fixes when the right move is repair, not a full replacement. We’ll tell you which.</p>
        </div>
        <div class="card">
          <h3>Inspection &amp; documentation</h3>
          <p>The starting point: eyes on the roof, photos, and a plain-language report you can use with your carrier.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Gallery strip — no fake photos -->
  <section class="section">
    <div class="container max-w-3xl">
      <h2>Work that holds up</h2>
      <p>Real homes. Real weather. Real finish.</p>
      <p class="mt-4 mb-0 form-note">Project photos coming soon.</p>
      <p class="mt-4 mb-0"><a href="/gallery">Gallery →</a></p>
    </div>
  </section>

  <!-- Service area -->
  <section class="section section-mist">
    <div class="container max-w-3xl">
      <h2>Where we work</h2>
      <p>Proudly serving [SERVICE AREA — cities / counties / radius].</p>
      <div class="gallery-ph mt-4" style="aspect-ratio:21/9;max-width:42rem">[PLACEHOLDER MAP]</div>
      <p class="mt-4 mb-0">Not sure if you’re in range? Call [PHONE] or <a href="/contact">request a claim review</a> and we’ll tell you straight.</p>
    </div>
  </section>

  ${ctaBand({
    title: "Ready when you are",
    body:
      "Start with help, not a hard sell. Request a free claim review or a no-pressure inspection. We’ll confirm within [RESPONSE SLA — e.g. one business day], then schedule a look at your roof.",
    secondaryLabel: "Call [PHONE]",
    secondaryHref: "tel:[PHONE]",
  })}
`;
}
