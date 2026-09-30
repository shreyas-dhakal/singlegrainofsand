import { cn } from "@/lib/utils";

/** A hairline with a single grain in the middle, used as a section divider. */
export function Ornament({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("flex items-center justify-center gap-4 text-gold", className)}>
      <span className="h-px w-16 bg-current opacity-60" />
      <span className="size-1.5 rotate-45 bg-current" />
      <span className="h-px w-16 bg-current opacity-60" />
    </div>
  );
}

/** Small uppercase label, optionally flanked by hairlines. */
export function Eyebrow({ children, className, lines = false }: { children: React.ReactNode; className?: string; lines?: boolean }) {
  return (
    <p className={cn("eyebrow flex items-center gap-3 text-bronze sm:gap-4", lines && "justify-center", className)}>
      {lines && <span aria-hidden className="h-px w-5 shrink-0 bg-current opacity-50 sm:w-10" />}
      {children}
      {lines && <span aria-hidden className="h-px w-5 shrink-0 bg-current opacity-50 sm:w-10" />}
    </p>
  );
}
