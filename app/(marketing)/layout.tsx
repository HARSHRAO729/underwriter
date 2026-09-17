import type { Metadata } from "next";
import { SiteNav } from "@/components/marketing/SiteNav";
import { SiteFooter } from "@/components/marketing/SiteFooter";

const DESCRIPTION =
  "Underwriter AI helps leveraged-finance analysts ingest deal data, surface critical diligence questions, test transactions, and prepare institutional-quality credit materials.";

export const metadata: Metadata = {
  title: {
    default: "Underwriter AI | AI Credit Analyst for Leveraged Finance",
    template: "%s | Underwriter AI",
  },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    title: "Underwriter AI | AI Credit Analyst for Leveraged Finance",
    description: DESCRIPTION,
    siteName: "Underwriter AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Underwriter AI | AI Credit Analyst for Leveraged Finance",
    description: DESCRIPTION,
  },
};

export default function MarketingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="marketing-shell flex min-h-full flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:px-4 focus:py-2"
        style={{ background: "var(--navy)", color: "var(--stone)" }}
      >
        Skip to content
      </a>
      <div
        className="border-b text-center text-xs"
        style={{ background: "var(--navy)", color: "var(--stone)", borderColor: "color-mix(in srgb, var(--stone) 14%, transparent)" }}
      >
        <p className="mx-auto max-w-[1200px] px-5 py-2.5">
          Customer discussion draft &middot; built by Goldman Sachs&ndash;trained leveraged-finance underwriters &middot;{" "}
          <a href="/team" style={{ color: "var(--gold)", fontWeight: 500 }}>
            Meet the team &rarr;
          </a>
        </p>
      </div>
      <SiteNav />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
