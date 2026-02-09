import Link from "next/link";

const ABOUT_LINKS = [
  { href: "/about/company-overview", label: "Company Overview" },
  { href: "/about/vision-mission", label: "Vision & Mission" },
  { href: "/about/facilities", label: "Manufacturing Facilities" },
  { href: "/about/leadership", label: "Leadership Team" },
  { href: "/about/global-presence", label: "Global Presence" },
  { href: "/about/certifications", label: "Certifications" },
  { href: "/about/careers", label: "Careers" },
];

export function AboutNav({ currentPath }: { currentPath?: string }) {
  return (
    <nav className="border-b border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap gap-x-8 gap-y-2 py-4">
          {ABOUT_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium ${
                  currentPath === link.href
                    ? "text-[var(--brand-red)]"
                    : "text-[var(--muted)] hover:text-[var(--brand-red)]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
