import React from "react";

type Article = {
  type: "article";
  id: number;
  title: string;
  desc: string;
  img: string;
  date: string;
  read: string;
};

type CTA = {
  type: "cta";
  id: string;
};

type GridItem = Article | CTA;

const articles: Article[] = [
  {
    type: "article",
    id: 1,
    img: "/blogs/2.webp",
    title: "Financial Discipline: The Real Key to Lasting Prosperity",
    desc:
      "Building wealth isn’t about how much you earn — it’s about how well you manage it. Here’s how to start your disciplined saving journey.",
    date: "January 23, 2025",
    read: "5 min",
  },
  {
    type: "article",
    id: 2,
    img: "/blogs/3.webp",
    title: "Financial Discipline: The Real Key to Lasting Prosperity",
    desc:
      "Building wealth isn’t about how much you earn — it’s about how well you manage it. Here’s how to start your disciplined saving journey.",
    date: "January 23, 2025",
    read: "5 min",
  },
  {
    type: "article",
    id: 3,
    img: "/blogs/4.webp",
    title: "Financial Discipline: The Real Key to Lasting Prosperity",
    desc:
      "Building wealth isn’t about how much you earn — it’s about how well you manage it. Here’s how to start your disciplined saving journey.",
    date: "January 23, 2025",
    read: "5 min",
  },
  {
    type: "article",
    id: 4,
    img: "/blogs/1%5B1%5D.webp", // 1[1].webp URL-encoded
    title: "Financial Discipline: The Real Key to Lasting Prosperity",
    desc:
      "Building wealth isn’t about how much you earn — it’s about how well you manage it. Here’s how to start your disciplined saving journey.",
    date: "January 23, 2025",
    read: "5 min",
  },
  {
    type: "article",
    id: 5,
    img: "/blogs/2.webp", // reuse one of the four
    title: "Financial Discipline: The Real Key to Lasting Prosperity",
    desc:
      "Building wealth isn’t about how much you earn — it’s about how well you manage it. Here’s how to start your disciplined saving journey.",
    date: "January 23, 2025",
    read: "5 min",
  },
];

function ArticleCard({ a }: { a: Article }) {
  return (
    <article className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={a.img} alt={a.title} className="w-full h-52 object-cover" />
      <div className="p-5">
        <h3 className="text-lg font-semibold leading-snug">{a.title}</h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{a.desc}</p>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-500">
          <span>
            {a.date} · {a.read}
          </span>
          <a
            href="#"
            className="ml-auto inline-flex items-center rounded-md border border-gray-300 px-3 py-1 font-medium text-gray-700 hover:bg-gray-50"
          >
            Read More
          </a>
        </div>
      </div>
    </article>
  );
}

function NewsletterCard() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-gradient-to-b from-emerald-200 to-emerald-300 p-6 md:p-8 flex flex-col justify-center">
      <h3 className="text-2xl font-semibold text-gray-900">
        Never Miss
        <br /> Another Article
      </h3>
      <div className="mt-4 flex gap-2">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <button className="rounded-md bg-gray-900 text-white px-4 text-sm font-medium hover:opacity-90">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default function PopularSection() {
  // Insert the CTA after the 2nd card to sit in the center of the first row
  const withCTA: GridItem[] = [];
  articles.forEach((a, i) => {
    if (i === 1) withCTA.push({ type: "cta", id: "cta" });
    withCTA.push(a);
  });

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-sm font-medium text-gray-800 mb-4">Most Popular</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {withCTA.map((item) =>
          item.type === "cta" ? (
            <NewsletterCard key={item.id} />
          ) : (
            <ArticleCard key={item.id} a={item} />
          )
        )}
      </div>
    </section>
  );
}
