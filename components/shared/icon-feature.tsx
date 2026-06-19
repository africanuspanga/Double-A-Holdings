import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface IconFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  light?: boolean;
}

export function IconFeature({
  icon: Icon,
  title,
  description,
  className,
  light = false,
}: IconFeatureProps) {
  return (
    <div className={cn("flex gap-4", className)}>
      <div
        className={cn(
          "flex-shrink-0 inline-flex items-center justify-center h-12 w-12 rounded-lg",
          light ? "bg-white/10 text-brand-cyan" : "bg-soft-blue text-brand-blue"
        )}
      >
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h3
          className={cn(
            "text-lg font-bold heading-font",
            light ? "text-white" : "text-brand-navy"
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "mt-1 text-sm leading-relaxed",
            light ? "text-white/70" : "text-slate-text"
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
