import type { Metadata } from "next";
import { PageHeader } from "@/components/marketing/PageHeader";

export const metadata: Metadata = {
  title: "FAQ",
  description: "What credit teams ask first about Underwriter AI.",
};

const FAQ = [
  {
    q: "What is Underwriter AI?",
    a: "A live AI credit analyst that works alongside your team during leveraged-finance diligence calls. It encodes 35+ analytical rules drawn from real underwriting experience, and works during the call, not just after it.",
  },
  {
    q: "Does it replace the analyst?",
    a: "No. The analyst remains the decision-maker. Underwriter AI carries deal context, surfaces the next question, and drafts the paperwork around the decision — it doesn't make the call.",
  },
  {
    q: "Is it ready for confidential client data?",
    a: "Not yet. The current MVP runs on synthetic transcripts and public data. Production deployment requires authenticated access, tenant isolation, retention controls, and independent security review — see Trust for exactly what's today versus what's next.",
  },
  {
    q: "How does live analysis work without slowing the call down?",
    a: "It listens and reasons in parallel with the conversation, publishing flags and follow-up questions to screen as they're identified. Nothing about the call itself waits on it.",
  },
  {
    q: "What does a pilot actually involve?",
    a: "One representative transaction. Run a call, compare the live questioning and context capture against your usual process, then review the output and measure what it saved. No implementation project — start with one deal.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHeader eyebrow="Questions" title="What credit teams ask first." />
      <section aria-label="Frequently asked questions">
        <div className="mx-auto max-w-[900px] px-5 pb-20 pt-8 md:pb-24">
          <div className="divide-y" style={{ borderColor: "var(--divider)" }}>
            {FAQ.map((f) => (
              <details key={f.q} className="group py-5">
                <summary
                  className="flex cursor-pointer list-none items-center justify-between gap-6 text-[1.02rem] font-medium"
                  style={{ color: "var(--navy)" }}
                >
                  {f.q}
                  <span aria-hidden="true" className="shrink-0 text-lg font-light transition-transform group-open:rotate-45" style={{ color: "var(--gold)" }}>
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-[720px] text-[15px] leading-relaxed" style={{ color: "var(--slate)" }}>
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
