import React from "react";
import { YouTubeEmbed } from "@next/third-parties/google"; // Added import

export default function HowToUse() {
  // The Next.js component only needs the ID, not the full URL
  const videoId = "W_3irUPdcI0";

  return (
    <section className="bg-gradient-to-r from-emerald-900 to-emerald-700 py-16 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center justify-between gap-8 rounded-2xl bg-emerald-800/40 p-6 shadow-lg md:flex-row md:gap-12">
          
          {/* THE VIDEO PLAYER (Optimized Facade) */}
          <div className="w-full max-w-md overflow-hidden rounded-xl bg-black aspect-video shadow-2xl ring-1 ring-white/10">
            <YouTubeEmbed 
              videoid={videoId} 
              params="controls=1" 
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-white sm:text-3xl tracking-tight">
              How to Use Our Platform
            </h2>
            <p className="mt-3 text-emerald-50 max-w-md leading-relaxed">
              Watch this tutorial to master our platform’s key features and improve your experience. Everything you need to know is right here.
            </p>

            {/* Visual indicator that video is active */}
            <div className="mt-6 flex items-center justify-center md:justify-start gap-2 text-emerald-300 font-medium italic">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              Click play to start watching
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}