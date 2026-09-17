import type { Metadata } from "next";
import { PageHeader } from "@/components/marketing/PageHeader";

export const metadata: Metadata = {
  title: "Team",
  description: "The team behind Underwriter AI.",
};

const TEAM_MEMBERS = ["Jay Dobariya", "Jignesh Thakkar", "Harsh Rao", "Vrushti Somaiya"];

export default function TeamPage() {
  return (
    <>
      <PageHeader eyebrow="Team" title="The people behind Underwriter AI." />
      <section aria-label="Leadership">
        <div className="mx-auto max-w-[900px] px-5 pb-20 pt-8 md:pb-24">
          <article>
            <div className="h-px w-10" style={{ background: "var(--gold)" }} />
            <h2 className="mk-display mt-4 text-[2.1rem] sm:text-[2.4rem]" style={{ color: "var(--navy)" }}>
              Arya Chudasama
            </h2>
            <p className="mt-2 text-sm font-medium uppercase tracking-widest" style={{ color: "var(--gold)" }}>
              Co-founder
            </p>
            <a
              href="mailto:arya.chudasama@dcsquare.vc"
              className="mt-3 inline-block text-[1.02rem]"
              style={{ color: "var(--navy)" }}
            >
              arya.chudasama@dcsquare.vc
            </a>
          </article>

          <div className="mt-14 border-t pt-10" style={{ borderColor: "var(--divider)" }}>
            <p className="mk-eyebrow">Team</p>
            <ul className="mt-5 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {TEAM_MEMBERS.map((name) => (
                <li key={name} className="text-[1.05rem]" style={{ color: "var(--navy)" }}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
