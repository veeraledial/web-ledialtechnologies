import type { ReactNode } from "react";
import { joinClassNames } from "@/lib/utils/joinClassNames";

export type PageHeroAction = ReactNode;

type Align = "left" | "center";
type HeroSize = "default" | "compact";

export interface PageHeroProps {
  label?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  actions?: PageHeroAction;
  right?: ReactNode;
  align?: Align;
  size?: HeroSize;
  mobileRightFirst?: boolean;
  equalSplit?: boolean;
  rowClassName?: string;
  leftClassName?: string;
  rightClassName?: string;
  className?: string;
}

export function PageHero({
  label,
  title,
  subtitle,
  description,
  actions,
  right,
  align = "left",
  size = "default",
  mobileRightFirst = false,
  equalSplit = false,
  rowClassName,
  leftClassName,
  rightClassName,
  className,
}: PageHeroProps) {
  const isCentered = align === "center";
  const isCompact = size === "compact";

  return (
    <section className={joinClassNames("relative overflow-hidden bg-[var(--brand-navy)]", className)}>
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        aria-hidden
        style={{
          background:
            "radial-gradient(900px 380px at 15% 20%, rgba(232,106,92,0.22), transparent 62%), radial-gradient(750px 300px at 90% 10%, rgba(255,255,255,0.12), transparent 60%), radial-gradient(900px 420px at 70% 85%, rgba(232,106,92,0.14), transparent 60%)",
        }}
      />

      <div
        className={joinClassNames(
          "relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8",
          isCompact ? "py-3 sm:py-4 lg:py-5" : "py-10 sm:py-12 lg:py-14"
        )}
      >
        <div
          className={joinClassNames(
            isCompact ? "flex flex-col gap-5" : "flex flex-col gap-10",
            right ? "lg:flex-row lg:items-center lg:justify-between" : null,
            rowClassName
          )}
        >
          <div
            className={joinClassNames(
              right ? (equalSplit ? "lg:w-1/2" : "lg:w-[48%]") : "max-w-3xl",
              right && mobileRightFirst ? "order-2 lg:order-1" : null,
              isCentered ? "mx-auto text-center" : null,
              leftClassName
            )}
          >
            {label ? (
              <div className={joinClassNames("text-sm font-semibold uppercase tracking-wider text-[var(--brand-red)]")}>
                {label}
              </div>
            ) : null}

            <h1
              className={joinClassNames(
                "mt-3 font-bold tracking-tight text-white",
                isCompact ? "text-2xl sm:text-3xl" : "text-3xl sm:text-5xl"
              )}
            >
              {title}
            </h1>

            {subtitle ? (
              <p
                className={joinClassNames(
                  "leading-relaxed text-white/85",
                  isCompact ? "mt-2 text-sm sm:text-base" : "mt-5 text-lg sm:text-xl"
                )}
              >
                {subtitle}
              </p>
            ) : null}

            {description ? (
              <div className={joinClassNames("mt-4 text-base leading-relaxed text-white/75")}>
                {description}
              </div>
            ) : null}

            {actions ? (
              <div
                className={joinClassNames(
                  isCompact ? "mt-3 flex flex-wrap gap-3" : "mt-8 flex flex-wrap gap-3",
                  isCentered ? "justify-center" : null
                )}
              >
                {actions}
              </div>
            ) : null}
          </div>

          {right ? (
            <div
              className={joinClassNames(
                equalSplit ? "lg:w-1/2" : "lg:w-[52%]",
                mobileRightFirst ? "order-1 lg:order-2" : null,
                rightClassName
              )}
            >
              {right}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

