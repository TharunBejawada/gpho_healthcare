import type { Metadata, Viewport } from "next";
import { Lexend, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const lexend = Lexend({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-lexend", display: "swap" });
const source = Source_Sans_3({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-source", display: "swap" });

export const metadata: Metadata = {
  title: "GPHO – Group Purchase Health Organisation",
  description: "Hospitals, clinics and pharmacies buy surgicals, injections, oral drugs and implants together through GPHO, at better prices and delivered to their doorstep.",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lexend.variable} ${source.variable}`}>
      <body>{children}</body>
    </html>
  );
}
