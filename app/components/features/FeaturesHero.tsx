import Image from "../components/CustomImage";
import React from "react";

export default function FeaturesHero() {
  return (
    // no bottom padding; we explicitly control the image container height
    <section className="bg-[#EBFFF2] overflow-hidden">
      {/* Heading + subheading */}
      <div className="max-w-6xl mx-auto px-6 pt-16 md:pt-24 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-emerald-900 leading-snug uppercase">
          Empowering Smart Savings
          <br className="hidden md:block" />
          Through Innovation
        </h1>
        <p className="mt-3 md:mt-4 text-sm md:text-base text-emerald-900/80 max-w-3xl mx-auto">
          Dhanwaan brings together technology, transparency, and trust — helping you save
          effortlessly, track instantly, and grow securely. Discover features designed to
          make every saver truly Dhanwaan.
        </p>
      </div>

      {/* Image anchored to the bottom of the section */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative h-[360px] md:h-[440px]">
          <Image
            src="/features/f1.png"
            alt="Dhanwaan app mockups"
            fill
            // object-bottom ensures the visual sits on the bottom edge
            className="object-contain object-bottom select-none"
            priority
          />
        </div>
      </div>
    </section>
  );
}
