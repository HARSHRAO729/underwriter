import Link from "next/link";
import { ProductMockup } from "@/components/marketing/ProductMockup";
import { LiveExampleCard } from "@/components/marketing/LiveExampleCard";

const WORKFLOW = [
  { title: "Documents", body: "Sponsor materials, models, historicals." },
  { title: "Diligence", body: "Management answers, follow-ups, contradictions." },
  { title: "Analysis", body: "Leverage, liquidity, repayment capacity." },
  { title: "IC", body: "Briefing, memo, unresolved risks." },
];

export default function MarketingHome() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span
              className="inline-flex items-center rounded-full border px-3.5 py-1.5 text-xs font-medium"
              style={{ borderColor: "var(--divider-strong)", color: "var(--navy)" }}
            >
              For leveraged-finance credit teams at banks and NBFCs
            </span>
            <h1
              className="mk-display mt-6 text-[2.7rem] sm:text-[3.5rem] lg:text-[4.1rem]"
              style={{ color: "var(--navy)" }}
            >
              The credit analyst
              <br className="hidden sm:block" />
              <span className="mk-display-italic" style={{ color: "var(--gold)" }}>
                that never leaves the call.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed" style={{ color: "var(--slate)" }}>
              Underwriter AI works alongside credit teams during leveraged-finance diligence — helping
              analysts understand the deal, ask better questions, challenge assumptions, and prepare the
              credit view.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/pilot"
                className="rounded-md px-5 py-3 text-sm font-medium transition-opacity hover:opacity-90"
                style={{ background: "var(--navy)", color: "var(--stone)" }}
              >
                Discuss a pilot
              </Link>
              <Link
                href="/product"
                className="rounded-md border px-5 py-3 text-sm font-medium transition-colors"
                style={{ borderColor: "var(--divider-strong)", color: "var(--navy)" }}
              >
                See how it works
              </Link>
            </div>
          </div>
          <div className="lg:pl-4">
            <ProductMockup />
          </div>
        </div>
      </section>

      {/* Stat strip */}
      <section aria-label="By the numbers" style={{ background: "var(--navy)" }}>
        <div className="mx-auto max-w-[1200px] px-5 py-12">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:divide-x" style={{ borderColor: "color-mix(in srgb, var(--stone) 16%, transparent)" }}>
            {[
              { big: "100+", label: "leveraged-finance transactions behind the rule set" },
              { big: "35+", label: "encoded analytical rules, not a general-purpose model" },
              { big: "3", label: "connected stages: pre-call, live call, post-call" },
              { big: "0", label: "added latency — surfaced while the call is still live" },
            ].map((s) => (
              <div key={s.label} className="lg:px-6 lg:first:pl-0">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <div className="mk-display text-[2.5rem] sm:text-[2.75rem]" style={{ color: "var(--gold)" }}>
                    {s.big}
                  </div>
                  <p className="mt-2 max-w-[16rem] text-[13px] leading-relaxed" style={{ color: "color-mix(in srgb, var(--stone) 75%, transparent)" }}>
                    {s.label}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Problem / workflow */}
      <section aria-labelledby="problem-h">
        <div className="mx-auto max-w-[1200px] px-5 py-20 md:py-24">
          <h2 id="problem-h" className="mk-display max-w-[720px] text-[2rem] sm:text-[2.5rem]" style={{ color: "var(--navy)" }}>
            Credit teams already have the data. The harder problem is carrying judgment across the workflow.
          </h2>
          <p className="mt-6 max-w-[640px] text-[1.05rem] leading-relaxed" style={{ color: "var(--slate)" }}>
            The analyst is the connective tissue between documents, live calls, analysis, and committee
            review. Underwriter AI is designed to carry that context with them.
          </p>
          <ol className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {WORKFLOW.map((w, i) => (
              <li key={w.title} className="relative pl-0">
                <div className="flex items-baseline gap-3">
                  <span
                    className="text-[11px] font-semibold"
                    style={{ fontFamily: "var(--font-mono-jb), monospace", color: "var(--gold)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[1.05rem] font-medium" style={{ color: "var(--navy)" }}>
                    {w.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--slate)" }}>
                  {w.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Old way / new way */}
      <section aria-labelledby="change-h" style={{ background: "var(--white)" }}>
        <div className="mx-auto max-w-[1200px] px-5 py-20 md:py-24">
          <p className="mk-eyebrow">What changes</p>
          <h2 id="change-h" className="mk-display mt-4 max-w-[720px] text-[2rem] sm:text-[2.5rem]" style={{ color: "var(--navy)" }}>
            The gap isn&rsquo;t the call. It&rsquo;s everything that happens after it.
          </h2>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border p-7 sm:p-8" style={{ borderColor: "var(--divider)" }}>
              <div className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: "var(--slate)" }}>
                The old way
              </div>
              <ul className="mt-5 space-y-4">
                {[
                  "Notes captured manually, cleaned up after the fact",
                  "Questions asked without the full deal context in the room",
                  "Follow-ups drafted from memory, hours or days later",
                  "IC prep starts cold",
                ].map((t) => (
                  <li key={t} className="text-[15px] leading-relaxed" style={{ color: "var(--slate)" }}>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl p-7 sm:p-8" style={{ background: "var(--navy)" }}>
              <div className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: "var(--gold)" }}>
                The Underwriter AI way
              </div>
              <ul className="mt-5 space-y-4">
                {[
                  "Context carried live, from document to call",
                  "The next question surfaced in real time, while it still matters",
                  "Follow-ups and flags already drafted when the call ends",
                  "IC prep starts with the record already built",
                ].map((t) => (
                  <li key={t} className="text-[15px] leading-relaxed" style={{ color: "var(--stone)" }}>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Live example — the single best piece of proof: real credit reasoning, not a claim */}
      <section aria-labelledby="evidence-h">
        <div className="mx-auto max-w-[1200px] px-5 py-20 md:py-24">
          <p className="mk-eyebrow">Live example</p>
          <h2 id="evidence-h" className="mk-display mt-4 max-w-[640px] text-[2rem] sm:text-[2.5rem]" style={{ color: "var(--navy)" }}>
            It asks the question behind the answer.
          </h2>
          <p className="mt-5 max-w-[640px] text-[1.05rem] leading-relaxed" style={{ color: "var(--slate)" }}>
            The value is not the transcript. It is the credit reasoning applied to what management just
            said — captured live, not reconstructed afterward.
          </p>
          <div className="mt-12 max-w-[820px]">
            <LiveExampleCard />
          </div>
        </div>
      </section>

      {/* Closing nav CTA */}
      <section aria-label="Explore further" style={{ background: "var(--white)" }}>
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:py-20">
          <div className="flex flex-col items-start justify-between gap-8 border-t pt-12 sm:flex-row sm:items-center" style={{ borderColor: "var(--divider)" }}>
            <div>
              <h2 className="mk-display text-[1.6rem] sm:text-[1.9rem]" style={{ color: "var(--navy)" }}>
                See the product, the proof, or the team.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/product"
                className="rounded-md border px-5 py-3 text-sm font-medium transition-colors"
                style={{ borderColor: "var(--divider-strong)", color: "var(--navy)" }}
              >
                Product &rarr;
              </Link>
              <Link
                href="/trust"
                className="rounded-md border px-5 py-3 text-sm font-medium transition-colors"
                style={{ borderColor: "var(--divider-strong)", color: "var(--navy)" }}
              >
                Trust &rarr;
              </Link>
              <Link
                href="/pilot"
                className="rounded-md px-5 py-3 text-sm font-medium transition-opacity hover:opacity-90"
                style={{ background: "var(--navy)", color: "var(--stone)" }}
              >
                Discuss a pilot
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
