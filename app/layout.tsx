import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dhanwaan — Empowering Smart Savings",
  description:
    "Dhanwaan transforms thrift savings culture with e-mandate automation, transparency, and easy digital savings.",
  
  // THE LIFESAVER: This tells Google that dhanwaanfinance.com is the ONLY boss, 
  // even if they find this site on dhanwaan.in or dhanwaanapp.com
  alternates: {
    canonical: "https://www.dhanwaanfinance.com", 
  },
  
  openGraph: {
    title: "Dhanwaan — Empowering Smart Savings",
    description: "Automated savings and transparent records for individuals and families.",
    url: "https://www.dhanwaanfinance.com", // Updated to your main domain
    siteName: "Dhanwaan Finance",
    // Make sure you actually have an og-image.jpg or dhan-logo-final.png in your public folder!
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
        />
      </head>
      <body className="antialiased bg-white text-gray-800 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}