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
}: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="flex flex-col">
        <img
          src="/logo.png"
          alt="Shuva Electric And Electronic logo"
          className="logo-glow h-14 w-auto max-w-[11rem] shrink-0 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]"
          loading="eager"
        />
        {subtitle ? (
          <span className={cn("mt-1 block text-[11px] text-muted-foreground", subtitleClassName)}>
            {subtitle}
          </span>
        ) : null}
      </div>
    </div>
  );
}
