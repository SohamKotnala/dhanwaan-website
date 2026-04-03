// app/blogs/page.tsx
import React from "react";
import Nav from "../components/Nav";                 // same header as homepage
import Footer from "../components/Footer";           // same footer as homepage

// Blog-specific sections (keep these in app/components/blogs/)
import BlogHero from "../components/blogs/BlogHero";
import PopularSection from "../components/blogs/PopularSection";
import ExploreMoreSection from "../components/blogs/ExploreMoreSection";

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Nav />
      <BlogHero />
      <PopularSection />
      <ExploreMoreSection />
      <Footer />
    </main>
  );
}
