// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dhanwaan — Empowering Smart Savings",
  description:
    "Dhanwaan transforms thrift savings culture with e-mandate automation, transparency, and easy digital savings.",
  openGraph: {
    title: "Dhanwaan — Empowering Smart Savings",
    description:
      "Automated savings and transparent records for individuals and families.",
    url: "https://your-domain.com",
    siteName: "Dhanwaan",
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
