// app/how-it-works/page.tsx (later)
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import HowItWorksHero from "../components/how-it-works/Hero";
import Steps from "../components/how-it-works/Steps";
import WhyChoose from "../components/how-it-works/WhyChoose";

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Nav />
      <HowItWorksHero />
      <Steps />
      <WhyChoose />
      <Footer />
    </main>
  );
}
