import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export function SectionLabel({ children, className, light = false }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest",
        light ? "text-brand-cyan" : "text-brand-blue",
        className
      )}
    >
      <span className="h-px w-6 bg-current" />
      {children}
    </span>
  );
}
