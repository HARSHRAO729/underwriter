import Link from "next/link";
import { BrandLockup } from "./BrandMark";

const MAILTO = "mailto:arya.chudasama@dcsquare.vc?subject=Underwriter%20AI%20inquiry";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "var(--navy)", color: "var(--stone)" }}>
      <div className="mx-auto max-w-[1200px] px-5 py-14">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-xs">
            <Link href="/" aria-label="Underwriter AI home" className="inline-flex" style={{ color: "var(--stone)" }}>
              <BrandLockup glyphStyle={{ color: "var(--gold)" }} />
            </Link>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "color-mix(in srgb, var(--stone) 72%, transparent)" }}>
              AI credit analyst for leveraged finance
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <nav aria-label="Product">
              <div className="mk-eyebrow" style={{ color: "var(--gold)" }}>Product</div>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link href="/product" style={{ color: "var(--stone)" }}>Product</Link></li>
                <li><Link href="/faq" style={{ color: "var(--stone)" }}>FAQ</Link></li>
                <li><Link href="/dashboard" style={{ color: "var(--stone)" }}>Dashboard</Link></li>
              </ul>
            </nav>
            <nav aria-label="Company">
              <div className="mk-eyebrow" style={{ color: "var(--gold)" }}>Company</div>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link href="/team" style={{ color: "var(--stone)" }}>Team</Link></li>
                <li><Link href="/trust" style={{ color: "var(--stone)" }}>Trust</Link></li>
                <li><Link href="/pilot" style={{ color: "var(--stone)" }}>Pilot</Link></li>
              </ul>
            </nav>
            <div>
              <h2 className="mk-eyebrow" style={{ color: "var(--gold)" }}>Contact</h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li style={{ color: "var(--stone)" }}>Arya Chudasama, Co-founder</li>
                <li><a href={MAILTO} style={{ color: "var(--stone)" }}>arya.chudasama@dcsquare.vc</a></li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-10" style={{ border: 0, borderTop: "1px solid color-mix(in srgb, var(--stone) 16%, transparent)" }} />

        <div className="flex flex-col gap-2 text-xs" style={{ color: "color-mix(in srgb, var(--stone) 62%, transparent)" }}>
          <p>
            Underwriter AI is an independent product and is not affiliated with or endorsed by Goldman Sachs.
          </p>
          <p>© {year} Underwriter AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
