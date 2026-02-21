import Link from "next/link";
import type { ReactNode } from "react";
import type { ButtonSize, ButtonVariant } from "./Button";
import { getButtonClassName } from "./Button";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function LinkButton({
  href,
  children,
  className,
  variant = "primary",
  size = "md",
}: LinkButtonProps) {
  return (
    <Link href={href} className={getButtonClassName({ variant, size, className })}>
      {children}
    </Link>
  );
}

