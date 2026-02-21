import type { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "outline-white" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variants = {
  primary:
    "bg-[var(--color-accent)] text-[var(--color-light)] hover:bg-[var(--color-accent-hover)] border-0 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-glow-red)] active:scale-[0.98] transition-all duration-200",
  secondary:
    "bg-[var(--color-dark)] text-[var(--color-light)] hover:bg-[var(--brand-navy-light)] border-0 shadow-[var(--shadow-sm)] active:scale-[0.98] transition-all duration-200",
  outline:
    "bg-transparent border-2 border-[var(--color-dark)] text-[var(--color-dark)] hover:bg-[var(--color-dark)] hover:text-[var(--color-light)] active:scale-[0.98] transition-all duration-200",
  "outline-white":
    "bg-transparent border-2 border-[var(--color-light)] text-[var(--color-light)] hover:bg-[var(--color-light)] hover:text-[var(--color-dark)] active:scale-[0.98] transition-all duration-200",
  ghost:
    "bg-transparent text-[var(--color-dark)] hover:bg-[var(--neutral-dark)] border-0 transition-colors duration-200",
};

const sizes = {
  sm: "px-5 py-2.5 text-sm font-semibold tracking-wide rounded-xl",
  md: "px-6 py-3 text-base font-semibold tracking-wide rounded-xl",
  lg: "px-8 py-4 text-base font-semibold tracking-wide rounded-xl",
};

export function getButtonClassName({
  variant = "primary",
  size = "md",
  className = "",
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}): string {
  return `inline-flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${sizes[size]} ${className}`;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={getButtonClassName({ variant, size, className })}
      {...props}
    >
      {children}
    </button>
  );
}
