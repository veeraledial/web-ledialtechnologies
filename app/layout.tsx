import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";
import { ORGANIZATION_JSON_LD } from "@/lib/utils/seo";
import { Analytics } from "@/components/Analytics";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ladialtechnologies.com"
  ),
  title: {
    default: "LaDial Technologies | Professional LED Display Solutions",
    template: "%s | LaDial Technologies",
  },
  description:
    "Leading manufacturer of professional LED displays for retail, broadcast, control rooms, and more. Indoor, outdoor, rental, and transparent LED solutions.",
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
    <html lang="en">
      <body className={`${syne.variable} antialiased`}>
        <JsonLd data={ORGANIZATION_JSON_LD} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
