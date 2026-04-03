import React, { JSX } from "react";

export default function WhyChoose() {
  return (
    <section className="w-full bg-[#EBFFF2]">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        {/* Eyebrow + Heading */}
        <div className="text-center">
          <span className="text-xs uppercase tracking-widest text-emerald-700/80">
            View More
          </span>
          <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-gray-900">
            Why Choose Dhanwaan
          </h2>
        </div>

        {/* 3 Feature Cards */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <FeatureCard
            title="Smart Savings"
            desc="Automated deposits with flexible plans to fit your lifestyle."
            tone="light"
            Icon={PiggyIcon}
          />
          {/* Card 2 (highlight) */}
          <FeatureCard
            title="Secure & Transparent"
            desc="NPCI-compliant systems and verified KYC for total trust."
            tone="dark"
            Icon={ShieldIcon}
          />
          {/* Card 3 */}
          <FeatureCard
            title="Steady Growth"
            desc="Track returns, monitor goals, and watch your wealth grow confidently."
            tone="light"
            Icon={ChartIcon}
          />
        </div>

        {/* CTA */}
        <div className="mt-10 md:mt-12 flex justify-center">
          <a
            href="/features"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-800/40 px-6 py-2.5 text-emerald-900 font-medium hover:bg-white/60 transition shadow-sm"
          >
            <span>Explore More</span>
            <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-emerald-900 text-white">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

type FeatureProps = {
  title: string;
  desc: string;
  tone: "light" | "dark";
  Icon: (p: { className?: string }) => JSX.Element;
};

function FeatureCard({ title, desc, tone, Icon }: FeatureProps) {
  const isDark = tone === "dark";
  return (
    <div
      className={[
        "rounded-2xl p-6 md:p-7 border shadow-sm",
        isDark
          ? "bg-emerald-800 text-white border-emerald-900"
          : "bg-white text-gray-900 border-emerald-100",
      ].join(" ")}
    >
      <div
        className={[
          "mb-4 inline-grid h-12 w-12 place-items-center rounded-xl",
          isDark ? "bg-white/10" : "bg-emerald-50",
        ].join(" ")}
      >
        <Icon className={isDark ? "text-white" : "text-emerald-800"} />
      </div>
      <h3 className={["text-xl font-semibold", isDark ? "text-white" : "text-gray-900"].join(" ")}>
        {title}
      </h3>
      <p className={["mt-2 text-sm leading-relaxed", isDark ? "text-white/85" : "text-gray-600"].join(" ")}>
        {desc}
      </p>
    </div>
  );
}

/* ====== Simple inline icons (no external assets) ====== */

function PiggyIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-6 w-6 ${className}`} fill="currentColor" aria-hidden>
      <path d="M20 8h-1.26A7.002 7.002 0 0 0 6 9H5a3 3 0 0 0-3 3v1a2 2 0 0 0 2 2h1.06A7 7 0 0 0 12 20h4l1.72 1.03a1 1 0 0 0 1.5-.86V18a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3Zm-6-3a2 2 0 1 1-2 2 2 2 0 0 1 2-2Zm-6 8a1 1 0 1 1 1 1 1 1 0 0 1-1-1Z" />
    </svg>
  );
}

function ShieldIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-6 w-6 ${className}`} fill="currentColor" aria-hidden>
      <path d="M12 2 4 5v6c0 5 3.4 9.5 8 11 4.6-1.5 8-6 8-11V5l-8-3Zm0 18c-3.3-1.2-6-4.9-6-9V6.3L12 4l6 2.3V11c0 4.1-2.7 7.8-6 9Z" />
      <path d="M10.5 12.5 9 11l-1 1 2.5 2.5L16 9l-1-1-4.5 4.5Z" />
    </svg>
  );
}

function ChartIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-6 w-6 ${className}`} fill="currentColor" aria-hidden>
      <path d="M3 3h2v18H3zM8 13h2v8H8zM13 9h2v12h-2zM18 5h2v16h-2z" />
    </svg>
  );
}
