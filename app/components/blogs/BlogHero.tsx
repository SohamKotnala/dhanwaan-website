import React from "react";
import Image from "next/image"; // Added Import

export type HeroPost = {
  title: string;
  desc: string;
  img: string;
  date: string;
  read: string;
  slug: string;
};

export type SmallPost = {
  id: string | number;
  title: string;
  date: string;
  img: string;
  slug: string;
};

type BlogHeroProps = {
  featured: HeroPost;
  sidePosts: SmallPost[];
};

export default function BlogHero({ featured, sidePosts }: BlogHeroProps) {
  return (
    <section className="w-full bg-[#EBFFF2]">
      <div className="max-w-6xl mx-auto px-6 py-10 md:py-12">
        <div className="grid md:grid-cols-12 gap-6 md:gap-8">
          {/* Left: Featured Article */}
          <article className="md:col-span-8">
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 w-full aspect-[16/9]">
              <Image
                src={featured.img}
                alt={featured.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover"
              />
            </div>

            <div className="mt-5">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                {featured.title}
              </h1>
              <p className="mt-3 text-gray-600 max-w-3xl">
                {featured.desc}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                <span>{featured.date} · {featured.read}</span>
                <a
                  href={`/blogs/${featured.slug}`}
                  className="inline-flex items-center rounded-lg border border-gray-300 px-3 py-1.5 text-gray-800 hover:bg-white/60"
                >
                  Read More
                </a>
              </div>
            </div>
          </article>

          {/* Right: Small list */}
          <aside className="md:col-span-4 flex flex-col gap-4">
            <div className="space-y-3">
              {sidePosts.map((p) => (
                <a
                  key={p.id}
                  href={`/blogs/${p.slug}`}
                  className="group grid grid-cols-[96px_1fr] gap-3 rounded-xl border border-gray-200 p-2 hover:bg-white"
                >
                  <div className="relative h-24 w-24 shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h4 className="line-clamp-2 font-semibold text-gray-900 group-hover:underline">
                        {p.title}
                      </h4>
                      <div className="mt-1 text-xs text-gray-500">{p.date}</div>
                    </div>
                    <span className="mt-2 inline-flex w-fit items-center rounded-md border border-gray-300 px-3 py-1 text-xs font-medium text-gray-700 group-hover:bg-gray-50">
                      Read More
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}