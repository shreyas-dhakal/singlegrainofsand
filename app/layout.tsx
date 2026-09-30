import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const jost = Jost({ variable: "--font-sans", subsets: ["latin"], weight: ["300", "400", "500"] });
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Single Grain of Sand — Photography by Kelly Ingerson",
    template: "%s · Single Grain of Sand",
  },
  description:
    "Sand photography by Kelly Ingerson: one-of-a-kind patterns shaped by the ocean along the coastlines of Australia and the United States.",
  openGraph: {
    title: "Single Grain of Sand",
    description: "Sand photography by Kelly Ingerson.",
    images: ["/images/hero-sand-gold.webp"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jost.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}>
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
