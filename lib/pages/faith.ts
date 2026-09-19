export const faithMeta = {
  title: "Our faith | Fortress Roofing",
  description:
    "God as fortress and refuge—faith that shows up as honesty, care, and respect. You don’t have to share our faith to get our best work.",
  path: "/faith",
};

/**
 * Scripture display helper.
 *
 * SCRIPTURE_ANCHORS.md confirms LSB citations + theme roles only.
 * Licensed LSB wording is NOT in-repo — Prophet will supply it.
 * Do NOT invent LSB text. Do NOT publish KJV as the site default.
 */
function scriptureBlock(ref: string, role: string): string {
  // Citation + role only. Licensed LSB wording supplied later by Prophet — never invent verse body.
  return `
  <figure class="scripture-placeholder">
    <p class="ref">${ref} (LSB)</p>
    <p class="todo">Theme: ${role}</p>
  </figure>`;
}

export function faithPage(): string {
  return `
  <section class="hero-navy">
    <div class="container">
      <p class="eyebrow">Who we are under God</p>
      <h1>God as our fortress — your home as a safe dwelling</h1>
      <p class="lead">Faith shapes how we show up: honest in the estimate, careful in the install, and for your family—not for a hard sell.</p>
      <div class="cta-row">
        <a class="btn btn-ghost" href="/contact">Prefer to talk about the roof first? Request a free claim review</a>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container max-w-3xl">
      <h2>Shelter that holds. Strength without show.</h2>
      <p>We chose <em>Fortress</em> because a roof is covering—protection for the people who rest under it. Strength here means quiet reliability: flashing that doesn’t fail, a crew that finishes what it starts, and straight answers when insurance gets confusing.</p>
      <p>We do not claim to replace God as anyone’s refuge. We work <em>under</em> that idea: the home should feel like a place of peace again after the storm.</p>
      <p><strong>Primary brand anchor</strong></p>
      ${scriptureBlock("Psalm 18:2", "rock, fortress, deliverer, high tower")}
    </div>
  </section>

  <section class="section section-mist">
    <div class="container">
      <h2>Integrity in the estimate. Care in the install. Respect in every conversation.</h2>
      <p>Values only matter if you can see them on the job. Here’s what faith looks like in practice for us:</p>
      <div class="mt-6" style="overflow-x:auto">
        <table class="compare">
          <thead>
            <tr><th>Behavior</th><th>What it means on your project</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Integrity in the estimate</strong></td><td>We document real damage. We don’t invent it to force a claim.</td></tr>
            <tr><td><strong>Care in the install</strong></td><td>Details that keep water out—done as if your family were our own.</td></tr>
            <tr><td><strong>Respect in every conversation</strong></td><td>Your pace. Your decisions. No pressure, no shame, no spiritual guilt.</td></tr>
            <tr><td><strong>Help in trouble</strong></td><td>When the roof fails and insurance feels one-sided, we walk with you—not over you.</td></tr>
          </tbody>
        </table>
      </div>
      <div class="max-w-3xl mt-6">
        ${scriptureBlock("Psalm 46:1", "refuge and strength; help in trouble")}
        ${scriptureBlock("Proverbs 18:10", "strong tower; safety")}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container max-w-3xl">
      <h2>You don’t have to share our faith to get our best work</h2>
      <p>This page is honesty about who we are—not a filter for who we serve.</p>
      <p>Whether you share our faith, are curious about it, or want nothing to do with it, you get the same standard: clear communication, careful craft, and advocacy on a claim only when it’s the right path for <em>your</em> home and <em>your</em> policy.</p>
      <p class="mb-0">We will never use Scripture to close a sale, imply divine endorsement of a contract, or suggest that “good Christians hire us.” Faith is our compass. Your roof is the job.</p>
    </div>
  </section>

  <!-- Soft CTA immediately after inclusivity guardrail — help, not a closer -->
  <section class="section section-mist">
    <div class="container max-w-3xl">
      <h2>If your roof needs care, we’re here</h2>
      <p>Start with help—not a hard sell. A free claim review or a no-pressure inspection. We’ll look at the roof, talk straight about insurance when it applies, and leave the decision with you.</p>
      <div class="cta-row">
        <a class="btn btn-copper" href="/contact">Request a free claim review</a>
        <a class="btn btn-outline-navy" href="/insurance">See how insurance works</a>
      </div>
      <p class="micro-trust mt-4 mb-0">You don’t need to talk faith to get a clear answer on your roof.</p>
    </div>
  </section>

  <section class="section">
    <div class="container max-w-3xl">
      <h2>Refuge, dwelling, and a house that stands</h2>
      <p>A few passages shape how we think about covering, storm, and building. Citations confirmed in SCRIPTURE_ANCHORS.md (LSB). Licensed wording pending from Prophet—citation and theme role only for now.</p>

      <h3 class="mt-6">Dwelling under the Most High</h3>
      ${scriptureBlock("Psalm 91:1–2", "dwelling under the Most High; refuge and fortress")}

      <h3>Shelter from the tempest</h3>
      ${scriptureBlock("Isaiah 32:2", "hiding place from wind; covert from tempest; shadow of a great rock")}

      <h3>Refuge from the storm</h3>
      ${scriptureBlock("Isaiah 25:4", "refuge from the storm; shadow from the heat")}

      <h3>House founded on a rock</h3>
      ${scriptureBlock("Matthew 7:24–25", "house built on the rock; stands when rain, floods, and winds beat")}

      <h3>Everlasting arms</h3>
      ${scriptureBlock("Deuteronomy 33:27", "eternal God as refuge; everlasting arms (opening clause)")}

      <h3>Optional covering</h3>
      ${scriptureBlock("Psalm 91:3–4", "deliverance; covering; truth as shield")}
    </div>
  </section>

  <section class="section-tight">
    <div class="container">
      <p class="page-note">Scripture citations follow SCRIPTURE_ANCHORS.md (LSB). Full LSB wording is copyrighted and will be supplied by Prophet under license before public publish. Faith language on this site describes our values and conduct. It is not a condition of service and not a promise of insurance outcomes. Licenses: [LICENSE NOTE].</p>
    </div>
  </section>
`;
}
