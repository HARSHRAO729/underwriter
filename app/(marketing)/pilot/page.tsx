import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pilot",
  description: "What a pilot with Underwriter AI actually involves.",
};

const MAILTO = "mailto:arya.chudasama@dcsquare.vc?subject=Underwriter%20AI%20inquiry";

const PILOT = [
  { step: "01", title: "Select a transaction", body: "Use a representative diligence workflow." },
  { step: "02", title: "Run the call", body: "Compare live questioning and context capture." },
  { step: "03", title: "Review the output", body: "Assess follow-ups, risks, and IC readiness." },
  { step: "04", title: "Measure the workflow", body: "Identify time saved, gaps surfaced, and repeatable use cases." },
];

export default function PilotPage() {
  return (
    <section aria-labelledby="contact-h" style={{ background: "var(--navy)" }}>
      <div className="mx-auto max-w-[1200px] px-5 py-20 md:py-28">
        <p className="mk-eyebrow" style={{ color: "var(--gold)" }}>
          Pilot
        </p>
        <h1 id="contact-h" className="mk-display mt-4 max-w-[640px] text-[2.3rem] sm:text-[3rem]" style={{ color: "var(--stone)" }}>
          The next step is simple: put it in a real workflow.
        </h1>
        <p
          className="mt-5 max-w-xl text-[1.05rem] leading-relaxed"
          style={{ color: "color-mix(in srgb, var(--stone) 78%, transparent)" }}
        >
          We are building with credit teams to validate where Underwriter AI creates the most value.
        </p>
        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PILOT.map((p) => (
            <li key={p.step}>
              <div className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: "var(--gold)" }}>
                {p.step}
              </div>
              <h2 className="mt-2 text-[1.05rem] font-medium" style={{ color: "var(--stone)" }}>
                {p.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "color-mix(in srgb, var(--stone) 72%, transparent)" }}>
                {p.body}
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-12 text-sm font-medium" style={{ color: "var(--gold)" }}>
          No long implementation thesis. Start with one deal.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 border-t pt-10" style={{ borderColor: "color-mix(in srgb, var(--stone) 16%, transparent)" }}>
          <a
            href={MAILTO}
            className="rounded-md px-5 py-3 text-sm font-medium transition-opacity hover:opacity-90"
            style={{ background: "var(--gold)", color: "var(--navy)" }}
          >
            Contact Underwriter AI
          </a>
        </div>
      </div>
    </section>
  );
}
