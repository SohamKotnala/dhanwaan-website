import React from "react";

export default function ExploreMoreSection() {
  return (
    <section className="w-full bg-gradient-to-b from-emerald-900 to-emerald-700">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        {/* Small eyebrow */}
        <div className="text-emerald-100 text-sm font-medium mb-4">
          Explore More!
        </div>

        {/* Two-up cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left: Article feature (spans 2 columns) */}
          <a
            href="#"
            className="relative md:col-span-2 group rounded-2xl overflow-hidden shadow-lg"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/blogs/3.webp"  // replaced with your image
              alt="The Power of Daily Savings — One Habit That Changes Everything"
              className="w-full h-[240px] md:h-[280px] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
            {/* dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            {/* text */}
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white">
              <h3 className="text-xl md:text-2xl font-extrabold leading-snug">
                The Power of Daily Savings — One Habit That Changes Everything
              </h3>
              <p className="mt-1 text-white/85 text-sm max-w-2xl">
                Small steps create big results. Save daily with Dhanwaan for
                lasting financial security.
              </p>
            </div>
          </a>

          {/* Right: Financial Wisdom promo card (no external image used) */}
          <a
            href="#"
            className="relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-emerald-300/30 via-emerald-400/20 to-transparent border border-white/15"
          >
            {/* subtle inner gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-black/30" />
            {/* rupee coin motif */}
            <div className="absolute -right-6 -top-6 opacity-50">
              <CoinSVG size={180} />
            </div>
            <div className="absolute right-2 bottom-2 opacity-40">
              <CoinSVG size={100} />
            </div>

            {/* content */}
            <div className="relative p-6 h-[240px] md:h-[280px] flex flex-col justify-end">
              <h3 className="text-white text-2xl font-extrabold">
                Financial<br/>Wisdom
              </h3>
              <p className="text-white/85 text-sm mt-1">Simple Steps. Lasting Growth.</p>
            </div>
          </a>
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

/** Simple ₹ coin SVG used as a decorative watermark */
function CoinSVG({ size = 160 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <radialGradient id="g" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="0.15" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="90" fill="url(#g)" stroke="white" strokeOpacity="0.4" />
      <circle cx="100" cy="100" r="72" stroke="white" strokeOpacity="0.35" />
      <path
        d="M120 72h-40a4 4 0 0 0 0 8h34c-2 7-10 12-21 12h-13a4 4 0 1 0 0 8h13c9 0 16 3 19 8h-32a4 4 0 1 0 0 8h22v12a4 4 0 1 0 8 0v-12h10a4 4 0 1 0 0-8h-8c-1-12-12-20-30-20h18c19 0 29-9 30-16h-10z"
        fill="white"
        fillOpacity="0.75"
      />
    </svg>
  );
}
