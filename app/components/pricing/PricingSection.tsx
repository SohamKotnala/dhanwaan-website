'use client';

import { useState } from 'react';

export default function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<string>('Professional');
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  const activePlan = hoveredPlan || selectedPlan;

  const plans = [
    {
      price: '₹5,999',
      gst: '(18% GST)',
      onboarding: 'Onboarding ₹10,000',
      title: 'Promising Pack',
      isPopular: false,
      features: [
        { text: '2.5 Lakh daily limit' },
        { text: '500 agents' },
        {
          text: '₹3.54 per transaction',
          sub: ['₹1.77 borne by customer', '₹1.77 borne by agent'],
        },
        { text: 'Dashboard' },
      ],
    },
    {
      price: '₹9,999',
      gst: '(18% GST)',
      onboarding: 'Onboarding ₹30,000',
      title: 'Professional',
      isPopular: true,
      features: [
        { text: '5 Lakh daily limit' },
        { text: '800 agents' },
        {
          text: '₹3.54 per transaction',
          sub: ['₹1.77 borne by customer', '₹1.77 borne by agent'],
        },
        { text: 'CIBIL check' },
        { text: 'Dashboard' },
      ],
    },
    {
      price: '₹24,999',
      gst: '(18% GST)',
      onboarding: 'Onboarding ₹60,000',
      title: 'Enterprising',
      isPopular: false,
      features: [
        { text: '15 Lakh daily limit' },
        { text: '1500 agents' },
        {
          text: '₹3.54 per transaction',
          sub: ['₹1.77 borne by customer', '₹1.77 borne by agent'],
        },
        { text: 'Priority support' },
        { text: 'Dashboard' },
      ],
    },
    {
      price: 'Custom monthly pricing',
      gst: '(18% GST)',
      onboarding: '(Contact Sales)',
      title: 'Dhanwaan Pro',
      isPopular: false,
      features: [
        { text: 'Unlimited features' },
        { text: 'Unlimited agents' },
        {
          text: '₹3.54 per transaction',
          sub: ['₹1.77 borne by customer', '₹1.77 borne by agent'],
        },
        { text: 'Dashboard' },
        { text: 'Chat bot' },
        { text: 'Customized dashboard' },
        { text: 'CIBIL impact' },
      ],
    },
  ];

  return (
    <>
      <section className="bg-[#E9F5EF] py-28 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <h1 className="text-5xl font-bold text-[#2E4F45] mb-4">
            Simple, Transparent Pricing
          </h1>

          <p className="text-[#2E4F45]/70 mb-8 text-lg">
            Subscription-based SaaS for Registered Financial Institutions
          </p>

          <div className="flex justify-center mb-6">
            <div className="bg-[#CFE8DB] rounded-full p-1 flex">
              <button className="px-8 py-2 rounded-full bg-[#2F5B4F] text-white text-sm font-semibold tracking-wide">
                MONTHLY
              </button>
              <button className="px-8 py-2 rounded-full text-[#2E4F45] text-sm font-semibold tracking-wide">
                YEARLY
              </button>
            </div>
          </div>

          <p className="text-sm text-[#2E4F45] mb-16">
            ✔ ₹3.54 per transaction
          </p>

          <div className="grid md:grid-cols-4 gap-8 items-stretch">
            {plans.map((plan) => (
              <PlanCard
                key={plan.title}
                {...plan}
                highlight={activePlan === plan.title}
                onHover={() => setHoveredPlan(plan.title)}
                onLeave={() => setHoveredPlan(null)}
                onSelect={() => setSelectedPlan(plan.title)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#E9F5EF] py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-center text-[#2E4F45] mb-14">
            Compare Plans
          </h2>

          <div className="overflow-x-auto rounded-3xl shadow-xl border border-[#CFE8DB] bg-white">
            <table className="w-full text-[#2E4F45] text-sm">
              <thead className="bg-[#DDF1E7]">
                <tr>
                  <th className="p-6 text-left border border-[#CFE8DB]">Key Features</th>
                  <th className="p-6 border border-[#CFE8DB]">Promising Pack</th>
                  <th className={`p-6 border border-[#CFE8DB] ${activePlan === 'Professional' ? 'bg-[#BFEBD4] font-semibold' : ''}`}>
                    Professional
                  </th>
                  <th className="p-6 border border-[#CFE8DB]">Enterprising</th>
                  <th className="p-6 border border-[#CFE8DB]">Dhanwaan Pro</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Basic onboarding', '✔', '', '', ''],
                  ['Loan application filing', '', '✔', '', ''],
                  ['FD/RD monthly limit', '50 Lakh', '1.25 Cr', '4.5 Cr', 'Unlimited'],
                  ['Auto EMI deduction', '', '', '✔', ''],
                  ['Loan disbursal', '', '', '✔', ''],
                  ['EMI based loan locking', '', '', '', '✔'],
                ].map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={`p-6 border border-[#CFE8DB] text-center ${
                          j === 0 ? 'text-left' : ''
                        } ${
                          activePlan === 'Professional' && j === 2
                            ? 'bg-[#BFEBD4]'
                            : ''
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-[#2E4F45]/70 mt-12">
            Built for societies of all sizes - from emerging cooperatives to enterprise networks.
          </p>
        </div>
      </section>
    </>
  );
}

function PlanCard({
  price,
  gst,
  onboarding,
  title,
  features,
  highlight,
  isPopular,
  onHover,
  onLeave,
  onSelect,
}: {
  price: string;
  gst: string;
  onboarding: string;
  title: string;
  features: { text: string; sub?: string[] }[];
  highlight: boolean;
  isPopular: boolean;
  onHover: () => void;
  onLeave: () => void;
  onSelect: () => void;
}) {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`
        relative rounded-3xl p-10 flex flex-col justify-between transition-all duration-300 cursor-pointer
        ${
          highlight
            ? 'bg-[#244A40] text-white scale-[1.06] shadow-[0_45px_80px_rgba(0,0,0,0.28)] z-20'
            : 'bg-[#EEF6F1] border border-[#CFE8DB] text-[#2E4F45]'
        }
      `}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#8EE0B0] text-[#1F3D35] text-xs font-semibold px-4 py-1 rounded-full shadow">
          MOST POPULAR
        </div>
      )}

      <div>
        <div className="text-4xl font-bold leading-tight">
          {price.includes('Custom') ? price : `${price} /month`}
        </div>

        <div className="text-sm opacity-70 mb-4">{gst}</div>

        <h3 className="text-2xl font-semibold mb-2">{title}</h3>

        <p className="text-sm opacity-80 mb-8">{onboarding}</p>

        <ul className="space-y-4 text-sm">
          {features.map((feature, index) => (
            <li key={index} className="flex gap-3">
              <span className="text-[#8B79C6]">✔</span>
              <div>
                <div>{feature.text}</div>
                {feature.sub && (
                  <div className="text-xs opacity-70 mt-1">
                    {feature.sub.map((s, i) => (
                      <div key={i}>{s}</div>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={onSelect}
        className={`
          mt-14 w-full py-3 rounded-full font-semibold transition
          ${
            highlight
              ? 'bg-[#8EE0B0] text-[#1F3D35]'
              : 'bg-[#8FA8A0] text-white hover:bg-[#7F9A91]'
          }
        `}
      >
        Choose plan
      </button>
    </div>
  );
}
