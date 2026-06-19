import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
  light?: boolean;
}

export function SectionHeading({
  children,
  className,
  as: Component = "h2",
  light = false,
}: SectionHeadingProps) {
  return (
    <Component
      className={cn(
        "text-3xl sm:text-4xl lg:text-5xl font-bold heading-font tracking-tight display-heading",
        light ? "text-white" : "text-brand-navy",
        className
      )}
    >
      {children}
    </Component>
  );
}
