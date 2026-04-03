import Image from "../components/CustomImage";
import Link from "next/link";

export default function FeaturesCTA() {
  return (
    <section className="relative w-full h-[400px] md:h-[480px] flex items-center justify-center text-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/features/f6.png"
        alt="Ready to save with Dhanwaan"
        fill
        className="object-cover brightness-[0.55]"
        priority
      />

      {/* Overlay content */}
      <div className="relative z-10 px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-[#C8FFE2]">
          Ready to Take the Smart Saving Step?
        </h2>

        <Link
          href="#get-started"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#C8FFE2] text-emerald-900 px-6 py-3 font-semibold hover:bg-[#a8fcd5] transition"
        >
          Get Started
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-900 text-white">
            ↗
          </span>
        </Link>
      </div>
    </section>
  );
}
