// app/features/page.tsx
import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

// Sections for this page
import FeaturesHero from "../components/features/FeaturesHero";
import FeaturesExplore from "../components/features/FeaturesExplore";
import FeaturesCTA from "../components/features/FeaturesCTA";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Nav />
      <FeaturesHero />
      <FeaturesExplore />
      <FeaturesCTA />
      <Footer />
    </main>
  );
}
