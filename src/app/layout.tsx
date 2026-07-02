import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import type { ReactNode } from "react";
import { SiteLayout } from "@/layouts/SiteLayout";
import { siteMetadata } from "@/shared/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.baseUrl),
  title: siteMetadata.title,
  description: siteMetadata.description,
  robots: { index: true, follow: true },
  openGraph: {
    title: "Ramy Ramzy | GIS Portfolio",
    description: "Clean GIS portfolio with static project galleries.",
    locale: "ar_EG",
    type: "website"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable}`}>
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
