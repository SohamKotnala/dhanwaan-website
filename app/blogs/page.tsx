import React from "react";
import Nav from "../components/Nav";                 
import Footer from "../components/Footer";           
import BlogHero from "../components/blogs/BlogHero";
import PopularSection from "../components/blogs/PopularSection";
import ExploreMoreSection from "../components/blogs/ExploreMoreSection";

// 1. Import the auto-generated Sanity Client
import { client } from "@/sanity/lib/client";

export default async function BlogsPage() {
  // 2. Fetch the data using GROQ (Sanity's query language)
  const query = `*[_type == "post"] | order(date desc) {
    "id": _id,
    title,
    desc,
    "slug": slug.current,
    "img": img.asset->url,
    date,
    read
  }`;

  const fetchedPosts = await client.fetch(query);

  // 3. Fallback logic (In case you haven't published anything yet)
  if (!fetchedPosts || fetchedPosts.length === 0) {
    return (
      <main className="min-h-screen bg-white text-gray-900">
        <Nav />
        <div className="py-20 text-center text-2xl font-bold">No blogs published yet! Go to /studio to write one.</div>
        <Footer />
      </main>
    );
  }

  // 4. Distribute the real data to your components with fallback logic
  const heroFeatured = fetchedPosts[0];
  const heroSidePosts = fetchedPosts.slice(1, 4);

  // If we have 5+ posts, grab the next batch. Otherwise, reuse posts so it's not empty.
  const popularPosts = fetchedPosts.length >= 5 
    ? fetchedPosts.slice(4, 7) 
    : fetchedPosts;

  // If we have 8+ posts, grab the rest. Otherwise, reuse posts so it's not empty.
  const remainingPosts = fetchedPosts.length >= 8 
    ? fetchedPosts.slice(7) 
    : fetchedPosts;

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Nav />
      <BlogHero 
        featured={heroFeatured} 
        sidePosts={heroSidePosts} 
      />
      <PopularSection 
        articles={popularPosts} 
      />
      <ExploreMoreSection 
        articles={remainingPosts} 
      />
      <Footer />
    </main>
  );
}