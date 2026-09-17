/** Lightweight header used at the top of every marketing subpage (no full hero). */
export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="mx-auto max-w-[1200px] px-5 pb-4 pt-16 md:pt-20">
      <p className="mk-eyebrow">{eyebrow}</p>
      <h1 className="mk-display mt-4 max-w-[820px] text-[2.3rem] sm:text-[3rem]" style={{ color: "var(--navy)" }}>
        {title}
      </h1>
      {lead && (
        <p className="mt-5 max-w-[640px] text-[1.05rem] leading-relaxed" style={{ color: "var(--slate)" }}>
          {lead}
        </p>
      )}
    </div>
  );
}
