import { ctaBand } from "../layout.ts";

export const insuranceMeta = {
  title: "How insurance can cover your roof | Fortress Roofing",
  description:
    "A clear path from inspection to claim to install—what you may owe, what the carrier typically pays, and how we walk with you. No pressure. No jargon wall.",
  path: "/insurance",
};

export function insurancePage(): string {
  return `
  <section class="hero-navy">
    <div class="container">
      <p class="eyebrow">Claims, explained</p>
      <h1>How insurance can cover your roof</h1>
      <p class="lead">A clear path from inspection to payout—so you’re not guessing, googling at midnight, or getting pushed into a “free roof” pitch that skips the fine print.</p>
      <div class="cta-row">
        <a class="btn btn-copper" href="/contact">Get a free claim review</a>
        <a class="btn btn-ghost" href="tel:[PHONE]">Talk to us — [PHONE]</a>
      </div>
      <p class="micro-trust">We guide the claim. You own the policy. You decide.</p>
    </div>
  </section>

  <section class="section">
    <div class="container max-w-3xl">
      <h2>When a claim often makes sense</h2>
      <p>Insurance isn’t magic—and it isn’t always the right move. A claim often makes sense when:</p>
      <ul class="clean">
        <li><strong>Storm damage</strong> — wind, hail, fallen limbs, or other sudden weather events your policy covers</li>
        <li><strong>Wear that becomes damage</strong> — leaks, failed flashing, or progressive failure an adjuster can document under your coverage</li>
        <li><strong>You’re already talking to your carrier</strong> — and need someone who can document the roof honestly</li>
      </ul>
      <p><strong>When we may tell you not to file:</strong><br />
      If the roof is simply at end of life with no covered event, or filing would hurt you more than it helps, we’ll say so. Helping first sometimes means <em>not</em> pushing a claim.</p>
    </div>
  </section>

  <section class="section section-mist">
    <div class="container">
      <h2>The claim, in plain steps</h2>
      <p>Six steps. You stay in control at every one.</p>
      <div class="grid-2 mt-6">
        <div class="card"><span class="step-num">1</span><h3>Inspect</h3><p>We walk the roof (and relevant interior signs), take photos, and write down what’s actually there—not a sales wish list.</p></div>
        <div class="card"><span class="step-num">2</span><h3>Document</h3><p>Clear photos, notes, and a scope that matches real conditions. Good documentation is how honest claims get taken seriously.</p></div>
        <div class="card"><span class="step-num">3</span><h3>File</h3><p>You (or we, with your okay) open or support the claim with your carrier. <strong>You</strong> are the policyholder. We don’t replace your relationship with your insurer.</p></div>
        <div class="card"><span class="step-num">4</span><h3>Approve</h3><p>The adjuster reviews. Sometimes there’s a meeting on site. Sometimes the first offer needs a supplement—more documentation for missed items. We help you understand what’s fair and what’s not.</p></div>
        <div class="card"><span class="step-num">5</span><h3>Install</h3><p>When the scope and numbers are clear and you choose to move forward, we build the roof to the approved work—and to a standard meant to last.</p></div>
        <div class="card"><span class="step-num">6</span><h3>Final check</h3><p>Walkthrough together. Punch list if needed. Warranty path explained. You’re not left guessing after the crew leaves.</p></div>
      </div>
      <p class="mt-6"><a href="/process">Full project process →</a></p>
    </div>
  </section>

  <section class="section">
    <div class="container max-w-3xl">
      <h2>What you may owe vs. what the carrier typically pays</h2>
      <p>People hear “insurance will pay for your roof” and hope it means $0. Sometimes the out-of-pocket is small. Sometimes it isn’t. Here’s the honest version.</p>
      <h3>Deductible</h3>
      <p>Your policy’s deductible is usually <strong>your</strong> share on a covered claim. That’s often the main check you write. We won’t hide it or pretend it doesn’t exist.</p>
      <h3>What the carrier typically pays (when coverage applies)</h3>
      <p>Approved roofing work in the claim scope—tear-off, materials, labor, and related line items the adjuster accepts. Exact numbers depend on your policy, depreciation rules, and the approved scope.</p>
      <h3>Depreciation &amp; recoverable depreciation</h3>
      <p>Some policies pay Actual Cash Value first, then release recoverable depreciation after work is done. We’ll explain how <em>your</em> estimate reads—not a generic internet answer.</p>
      <h3>Supplements</h3>
      <p>If the first estimate misses something real (hidden decking damage, code items, etc.), a supplement may be needed. That’s normal. It’s advocacy with evidence—not inventing damage.</p>
      <h3>When it isn’t covered (or isn’t worth it)</h3>
      <ul class="clean">
        <li>No covered event / excluded perils</li>
        <li>Wear-and-tear only, depending on policy</li>
        <li>Prior damage, poor maintenance exclusions, or limits that leave you upside-down</li>
      </ul>
      <p>If we believe a claim won’t help you, we say so. That is help first.</p>
      <p><strong>Phrase we use:</strong> <em>When coverage applies, a new roof can feel practically free—often mainly your deductible.</em></p>
      <p><strong>Phrase we refuse:</strong> “Your roof is 100% free!!!” · “We make insurance pay no matter what.” · Guaranteed approval.</p>
    </div>
  </section>

  <section class="section section-mist">
    <div class="container">
      <h2>We work with your carrier — we don’t bully you or them</h2>
      <p>You’ve seen the other pitch: storm-chaser urgency, “sign today,” vague promises of a free roof, pressure that doesn’t match the paperwork.</p>
      <div class="mt-6" style="overflow-x:auto">
        <table class="compare">
          <thead>
            <tr><th>Them (pattern to avoid)</th><th>Us</th></tr>
          </thead>
          <tbody>
            <tr><td>Invent or exaggerate damage</td><td>Document what’s real</td></tr>
            <tr><td>Guarantee the carrier will pay</td><td>Explain coverage <em>and</em> denial risk</td></tr>
            <tr><td>Trap you in a contract before the claim lands</td><td>You decide after you understand the numbers</td></tr>
            <tr><td>Vanish after the check</td><td>Local to [SERVICE AREA], accountable after install</td></tr>
            <tr><td>Weaponize faith or fear</td><td>Integrity as behavior—not a closing script</td></tr>
          </tbody>
        </table>
      </div>
      <ul class="clean mt-6">
        <li><strong>You</strong> own the insurance policy and the decisions.</li>
        <li><strong>We</strong> inspect, document, and advocate.</li>
        <li><strong>The carrier</strong> decides coverage under your contract.</li>
      </ul>
      <p class="mb-0">No dark patterns. No countdown timers. No “only two slots left.”</p>
    </div>
  </section>

  <section class="section">
    <div class="container max-w-3xl faq">
      <h2>Common questions before you call</h2>
      <details><summary>Will this really be free?</summary><p>Not as a guarantee. On a <strong>valid covered claim</strong>, many homeowners mainly pay their <strong>deductible</strong> (and anything outside the approved scope). We’ll estimate your likely share before you commit to install.</p></details>
      <details><summary>Do you guarantee the claim will be approved?</summary><p>No. Anyone who guarantees approval is selling you certainty they don’t control. We improve your odds with honest documentation and clear communication—not with tricks.</p></details>
      <details><summary>Are you pushing me to file a claim?</summary><p>No. Sometimes we recommend <em>not</em> filing. Help first means the right path for your home and your policy—not a claim for our pipeline.</p></details>
      <details><summary>Who talks to the insurance company?</summary><p>You stay the policyholder. With your permission, we coordinate with adjusters, share documentation, and help you understand offers and supplements.</p></details>
      <details><summary>What if my claim is denied?</summary><p>We’ll help you understand why and whether an appeal or more documentation is reasonable. We won’t invent damage to force a “yes.”</p></details>
      <details><summary>How long does this take?</summary><p>It varies by carrier, storm volume, and scope. We’ll give you a realistic range after inspection—not a fake “done this week” promise.</p></details>
      <details><summary>Do I have to use Fortress if you help with the claim?</summary><p>You decide who builds the roof. We earn the install with clarity and craft—not with a hostage claim file. <em>(Adjust if your contracts differ—flag for legal.)</em></p></details>
      <details><summary>Do I need to share your faith to work with you?</summary><p>No. You get our best work either way. Faith shapes our integrity; it isn’t a filter for customers. <a href="/faith">Our faith →</a></p></details>
      <details><summary>What should I prepare for the inspection?</summary><p>Access to the property, any prior claim or adjuster notes, and a short list of leaks or storm dates. We’ll bring the rest.</p></details>
    </div>
  </section>

  ${ctaBand({
    title: "Get a free claim review",
    body:
      "Tell us what’s going on with the roof. We’ll confirm within [RESPONSE SLA], look at the situation, and give you a plain-English read on whether a claim likely helps—and what you might owe if it does.",
    secondaryLabel: "Call [PHONE]",
    secondaryHref: "tel:[PHONE]",
    reassurance: "No pressure inspection. If it’s not a good claim, we’ll say so.",
  })}

  <section class="section-tight">
    <div class="container">
      <p class="page-note">Insurance outcomes depend on your policy, your carrier, and the facts of the loss. This page is educational, not a guarantee of coverage or payment. For licensing and company details, see the site footer: [LICENSE NOTE].</p>
    </div>
  </section>
`;
}
