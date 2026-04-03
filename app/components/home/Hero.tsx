// app/components/Hero.tsx
import Image from "next/image";
import StatCard from "./StatCard";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_-10%_-20%,#3aa57b33,transparent_50%),radial-gradient(800px_500px_at_110%_-20%,#317a5f33,transparent_50%),linear-gradient(135deg,#0e3329_0%,#2c6b57_40%,#3c8b6f_100%)]" />

      {/* subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[.18] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:px-8">
        {/* Left copy */}
        <div className="text-white">
          <p className="mb-3 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs tracking-wide backdrop-blur">
            Uttarakhand’s First Fintech App
          </p>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            INDIA’S LEADING
            <br />
            <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
              SMART SAVINGS APP
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-white/80">
            Dhanwaan is a technology service provider offering subscription-based
            software infrastructure to regulated financial institutions for
            facilitating digital collection and autopay interfaces. Dhanwaan does
            not undertake any regulated financial activity and does not handle
            customer funds.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="#get-started"
              className="group inline-flex items-center gap-3 rounded-full bg-emerald-400 px-6 py-3 font-semibold text-emerald-950 shadow-[0_10px_40px_-10px_rgba(16,185,129,.6)] hover:bg-emerald-300"
            >
              Start Saving Today
              <span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-900/10 text-emerald-900 transition group-hover:translate-x-0.5">
                ↗
              </span>
            </a>

            <div className="flex gap-4">
              <StatCard title="Active Members" value="2L+" />
              <StatCard title="Saved Daily" value="₹15Cr+" />
            </div>
          </div>
        </div>

        {/* Right visual: Phone mockup */}
        <div className="relative mx-auto w-full max-w-md">
          <Image
            src="/phone.png"
            alt="App mockup"
            width={520}
            height={520}
            className="mx-auto -rotate-6 drop-shadow-[0_25px_60px_rgba(0,0,0,.5)]"
            priority
          />
        </div>
      </div>

      {/* bottom ticker line */}
      <div className="relative border-t border-white/15 bg-black/10 text-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-3 text-sm sm:px-6 lg:px-8">
          <span className="whitespace-nowrap">100% compliant &amp; secure transactions</span>
          <div className="h-1 w-1 rounded-full bg-white/50" />
          <span className="whitespace-nowrap">Transparent · Fast · Reliable</span>
        </div>
      </div>
    </section>
  );
}
