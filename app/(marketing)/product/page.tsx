import type { Metadata } from "next";
import { PageHeader } from "@/components/marketing/PageHeader";

export const metadata: Metadata = {
  title: "Product",
  description:
    "How Underwriter AI works: a live AI credit analyst built around the credit decision, not the meeting.",
};

const PILLARS = [
  {
    label: "Listens",
    title: "Understands the call",
    points: ["Tracks what management says", "Connects answers to deal context"],
  },
  {
    label: "Thinks",
    title: "Applies credit judgment",
    points: ["Tests assumptions", "Identifies what could change the credit view"],
  },
  {
    label: "Asks",
    title: "Surfaces what matters",
    points: ["Suggests the next question", "Creates follow-up and IC-ready output"],
  },
];

const METHOD = [
  {
    step: "01",
    title: "Connect",
    body: "Join the call as usual — dial-in or video. Nothing new for the analyst to operate.",
  },
  {
    step: "02",
    title: "Listen live",
    body: "Underwriter AI tracks the conversation and deal context in real time, with no meaningful lag.",
  },
  {
    step: "03",
    title: "Surface",
    body: "Follow-up questions and flags appear on screen while the call is still running — in time to ask them.",
  },
  {
    step: "04",
    title: "Deliver",
    body: "When the call ends, follow-ups, flagged risks, and IC-ready notes are already drafted.",
  },
];

const DIFFERENTIATION = [
  { name: "Meeting tools", items: ["Capture", "Transcribe", "Summarize", "Organize"] },
  { name: "Generic AI", items: ["Respond", "Answer questions", "Generate text", "Retrieve information"] },
  {
    name: "Underwriter AI",
    highlight: true,
    items: ["Ask the next question", "Test the credit case", "Prepare the IC view"],
  },
];

const RULE_EXAMPLES = [
  "Assumption testing",
  "Repayment capacity",
  "Liquidity stress",
  "Integration risk",
  "Revenue quality",
  "Pricing / flex",
];

const TEAM_BENEFITS = [
  { title: "More prepared", body: "Arrive at diligence with the deal context organized." },
  { title: "More focused", body: "Spend the call on questions that can change the credit view." },
  { title: "More consistent", body: "Apply the same analytical framework across transactions." },
  { title: "More leverage", body: "Turn the diligence record into follow-ups and IC materials faster." },
];

export default function ProductPage() {
  return (
    <>
      <PageHeader
        eyebrow="Product"
        title="A live AI credit analyst — not a post-call summary."
        lead="Underwriter AI is designed to work during the diligence process, not after it."
      />

      {/* Pillars */}
      <section aria-label="Product pillars">
        <div className="mx-auto max-w-[1200px] px-5 pb-20 pt-8 md:pb-24">
          <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-3">
            {PILLARS.map((p) => (
              <li key={p.label}>
                <div className="h-px w-10" style={{ background: "var(--gold)" }} />
                <div className="mt-4 text-[11px] font-semibold uppercase tracking-widest" style={{ color: "var(--gold)" }}>
                  {p.label}
                </div>
                <h3 className="mt-1.5 text-[1.05rem] font-medium" style={{ color: "var(--navy)" }}>
                  {p.title}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="text-sm leading-relaxed" style={{ color: "var(--slate)" }}>
                      {pt}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Method */}
      <section id="method" aria-labelledby="method-h" style={{ background: "var(--white)" }}>
        <div className="mx-auto max-w-[1200px] px-5 py-20 md:py-24">
          <p className="mk-eyebrow">How it works</p>
          <h2 id="method-h" className="mk-display mt-4 text-[2rem] sm:text-[2.5rem]" style={{ color: "var(--navy)" }}>
            Built to run inside the call — not after it.
          </h2>
          <p className="mt-5 max-w-[640px] text-[1.05rem] leading-relaxed" style={{ color: "var(--slate)" }}>
            A simple flow, from joining the call to a finished credit record, with no added latency to the
            conversation.
          </p>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {METHOD.map((m) => (
              <li key={m.step} className="rounded-xl border p-6" style={{ borderColor: "var(--divider)", background: "var(--white)" }}>
                <div className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: "var(--gold)" }}>
                  {m.step}
                </div>
                <h3 className="mt-3 text-[1.05rem] font-medium" style={{ color: "var(--navy)" }}>
                  {m.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed" style={{ color: "var(--slate)" }}>
                  {m.body}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-sm font-medium" style={{ color: "var(--navy)" }}>
            Real time, not overnight. The value happens live, inside the call.
          </p>
        </div>
      </section>

      {/* Differentiation */}
      <section aria-labelledby="diff-h">
        <div className="mx-auto max-w-[1200px] px-5 py-20 md:py-24">
          <p className="mk-eyebrow">Differentiation</p>
          <h2 id="diff-h" className="mk-display mt-4 max-w-[640px] text-[2rem] sm:text-[2.5rem]" style={{ color: "var(--navy)" }}>
            Most AI tools capture the meeting. Underwriter AI is built around the credit decision.
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {DIFFERENTIATION.map((col) => (
              <div
                key={col.name}
                className="rounded-xl p-6"
                style={
                  col.highlight
                    ? { background: "var(--navy)" }
                    : { border: "1px solid var(--divider)", background: "var(--white)" }
                }
              >
                <div
                  className="text-[11px] font-semibold uppercase tracking-widest"
                  style={{ color: col.highlight ? "var(--gold)" : "var(--slate)" }}
                >
                  {col.name}
                </div>
                <ul className="mt-4 space-y-2.5">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm leading-relaxed"
                      style={{ color: col.highlight ? "var(--stone)" : "var(--charcoal)" }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional knowledge */}
      <section aria-label="Institutional knowledge" style={{ background: "var(--navy)" }}>
        <div className="mx-auto max-w-[1200px] px-5 py-20 md:py-24">
          <p className="mk-eyebrow" style={{ color: "var(--gold)" }}>
            Institutional knowledge
          </p>
          <h2 className="mk-display mt-4 max-w-[640px] text-[2rem] sm:text-[2.5rem]" style={{ color: "var(--stone)" }}>
            Built on institutional credit judgment.
          </h2>
          <p
            className="mt-5 max-w-[640px] text-[1.05rem] leading-relaxed"
            style={{ color: "color-mix(in srgb, var(--stone) 78%, transparent)" }}
          >
            The product is being codified from real leveraged-finance underwriting experience.
          </p>
          <div className="mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-3">
            {[
              { big: "100+", small: "leveraged-finance transactions" },
              { big: "Credit frameworks", small: null },
              { big: "35+", small: "analytical rules" },
              { big: "Live AI analyst", small: null },
            ].map((n, i, arr) => (
              <div key={n.big} className="flex items-center gap-4 sm:gap-3">
                <div>
                  <div className="mk-display text-[1.6rem] sm:text-[1.9rem]" style={{ color: "var(--gold)" }}>
                    {n.big}
                  </div>
                  {n.small && (
                    <p
                      className="mt-1 max-w-[10rem] text-xs leading-snug"
                      style={{ color: "color-mix(in srgb, var(--stone) 65%, transparent)" }}
                    >
                      {n.small}
                    </p>
                  )}
                </div>
                {i < arr.length - 1 && (
                  <span aria-hidden="true" className="hidden text-lg sm:inline" style={{ color: "color-mix(in srgb, var(--stone) 35%, transparent)" }}>
                    &rarr;
                  </span>
                )}
              </div>
            ))}
          </div>
          <div
            className="mt-12 flex flex-wrap gap-x-3 gap-y-2 border-t pt-8"
            style={{ borderColor: "color-mix(in srgb, var(--stone) 14%, transparent)" }}
          >
            <span
              className="text-[11px] font-semibold uppercase tracking-widest"
              style={{ color: "color-mix(in srgb, var(--stone) 55%, transparent)" }}
            >
              Examples
            </span>
            {RULE_EXAMPLES.map((r, i) => (
              <span key={r} className="text-[13px]" style={{ color: "color-mix(in srgb, var(--stone) 82%, transparent)" }}>
                {r}
                {i < RULE_EXAMPLES.length - 1 ? <span style={{ color: "var(--gold)" }}> &middot; </span> : null}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* For your credit team */}
      <section aria-labelledby="augment-h" style={{ background: "var(--white)" }}>
        <div className="mx-auto max-w-[1200px] px-5 py-20 md:py-24">
          <p className="mk-eyebrow">For your credit team</p>
          <h2 id="augment-h" className="mk-display mt-4 max-w-[640px] text-[2rem] sm:text-[2.5rem]" style={{ color: "var(--navy)" }}>
            Designed to augment analysts &mdash; not replace them.
          </h2>
          <p className="mt-5 max-w-[640px] text-[1.05rem] leading-relaxed" style={{ color: "var(--slate)" }}>
            The analyst remains the decision-maker. Underwriter AI carries context, surfaces questions, and
            accelerates the work around the decision.
          </p>
          <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM_BENEFITS.map((b) => (
              <li key={b.title}>
                <div className="h-px w-10" style={{ background: "var(--gold)" }} />
                <h3 className="mt-4 text-[1.05rem] font-medium" style={{ color: "var(--navy)" }}>
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--slate)" }}>
                  {b.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
