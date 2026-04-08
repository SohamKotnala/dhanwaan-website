import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";

// 1. Generate Static Params for GitHub Pages / Static Export
export async function generateStaticParams() {
  const query = `*[_type == "post"]{ "slug": slug.current }`;
  const posts = await client.fetch(query);

  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

// 2. Main Page Component
export default async function SingleBlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    desc,
    "img": img.asset->url,
    date,
    read,
    content
  }`;
  
  const post = await client.fetch(query, { slug });

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link href="/blogs" className="text-emerald-600 hover:underline">
            &larr; Back to all blogs
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-emerald-200 selection:text-emerald-900">
      <Nav />
      
      {/* HEADER / HERO SECTION */}
      <header className="bg-white border-b border-slate-200 pt-16 pb-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Back Button */}
          <Link 
            href="/blogs" 
            className="inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors mb-8"
          >
            <span className="mr-2">&larr;</span> Back to Blogs
          </Link>

          {/* Metadata Tags */}
          <div className="flex items-center justify-center gap-3 text-xs md:text-sm font-semibold tracking-widest uppercase text-slate-500 mb-6">
            <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full">
              Finance
            </span>
            <span>&bull;</span>
            <span>{post.date}</span>
            <span>&bull;</span>
            <span>{post.read || "5 Min Read"}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
            {post.title}
          </h1>

          {/* Subtitle / Description */}
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {post.desc}
          </p>
        </div>
      </header>

      {/* MAIN CONTENT OVERLAP SECTION */}
      <section className="max-w-4xl mx-auto px-6 -mt-20 relative z-10 pb-24">
        
        {/* Featured Image (Floats over the header line) */}
        {post.img && (
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 ring-1 ring-slate-100 bg-white mb-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={post.img} 
              alt={post.title} 
              className="w-full h-auto max-h-[550px] object-cover" 
            />
          </div>
        )}

        {/* Article Reading Container */}
        <article className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-100 p-8 md:p-12 lg:p-16">
          <div className="max-w-3xl mx-auto text-lg text-slate-800">
            {post.content ? (
              <PortableText 
                value={post.content} 
                components={{
                  block: {
                    // Premium Typography Styling for standard paragraphs
                    normal: ({children}) => <p className="mb-7 leading-[1.8] text-slate-700">{children}</p>,
                    // Beautiful Headings
                    h1: ({children}) => <h2 className="text-3xl font-extrabold text-slate-900 mt-14 mb-6 tracking-tight">{children}</h2>,
                    h2: ({children}) => <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-5 tracking-tight">{children}</h2>,
                    h3: ({children}) => <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">{children}</h3>,
                    // Elegant Blockquotes
                    blockquote: ({children}) => (
                      <blockquote className="border-l-4 border-emerald-500 bg-emerald-50/50 p-6 rounded-r-xl my-8 shadow-sm">
                        <p className="italic text-slate-700 text-xl leading-relaxed m-0">{children}</p>
                      </blockquote>
                    ),
                  },
                  list: {
                    // Custom styled bullet points and numbered lists
                    bullet: ({children}) => <ul className="list-disc pl-6 mb-8 space-y-3 text-slate-700 marker:text-emerald-500">{children}</ul>,
                    number: ({children}) => <ol className="list-decimal pl-6 mb-8 space-y-3 text-slate-700 marker:text-emerald-500 font-medium">{children}</ol>,
                  },
                  marks: {
                    // Styling for bold text and links
                    strong: ({children}) => <strong className="font-semibold text-slate-900">{children}</strong>,
                    link: ({value, children}) => (
                      <a href={value?.href} className="text-emerald-600 underline decoration-emerald-200 underline-offset-4 hover:decoration-emerald-600 transition-colors">
                        {children}
                      </a>
                    )
                  }
                }}
              />
            ) : (
              <p className="text-center text-slate-500 italic py-10">
                This article has no content yet.
              </p>
            )}
          </div>
          
          {/* Article Footer / Share divider */}
          <div className="mt-16 pt-8 border-t border-slate-100 flex items-center justify-between">
            <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">
              Thanks for reading
            </p>
            <div className="flex gap-4">
              {/* Dummy share buttons just for visual polish */}
              <button className="text-slate-400 hover:text-emerald-600 transition-colors text-sm font-medium">Share</button>
              <button className="text-slate-400 hover:text-emerald-600 transition-colors text-sm font-medium">Tweet</button>
            </div>
          </div>
        </article>
        
      </section>

      <Footer />
    </main>
  );
}