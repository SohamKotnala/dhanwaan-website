import React from "react";

export default function HowItWorksHero() {
  // Using the same embed URL for the YouTube video
  const embedUrl = "https://www.youtube.com/embed/W_3irUPdcI0";

  return (
    <section
      className="relative overflow-hidden"
      style={{
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
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight uppercase">
          How It Works
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          Saving with Dhanwaan is simple, secure, and fully digital. Watch the guide below.
        </p>

        {/* WORKING VIDEO PLAYER */}
        <div className="mt-10 md:mt-16 flex justify-center">
          <div className="w-full max-w-4xl aspect-video overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/20 bg-black">
            <iframe
              className="w-full h-full"
              src={embedUrl}
              title="Dhanwaan - How it Works"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        
        {/* Bottom indicator */}
        <p className="mt-8 text-sm font-medium text-emerald-200/80 animate-pulse">
          &darr; Scroll down to see the steps &darr;
        </p>
      </div>
    </section>
  );
}