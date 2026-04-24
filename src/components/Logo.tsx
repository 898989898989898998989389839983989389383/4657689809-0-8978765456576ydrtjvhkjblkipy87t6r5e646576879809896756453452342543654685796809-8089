import { cn } from "../lib/utils";

type LogoProps = {
  className?: string;
  subtitle?: string;
  subtitleClassName?: string;
  textClassName?: string;
};

export default function Logo({
  className,
  subtitle,
  subtitleClassName,
  textClassName,
}: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="flex flex-col">
        <span
          className={cn(
            "text-xl font-extrabold uppercase leading-tight tracking-wide text-orange-700 sm:text-2xl",
            textClassName,
          )}
        >
          Shuva Electric
        </span>
        {subtitle ? (
          <span className={cn("mt-1 block text-[11px] text-muted-foreground", subtitleClassName)}>
            {subtitle}
          </span>
        ) : null}
      </div>
    </div>
  );
}
