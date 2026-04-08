import React from "react";

export type ExplorePost = {
  id?: string | number;
  title: string;
  desc: string;
  img: string;
  slug: string;
};

export default function ExploreMoreSection({ articles }: { articles: ExplorePost[] }) {
  return (
    <section className="w-full bg-gradient-to-b from-emerald-900 to-emerald-700">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="text-emerald-100 text-sm font-medium mb-4">
          Explore More!
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <a
              key={article.id || idx}
              href={`/blogs/${article.slug}`}
              className="relative group rounded-2xl overflow-hidden shadow-lg"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={article.img}
                alt={article.title}
                className="w-full h-[240px] md:h-[280px] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white">
                <h3 className="text-xl md:text-2xl font-extrabold leading-snug">
                  {article.title}
                </h3>
                <p className="mt-1 text-white/85 text-sm max-w-2xl line-clamp-2">
                  {article.desc}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 md:mt-12 text-center">
          <h3 className="text-white text-2xl md:text-3xl font-extrabold">
            Start Your Journey with Dhanwaan Today!
          </h3>
          <a
            href="#"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-300 text-emerald-900 px-5 py-3 font-semibold shadow hover:opacity-95 transition"
          >
            Start Saving Today
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-900 text-white">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}