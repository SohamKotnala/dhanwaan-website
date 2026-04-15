import React from "react";
import Image from "next/image"; // Added Import

export type Article = {
  id: string | number;
  title: string;
  desc: string;
  img: string;
  date: string;
  read: string;
  slug: string;
};

function ArticleCard({ a }: { a: Article }) {
  return (
    <article className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition">
      <div className="relative w-full h-52">
        <Image 
          src={a.img} 
          alt={a.title} 
          fill 
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover" 
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold leading-snug">{a.title}</h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{a.desc}</p>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-500">
          <span>
            {a.date} · {a.read}
          </span>
          <a
            href={`/blogs/${a.slug}`}
            className="ml-auto inline-flex items-center rounded-md border border-gray-300 px-3 py-1 font-medium text-gray-700 hover:bg-gray-50"
          >
            Read More
          </a>
        </div>
      </div>
    </article>
  );
}

export default function PopularSection({ articles }: { articles: Article[] }) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-sm font-medium text-gray-800 mb-4">Most Popular</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((item) => (
          <ArticleCard key={item.id} a={item} />
        ))}
      </div>
    </section>
  );
}