// app/components/About.tsx
import Image from "../CustomImage";

export default function About() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          {/* Phone image */}
          <div className="order-2 md:order-1">
            <div className="rounded-3xl bg-emerald-50 p-6">
              <Image
                src="/about.png"
                alt="Dhanwaan app screens"
                width={520}
                height={1040}
                className="mx-auto rounded-[28px] shadow-[0_15px_60px_rgba(0,0,0,.2)]"
                priority
              />
            </div>
          </div>

          {/* Text + feature cards */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              All About Dhanwaan
            </h2>

            <p className="mt-4 max-w-xl text-gray-600">
              Dhanwaan is a B2B software platform that enables Nidhi companies,
              cooperatives, and micro-finance institutions to automate collections,
              track transactions transparently, and manage member accounts through
              a secure digital interface.
            </p>

            <p className="mt-3 max-w-xl text-gray-600">
              Our subscription-based SaaS modules provide registered formal
              financial institutions with technology tools for automated
              collection workflows, transparent system logging, and configurable
              financial plan management.
            </p>

            <div className="mt-8 space-y-4">
              <FeatureCard
                title="100% Digital Savings & Credit Ecosystem"
                body="From signup to deposits to withdrawals—everything is digital, transparent, and secure with complete transaction records."
              />
              <FeatureCard
                title="Built for Individuals, Families & Businesses"
                body="Whether you’re a first-time saver, a family, or a local business, choose plans tailored to your needs and goals."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  body,
  highlight = false,
}: {
  title: string;
  body: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-2xl border px-5 py-4",
        highlight
          ? "border-emerald-200 bg-emerald-50"
          : "border-gray-200 bg-white shadow-sm",
      ].join(" ")}
    >
      <h3 className="text-base font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-600">{body}</p>
    </div>
  );
}
