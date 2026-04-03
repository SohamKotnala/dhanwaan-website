// app/page.tsx
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// Home-only sections
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Savings from "./components/home/Savings";
import HowToUse from "./components/home/HowToUse";
import Testimonials from "./components/home/Testimonials";
import StatCard from "./components/home/StatCard";

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Navigation + Hero */}
      <Nav />
      <Hero />

      {/* Light sections */}
      <div className="bg-white text-gray-900">
        <About />
        <Savings />
        <HowToUse />
        <Testimonials />
        <StatCard title={""} value={""} />
        <Footer />
      </div>
    </main>
  );
}
