interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  description,
  center = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {badge && (
        <span className="mb-4 inline-flex items-center rounded-full border border-primary/12 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary shadow-[0_10px_24px_-18px_rgba(23,54,135,0.6)] backdrop-blur">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-[-0.03em] text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-[1.05rem]">
          {description}
        </p>
      )}
    </div>
  );
}
