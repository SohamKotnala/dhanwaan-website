import React from "react";

export default function BlogHero() {
  return (
    <section className="w-full bg-[#EBFFF2]">
      <div className="max-w-6xl mx-auto px-6 py-10 md:py-12">
        <div className="grid md:grid-cols-12 gap-6 md:gap-8">
          {/* Left: Featured Article */}
          <article className="md:col-span-8">
            <div className="overflow-hidden rounded-2xl border border-gray-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/blogs/1%5B1%5D.webp" // D:\dhanwaan-website\public\blogs\1[1].webp
                alt="Featured article"
                className="w-full aspect-[16/9] object-cover"
              />
            </div>

            <div className="mt-5">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                The Power of Daily Savings — One Habit That Changes Everything
              </h1>
              <p className="mt-3 text-gray-600 max-w-3xl">
                Small steps lead to big results. Learn how saving a little every
                day through Dhanwaan builds consistency, discipline, and
                long-term financial security.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                <span>January 23, 2025 · 7 min</span>
                <a
                  href="#"
                  className="inline-flex items-center rounded-lg border border-gray-300 px-3 py-1.5 text-gray-800 hover:bg-white/60"
                >
                  Read More
                </a>
              </div>
            </div>
          </article>

          {/* Right: Referral card + Small list */}
          <aside className="md:col-span-4 flex flex-col gap-4">
            {/* Referral / Promo Card */}
            <div className="rounded-2xl p-6 text-white bg-gradient-to-br from-purple-600 to-indigo-500 shadow-sm">
              <p className="text-sm/5 opacity-90">Refer Your Friend</p>
              <h3 className="mt-1 text-2xl font-semibold">Earn Points</h3>
              <p className="mt-1 text-sm/6 opacity-90">Redeem Gold</p>
              <button className="mt-4 inline-flex items-center rounded-lg bg-white/90 text-gray-900 px-4 py-2 font-medium hover:bg-white">
                Save Today
              </button>
            </div>

            {/* Small posts list */}
            <div className="space-y-3">
              {[
                {
                  id: 1,
                  img: "/blogs/2.webp",
                  title: "Empowering Small Businesses with Smart …",
                  date: "January 23, 2025 · 6 min",
                },
                {
                  id: 2,
                  img: "/blogs/3.webp",
                  title: "How e-Mandate Savings Simplify Your …",
                  date: "January 23, 2025 · 7 min",
                },
                {
                  id: 3,
                  img: "/blogs/4.webp",
                  title: "The Rise of Fintech in Rural India: Changing …",
                  date: "January 23, 2025 · 10 min",
                },
              ].map((p) => (
                <a
                  key={p.id}
                  href="#"
                  className="group grid grid-cols-[96px_1fr] gap-3 rounded-xl border border-gray-200 p-2 hover:bg-white"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-24 w-24 rounded-lg object-cover"
                  />
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
