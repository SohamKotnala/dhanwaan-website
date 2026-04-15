import "./globals.css";
import type { Metadata, Viewport } from "next";

// 1. Next.js handles the viewport here now, avoiding any duplicates!
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

// 2. Next.js automatically builds all <title> and <meta> tags from this
export const metadata: Metadata = {
  // This forces HTTPS for every single SEO tag Next.js generates
  metadataBase: new URL("https://www.dhanwaanfinance.com"), 
  
  title: "Dhanwaan — Empowering Smart Savings",
  description:
    "Dhanwaan transforms thrift savings culture with e-mandate automation, transparency, and easy digital savings.",
  
  // THE LIFESAVER: This tells Google that dhanwaanfinance.com is the ONLY boss
  alternates: {
    canonical: "/", // metadataBase automatically prepends the domain here
  },
  
  openGraph: {
    title: "Dhanwaan — Empowering Smart Savings",
    description: "Automated savings and transparent records for individuals and families.",
    url: "https://www.dhanwaanfinance.com",
    siteName: "Dhanwaan Finance",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  icons: { icon: "/favicon.ico" }, // Don't forget your new apple-icon.png goes in the public/app folder!
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Notice the <head> tag is completely gone. Next.js handles it purely behind the scenes now. */}
      <body className="antialiased bg-white text-gray-800 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}