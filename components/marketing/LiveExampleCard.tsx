/**
 * Editorial proof piece: one real diligence exchange, showing the credit
 * reasoning applied to a management answer rather than describing it in the
 * abstract. Shares the navy/gold visual language of ProductMockup so the two
 * feel like the same system viewed two ways — a UI panel, and a transcript.
 */
export function LiveExampleCard() {
  return (
    <div
      className="overflow-hidden rounded-xl border"
      style={{
        background: "var(--navy)",
        borderColor: "color-mix(in srgb, var(--navy) 60%, #000)",
        boxShadow: "0 24px 60px -32px color-mix(in srgb, var(--navy) 55%, transparent)",
      }}
    >
      <div style={{ color: "var(--stone)" }}>
        {/* Management line */}
        <div className="px-6 pb-6 pt-7 sm:px-9 sm:pt-9">
          <div
            className="text-[10px] font-semibold uppercase tracking-widest"
            style={{ color: "color-mix(in srgb, var(--stone) 55%, transparent)" }}
          >
            Management
          </div>
          <p className="mk-display mt-3 text-[1.35rem] leading-snug sm:text-[1.6rem]">
            &ldquo;We expect EBITDA margins to expand by 300bps as the integration
            progresses.&rdquo;
          </p>
        </div>

        <div style={{ borderTop: "1px solid color-mix(in srgb, var(--stone) 12%, transparent)" }} />

        {/* Underwriter.AI turns */}
        <div className="grid gap-6 px-6 py-7 sm:px-9 sm:py-8 md:grid-cols-2 md:gap-8">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "var(--gold)" }}>
              First question
            </div>
            <p className="mt-2.5 text-[13.5px] leading-relaxed" style={{ color: "color-mix(in srgb, var(--stone) 88%, transparent)" }}>
              &ldquo;Give us the qualitative and quantitative support behind the 300bps
              expansion.&rdquo;
            </p>
          </div>
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "var(--gold)" }}>
              Goes deeper
            </div>
            <p className="mt-2.5 text-[13.5px] leading-relaxed" style={{ color: "color-mix(in srgb, var(--stone) 88%, transparent)" }}>
              &ldquo;Of the synergies the sponsor is underwriting to, how much is already
              actioned versus assumed?&rdquo;
            </p>
          </div>
        </div>

        {/* Credit implication */}
        <div className="px-6 pb-7 sm:px-9 sm:pb-9">
          <div
            className="rounded-lg p-4 sm:p-5"
            style={{
              background: "color-mix(in srgb, var(--stone) 6%, transparent)",
              borderLeft: "2px solid var(--gold)",
            }}
          >
            <div className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "var(--gold)" }}>
              Credit implication
            </div>
            <p className="mt-1.5 text-[13.5px] leading-relaxed">
              Separate synergies that are actioned and provable from ones the sponsor is
              still assuming.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
