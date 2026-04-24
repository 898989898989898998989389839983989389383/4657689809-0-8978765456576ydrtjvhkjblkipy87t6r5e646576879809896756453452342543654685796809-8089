import { cn } from "../lib/utils";
import { Zap } from "lucide-react";

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
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/35 bg-[linear-gradient(135deg,#ffffff_0%,#fff0b8_48%,#f97316_100%)] shadow-[0_10px_28px_-14px_rgba(0,0,0,0.65)]">
        <Zap className="h-6 w-6 fill-orange-500 text-orange-700" strokeWidth={2.4} />
      </span>
      <div className="flex flex-col">
        <span
          className={cn(
            "text-xl font-black uppercase leading-none tracking-wide text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.28)] sm:text-2xl",
            textClassName,
          )}
        >
          Shuva <span className="text-yellow-200">Electric</span>
        </span>
        {subtitle ? (
          <span className={cn("mt-1 block text-[11px] font-medium text-white/80", subtitleClassName)}>
            {subtitle}
          </span>
        ) : null}
      </div>
    </div>
  );
}
