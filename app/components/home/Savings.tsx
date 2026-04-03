// app/components/Savings.tsx
import Image from "../CustomImage";
import Link from "next/link";

export default function Savings() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          {/* Left: copy */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              All Your Savings in <br className="hidden sm:block" />
              One App
            </h2>

            <p className="mt-4 max-w-xl text-gray-600">
              With Dhanwaan, you can save daily, weekly, or longer — and track everything
              instantly. From automated deposits to real-time ROI calculations, your entire
              savings journey is managed in one app.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                <span>Automate your savings</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                <span>Flexible plans for all needs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                <span>Simple, transparent, and secure</span>
              </li>
            </ul>

            <Link
              href="#get-started"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-3 font-semibold text-emerald-900 hover:bg-emerald-100"
            >
              Get Started
              <span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-900/10">↗</span>
            </Link>
          </div>

          {/* Right: overlapping phones */}
          <div className="relative mx-auto w-full max-w-xl">
            {/* rounded mint backdrop */}
            <div className="absolute inset-0 -z-10 rounded-3xl bg-emerald-100/70" />

            {/* center vertical accent line (like in the design) */}
            <div className="absolute left-1/2 top-6 -translate-x-1/2 h-[85%] w-[6px] rounded-full bg-emerald-200/80" />

            {/* phone #1 (top-left) */}
            <Image
              src="/ss1.png"
              alt="Savings screen"
              width={340}
              height={680}
              className="absolute left-8 top-6 -rotate-2 drop-shadow-[0_20px_50px_rgba(0,0,0,.35)]"
              priority
            />

            {/* phone #2 (bottom-right) */}
            <Image
              src="/ss1.png"
              alt="Overview screen"
              width={340}
              height={680}
              className="absolute right-6 bottom-6 rotate-4 drop-shadow-[0_20px_50px_rgba(0,0,0,.35)]"
              priority
            />

            {/* spacer box to define section height */}
            <div className="invisible h-[420px] w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
