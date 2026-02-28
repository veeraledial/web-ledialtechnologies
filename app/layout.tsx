import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";
import { ORGANIZATION_JSON_LD } from "@/lib/utils/seo";
import { Analytics } from "@/components/Analytics";
import { RouteScrollManager } from "@/components/RouteScrollManager";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ladialtechnologies.com"
  ),
  title: {
    default: "Ledial Technologies | Professional LED Display Solutions",
    template: "%s | Ledial Technologies",
  },
  description:
    "Professional services for indoor/outdoor LED displays, digital standees (A-type & I-type), and CCTV camera security—delivered with installation and support.",
  openGraph: {
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${openSans.variable} antialiased`} suppressHydrationWarning>
        <JsonLd data={ORGANIZATION_JSON_LD} />
        <RouteScrollManager />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
