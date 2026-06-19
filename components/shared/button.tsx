"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  showArrow?: boolean;
};

export function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className,
  type = "button",
  disabled,
  showArrow = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2";

  const variants = {
    primary:
      "bg-brand-cyan text-deep-navy hover:bg-[#14b8ea] hover:shadow-lg",
    secondary:
      "bg-brand-blue text-white hover:bg-[#064d94] hover:shadow-lg",
    outline:
      "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white",
    white:
      "border-2 border-white text-white bg-transparent hover:bg-white/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-base lg:text-lg",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`group ${classes}`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group ${classes} disabled:opacity-60 disabled:cursor-not-allowed`}
    >
      {content}
    </button>
  );
}
