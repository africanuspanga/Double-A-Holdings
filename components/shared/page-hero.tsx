import { cn } from "@/lib/utils";
import { SectionLabel } from "@/components/shared/section-label";

interface PageHeroProps {
  label?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export function PageHero({
  label,
  title,
  description,
  children,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative bg-deep-navy text-white overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-deep-navy via-brand-navy to-brand-blue opacity-90" />
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="0" y1="80" x2="100" y2="20" stroke="#16a3df" strokeWidth="0.5" />
          <line x1="0" y1="90" x2="100" y2="30" stroke="#16a3df" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          {label && <SectionLabel light>{label}</SectionLabel>}
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold heading-font tracking-tight display-heading">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg lg:text-xl text-white/80 max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
