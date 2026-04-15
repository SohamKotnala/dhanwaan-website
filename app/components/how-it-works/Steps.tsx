import React from "react";
import Image from "next/image"; // Added Import

type Step = {
  n: number;
  title: string;
  bullets: string[];
  cta?: { label: string; href: string };
  img: string; // public path
  imgStyle?: "card" | "photo";
  imgLeft?: boolean;
};

const steps: Step[] = [
  {
    n: 1,
    title: "Create Your Account",
    bullets: [
      "Download the Dhanwaan App from Play Store or App Store.",
      "Enter the Branch code.",
      "Register using your mobile number.",
      "Choose your role — Customer, Agent, or Dealer.",
      "Add a Referral Code (optional) and create a secure password.",
    ],
    cta: { label: "Register Now", href: "/register" },
    img: "/how%20it%20works/Step%201.png",
    imgStyle: "card",
    imgLeft: true,
  },
  {
    n: 2,
    title: "Complete KYC Verification",
    bullets: [
      "Enter your Aadhaar number and complete digital verification.",
      "Upload your PAN card details.",
      "Complete quick face verification via camera.",
      "Review and confirm your verified Dhanwaan account.",
    ],
    cta: { label: "Verify My KYC", href: "/kyc" },
    img: "/how%20it%20works/Step%202.png",
    imgStyle: "photo",
    imgLeft: false,
  },
  {
    n: 3,
    title: "Set Your Savings Plan",
    bullets: [
      "Choose your daily saving amount.",
      "Select your time period (1 week, 2 weeks, or 6 weeks).",
      "Instantly preview expected returns and total savings.",
      "Confirm your plan to begin saving automatically.",
    ],
    cta: { label: "Create My Plan", href: "/plans" },
    img: "/how%20it%20works/Step%203.png",
    imgStyle: "card",
    imgLeft: true,
  },
  {
    n: 4,
    title: "Automate Your Deposits",
    bullets: [
      "Link your bank account securely through the app.",
      "Enable e-mandate for automatic deductions.",
      "Never miss transfers — savings happen on time, every time.",
      "Receive instant confirmations for each transaction.",
    ],
    cta: { label: "Enable Auto-Saving", href: "/auto-saving" },
    img: "/how%20it%20works/Step%204.png",
    imgStyle: "card",
    imgLeft: false,
  },
  {
    n: 5,
    title: "Track Your Growth",
    bullets: [
      "Check your wallet balance anytime.",
      "View transaction history for deposits and withdrawals.",
      "Use the ROI calculator to see your progress.",
      "Earn and redeem referral points in gold.",
    ],
    cta: { label: "View My Dashboard", href: "/dashboard" },
    img: "/how%20it%20works/Step%205.png",
    imgStyle: "card",
    imgLeft: true,
  },
];

export default function Steps() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <header className="text-center mb-10 md:mb-14">
          <h2 className="text-lg tracking-widest font-semibold text-emerald-800">
            FOLLOW A FEW EASY STEPS
          </h2>
          <p className="text-2xl md:text-3xl font-extrabold text-gray-900">
            To Start Your Journey
          </p>
        </header>

        <div className="space-y-14 md:space-y-20">
          {steps.map((s) => (
            <StepRow key={s.n} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepRow(s: Step) {
  return (
    <div
      className={`grid items-center gap-6 md:gap-10 md:grid-cols-2 ${
        s.imgLeft ? "md:[&>*:first-child]:order-1" : ""
      }`}
    >
      {/* Visual */}
      <div className="flex justify-center">
        {s.imgStyle === "card" ? (
          <div className="relative w-full max-w-md rounded-3xl p-6 bg-gradient-to-br from-emerald-900 to-emerald-700 shadow-xl">
            <div
              aria-hidden
              className="absolute inset-0 opacity-15 rounded-3xl"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
                backgroundSize: "44px 44px,44px 44px",
              }}
            />
            <div className="relative z-[1] w-full h-[260px]">
              <Image
                src={s.img}
                alt={s.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain rounded-2xl bg-white/8"
              />
            </div>
          </div>
        ) : (
          <div className="relative w-full h-[260px] max-w-md rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <Image
              src={s.img}
              alt={s.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        )}
      </div>

      {/* Text */}
      <div>
        <div className="text-emerald-800 font-semibold mb-1">{s.n}. </div>
        <h3 className="text-2xl font-semibold text-gray-900">{s.title}</h3>
        <ul className="mt-3 space-y-2 text-gray-700">
          {s.bullets.map((b, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600 shrink-0" />
              <span className="text-[15px] leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>

        {s.cta && (
          <a
            href={s.cta.href}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-700 text-white px-5 py-2.5 font-medium shadow hover:bg-emerald-600"
          >
            {s.cta.label}
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
              ↗
            </span>
          </a>
        )}
      </div>
    </div>
  );
}