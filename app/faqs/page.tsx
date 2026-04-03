import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import FaqsSection from "../components/faqs/FaqsSection";
import AskMore from "../components/faqs/AskMore";

export default function FaqsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <Nav />

      {/* Main content */}
      <div className="flex-grow">
        {/* Section 1: Tabbed FAQs */}
        <FaqsSection />

        {/* Section 2: Ask more */}
        <AskMore />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
