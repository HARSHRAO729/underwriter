import type { Metadata } from "next";
import { PageHeader } from "@/components/marketing/PageHeader";

export const metadata: Metadata = {
  title: "Trust",
  description:
    "What Underwriter AI is ready for today, what production deployment requires next, and how the product expands from analyst to institution.",
};

const FIT_STAGES = [
  { title: "Analyst", body: "Live diligence. Questions and analysis, call by call." },
  { title: "Team", body: "Shared context. House templates and workflow." },
  { title: "Institution", body: "Institution-specific knowledge — historical decisions and policies." },
];

const LIFECYCLE = ["Origination", "Diligence", "IC", "Monitoring"];

const TRUST_TODAY = [
  "Live MVP / web application",
  "Core reasoning framework + 35+ rules",
  "Synthetic lender-call environment",
  "Public-data / SEC EDGAR pipeline",
];

const TRUST_NEXT = [
  "Authenticated enterprise access",
  "Tenant isolation + retention controls",
  "Encryption / security validation",
  "Institution-specific knowledge layer",
];

export default function TrustPage() {
  return (
    <>
      <PageHeader
        eyebrow="Trust"
        title="An early product, being built for institutional use."
        lead="The current MVP is intentionally transparent about its stage. Production deployment requires additional security, access, and data controls."
      />

      <section aria-label="Today versus next">
        <div className="mx-auto max-w-[1200px] px-5 pb-20 pt-8 md:pb-24">
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="rounded-xl border p-6" style={{ borderColor: "var(--divider)" }}>
              <div className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: "var(--slate)" }}>
                Today
              </div>
              <ul className="mt-4 space-y-2.5">
                {TRUST_TODAY.map((t) => (
                  <li key={t} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: "var(--charcoal)" }}>
                    <span aria-hidden="true" style={{ color: "var(--gold)" }}>&middot;</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "var(--divider-strong)" }}>
              <div className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: "var(--gold)" }}>
                Next
              </div>
              <ul className="mt-4 space-y-2.5">
                {TRUST_NEXT.map((t) => (
                  <li key={t} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: "var(--charcoal)" }}>
                    <span aria-hidden="true" style={{ color: "var(--gold)" }}>&middot;</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-10 text-sm font-medium" style={{ color: "var(--navy)" }}>
            Built today &ne; production-ready for confidential client data.
          </p>
        </div>
      </section>

      {/* Institutional fit / roadmap */}
      <section aria-labelledby="fit-h" style={{ background: "var(--white)" }}>
        <div className="mx-auto max-w-[1200px] px-5 py-20 md:py-24">
          <p className="mk-eyebrow">Institutional fit</p>
          <h2 id="fit-h" className="mk-display mt-4 max-w-[640px] text-[2rem] sm:text-[2.5rem]" style={{ color: "var(--navy)" }}>
            Start with the analyst. Expand to the credit team.
          </h2>
          <p className="mt-5 max-w-[640px] text-[1.05rem] leading-relaxed" style={{ color: "var(--slate)" }}>
            Built for credit teams at banks and NBFCs. The initial use case is live diligence &mdash; the
            longer-term product becomes an institution-specific layer of credit intelligence.
          </p>
          <ol className="mt-12 grid gap-5 sm:grid-cols-3">
            {FIT_STAGES.map((s, i) => (
              <li key={s.title} className="rounded-xl border p-6" style={{ borderColor: "var(--divider)", background: "var(--white)" }}>
                <div
                  className="text-[11px] font-semibold"
                  style={{ fontFamily: "var(--font-mono-jb), monospace", color: "var(--gold)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 text-[1.05rem] font-medium" style={{ color: "var(--navy)" }}>
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--slate)" }}>
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
          <div className="mt-12 flex flex-wrap items-center gap-x-2 gap-y-2 border-t pt-8" style={{ borderColor: "var(--divider)" }}>
            <span className="mr-2 text-[11px] font-semibold uppercase tracking-widest" style={{ color: "var(--slate)" }}>
              Credit lifecycle
            </span>
            {LIFECYCLE.map((l, i) => (
              <span key={l} className="flex items-center gap-2">
                <span className="text-sm font-medium" style={{ color: "var(--navy)" }}>
                  {l}
                </span>
                {i < LIFECYCLE.length - 1 && (
                  <span aria-hidden="true" style={{ color: "var(--gold)" }}>
                    &rarr;
                  </span>
                )}
              </span>
            ))}
          </div>
          <p className="mt-8 text-sm font-medium" style={{ color: "var(--navy)" }}>
            Today: analyst workflow. Long term: institutional credit memory.
          </p>
        </div>
      </section>
    </>
  );
}
