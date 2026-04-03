"use client";

import { useState } from "react";

type QA = { q: string; a: string };
type CategoryKey =
  | "general"
  | "account"
  | "savings"
  | "withdrawals"
  | "security";

const DATA: Record<CategoryKey, { label: string; items: QA[] }> = {
  general: {
    label: "General Questions",
    items: [
      {
        q: "What is Dhanwaan?",
        a: "Dhanwaan is a digital savings platform that helps individuals and small businesses automate their savings and manage deposits easily through secure, technology-driven solutions.",
      },
      {
        q: "Who can use Dhanwaan?",
        a: "Anyone looking to build a consistent saving habit—customers, agents, or dealers—can use Dhanwaan to save securely and track progress in real time.",
      },
      {
        q: "Is Dhanwaan available across India?",
        a: "Yes. Dhanwaan is available across India. Availability of certain features may vary by region based on partner support and compliance.",
      },
    ],
  },
  account: {
    label: "Account & Registration",
    items: [
      {
        q: "How do I create a Dhanwaan account?",
        a: "Download the Dhanwaan app, sign up with your mobile number, select your role (Customer, Agent, or Dealer), and complete KYC verification.",
      },
      {
        q: "What documents are required for registration?",
        a: "You’ll need your Aadhaar number for e-KYC, PAN details, and to complete quick face verification for identity confirmation.",
      },
      {
        q: "Can I have multiple accounts?",
        a: "You should maintain one verified account per user. If you need to change your role, you can request it from within the app.",
      },
    ],
  },
  savings: {
    label: "Savings & Deposits",
    items: [
      {
        q: "How do automated savings work?",
        a: "Once your plan is set and e-Mandate is activated, Dhanwaan automatically deducts your chosen savings amount directly from your bank account at scheduled intervals.",
      },
      {
        q: "Can I modify or pause my saving plan?",
        a: "Yes. You can edit the amount, change frequency, or temporarily pause your plan from the app at any time.",
      },
      {
        q: "What types of savings plans are available?",
        a: "You can choose daily, weekly, or monthly plans, and preview the expected total savings and returns before confirming.",
      },
    ],
  },
  withdrawals: {
    label: "Withdrawals & Returns",
    items: [
      {
        q: "When can I withdraw my savings?",
        a: "You can withdraw your funds anytime, directly from your Dhanwaan wallet. Withdrawals are processed instantly and reflected in your linked bank account.",
      },
      {
        q: "Is there any penalty for early withdrawal?",
        a: "No penalty is charged by Dhanwaan. If a partner product has a lock-in, the app will show it clearly before you confirm a plan.",
      },
      {
        q: "How can I track my earnings?",
        a: "Use the live dashboard to view your balance, deposits, withdrawals, and returns—everything is recorded with full transparency.",
      },
    ],
  },
  security: {
    label: "Security & Support",
    items: [
      {
        q: "Is Dhanwaan safe and regulated?",
        a: "Yes. Dhanwaan is powered by Sumangalam Credit Society, a registered multi-state cooperative under the Ministry of Cooperation, Government of India. Systems are NPCI-compliant.",
      },
      {
        q: "How secure is my data?",
        a: "Your data is encrypted in transit and at rest. Access controls and regular audits ensure privacy and integrity of your information.",
      },
      {
        q: "What should I do if I face an issue?",
        a: "Use in-app support to raise a ticket or chat with support. You can also email our support team—responses include a full audit trail inside the app.",
      },
    ],
  },
};

export default function FaqsSection() {
  const [active, setActive] = useState<CategoryKey>("general");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = DATA[active].items;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <header className="text-center">
          <h1 className="text-2xl md:text-3xl font-extrabold text-emerald-900">
            Frequently Asked Questions
          </h1>
          <p className="mt-2 text-sm md:text-[15px] text-gray-600">
            Everything you need to know about Dhanwaan — your trusted savings companion.
          </p>
        </header>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {(Object.keys(DATA) as CategoryKey[]).map((key) => {
            const selected = key === active;
            return (
              <button
                key={key}
                onClick={() => {
                  setActive(key);
                  setOpenIndex(0);
                }}
                className={
                  "rounded-full border px-4 py-2 text-sm transition " +
                  (selected
                    ? "bg-emerald-600 text-white border-emerald-600 shadow"
                    : "bg-white text-emerald-900 border-emerald-200 hover:bg-emerald-50")
                }
                type="button"
              >
                {DATA[key].label}
              </button>
            );
          })}
        </div>

        <ul className="mt-8 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
          {items.map((it, idx) => {
            const open = openIndex === idx;
            return (
              <li key={idx} className="px-4 md:px-6">
                <button
                  onClick={() => setOpenIndex(open ? null : idx)}
                  className="flex w-full items-center justify-between py-4 text-left"
                  aria-expanded={open}
                  aria-controls={`faq-panel-${idx}`}
                  type="button"
                >
                  <div className="flex gap-2">
                    <span className="font-semibold text-gray-900">Q:</span>
                    <span className="font-medium text-gray-900">{it.q}</span>
                  </div>
                  <span
                    className={
                      "inline-flex h-6 w-6 items-center justify-center rounded-full border transition " +
                      (open ? "rotate-180 bg-emerald-50 border-emerald-300" : "bg-white")
                    }
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </button>

                <div
                  id={`faq-panel-${idx}`}
                  className={
                    "grid transition-all duration-200 ease-out " +
                    (open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")
                  }
                >
                  <div className="overflow-hidden">
                    <div className="pb-4 pl-7 md:pl-8">
                      <div className="flex gap-2 text-gray-700">
                        <span className="font-semibold text-gray-900">A:</span>
                        <p className="text-sm md:text-[15px] leading-relaxed">{it.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
