import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PricingSection from "../components/pricing/PricingSection";

export const metadata: Metadata = {
  title: "Pricing • Dhanwaan",
  description:
    "Simple, transparent subscription pricing for registered financial institutions using Dhanwaan’s SaaS platform.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Nav />
      <PricingSection />
      <Footer />
    </main>
  );
}
