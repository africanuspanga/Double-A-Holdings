import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ServicePanelProps {
  title: string;
  description: string;
  href: string;
  image: string;
  className?: string;
  size?: "large" | "tall" | "medium" | "small" | "full";
}

export function ServicePanel({
  title,
  description,
  href,
  image,
  className,
  size = "medium",
}: ServicePanelProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl bg-white border border-border-blue shadow-sm hover:shadow-md transition-all",
        size === "large" && "md:col-span-2 md:flex-row",
        size === "tall" && "md:row-span-2",
        size === "full" && "md:col-span-3",
        className
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden",
          size === "large" ? "md:w-1/2 h-56 md:h-auto" : "h-48",
          size === "tall" && "h-64",
          size === "full" && "h-56 md:h-72"
        )}
      >
        <Image
          src={image}
          alt=""
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/60 to-transparent" />
      </div>
      <div className="flex flex-col justify-between p-5 lg:p-6 flex-1">
        <div>
          <h3 className="text-xl lg:text-2xl font-bold heading-font text-brand-navy group-hover:text-brand-blue transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-slate-text text-sm lg:text-base leading-relaxed">
            {description}
          </p>
        </div>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-cyan">
          Explore
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
