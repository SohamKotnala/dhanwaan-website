// app/components/HowToUse.tsx
import Link from "next/link";

export default function HowToUse() {
  return (
    <section className="bg-gradient-to-r from-emerald-900 to-emerald-700 py-16 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center justify-between gap-8 rounded-2xl bg-emerald-800/40 p-6 shadow-lg md:flex-row md:gap-12">
          {/* Dummy video thumbnail */}
          <div className="relative w-full max-w-md overflow-hidden rounded-xl bg-emerald-900/30 aspect-video flex items-center justify-center">
            {/* fake blurred bg */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-700 to-emerald-600 opacity-60" />
            {/* play icon */}
            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white/90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-emerald-700"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.5 5.5v9l8-4.5-8-4.5z" />
              </svg>
            </div>
          </div>

          {/* Text + button */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              How to Use Our Platform
            </h2>
            <p className="mt-3 text-gray-200 max-w-md">
              Watch this tutorial to master our platform’s key features and improve your experience.
            </p>

            {/* Dummy button that doesn’t navigate */}
            <button
              type="button"
              disabled
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-emerald-200 px-5 py-3 font-semibold text-emerald-900 cursor-not-allowed"
            >
              Play Now
              <span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-900/10">↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
