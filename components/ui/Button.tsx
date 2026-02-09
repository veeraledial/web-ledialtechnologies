import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "outline-white" | "ghost";
  size?: "sm" | "md" | "lg";
}

const variants = {
  primary:
    "bg-[var(--brand-red)] text-white hover:bg-[var(--brand-red-hover)] border-transparent shadow-sm hover:shadow-md hover:shadow-[var(--brand-red)]/20 transition-all",
  secondary:
    "bg-[var(--brand-navy)] text-white hover:bg-[var(--brand-navy-light)] border-transparent",
  outline:
    "bg-transparent border-2 border-[var(--brand-navy)] text-[var(--brand-navy)] hover:bg-[var(--brand-navy)] hover:text-white transition-colors",
  "outline-white":
    "bg-transparent border-2 border-white text-white hover:bg-[#e0e1dd] hover:text-[var(--brand-navy)] transition-colors",
  ghost:
    "bg-transparent text-foreground hover:bg-[var(--neutral-dark)] border-transparent",
};

const sizes = {
  sm: "px-4 py-2 text-sm uppercase tracking-wider font-semibold",
  md: "px-6 py-3 text-base uppercase tracking-wider font-semibold",
  lg: "px-8 py-4 text-lg uppercase tracking-wider font-semibold",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-[6px] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)] focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
