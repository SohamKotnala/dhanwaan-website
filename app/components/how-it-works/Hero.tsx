import React from "react";

export default function HowItWorksHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        // green gradient background
        backgroundImage:
          "linear-gradient(135deg, #0f5132 0%, #1f7151 50%, #2a9d6f 100%)",
      }}
    >
      {/* subtle grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px, 48px 48px",
          backgroundPosition: "center",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-20 text-center text-white">
        {/* Eyebrow/Title */}
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-widest uppercase">
          How It Works
        </h1>
        <p className="mt-3 md:mt-4 text-sm md:text-base text-white/85">
          Saving with Dhanwaan is simple, secure, and fully digital.
        </p>

        {/* Video card */}
        <div className="mt-8 md:mt-12 flex justify-center">
          <button
            type="button"
            aria-label="Play How It Works video"
            className="group relative w-full max-w-3xl overflow-hidden rounded-3xl shadow-xl ring-1 ring-white/20"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/how-hero.jpg" // put a blurred thumbnail in /public/how-hero.jpg
              alt="How It Works preview"
              className="h-[200px] w-full object-cover md:h-[320px]"
            />

            {/* frosted overlay for the rounded corners look */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]" />

            {/* Play button */}
            <span className="absolute inset-0 grid place-items-center">
              <span className="grid place-items-center h-16 w-16 md:h-20 md:w-20 rounded-full bg-white/90 text-emerald-800 shadow-lg transition group-hover:scale-105">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M8 5v14l11-7L8 5z" />
                </svg>
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
