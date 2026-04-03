import Image from "../CustomImage";;
import React from "react";

type FeatureRow = {
  title: string;
  desc: string;
  img: string;
  imageLeft?: boolean;
};

const rows: FeatureRow[] = [
  {
    title: "Automated Digital Savings",
    desc:
      "Saving made effortless with smart automation. Dhanwaan connects directly to your bank through secure e-mandates, ensuring your chosen amount is saved daily, weekly, or monthly without any manual effort.",
    img: "/features/f2.png",
    imageLeft: true,
  },
  {
    title: "Real-Time Tracking Dashboard",
    desc:
      "Stay in control of your money at all times. Dhanwaan’s live dashboard gives you a complete view of your savings, returns, and progress — beautifully designed to keep your financial journey transparent and simple.",
    img: "/features/f3.png",
    imageLeft: false,
  },
  {
    title: "Secure & Verified Platform",
    desc:
      "Your trust is our priority. Every user and transaction on Dhanwaan is protected through verified KYC, encrypted data, and NPCI-compliant systems that ensure complete peace of mind with every deposit.",
    img: "/features/f4.png",
    imageLeft: true,
  },
  {
    title: "Instant Withdrawals & Rewards",
    desc:
      "Your savings are always accessible. Withdraw funds instantly with complete transparency, or earn exciting rewards by inviting others to join Dhanwaan.",
    img: "/features/f5.png",
    imageLeft: false,
  },
];

// 🧩 Compact mint box — tighter, more balanced like your first image
function ImageTile({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="bg-[#EBFFF2] rounded-3xl w-full max-w-[420px] mx-auto flex items-center justify-center h-[300px] md:h-[340px] overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={300}
        height={300}
        className="object-contain w-auto h-[90%]"
        priority
      />
    </div>
  );
}

function TextTile({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="px-1 md:px-4">
      <h3 className="text-xl md:text-2xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-3 text-gray-600 leading-relaxed text-sm md:text-base max-w-md">
        {children}
      </p>
    </div>
  );
}

export default function FeaturesExplore() {
  return (
    <section className="bg-white pt-0 pb-16 md:pt-0 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500">Features</h4>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-emerald-900">
            Explore The Smarter Way To Save
          </h2>
        </div>

        {/* Four alternating rows */}
        <div className="space-y-16 md:space-y-20">
          {rows.map((row, i) => (
            <div
              key={i}
              className="grid items-center gap-8 md:gap-12 md:grid-cols-2"
            >
              {row.imageLeft ? (
                <>
                  <ImageTile src={row.img} alt={row.title} />
                  <TextTile title={row.title}>{row.desc}</TextTile>
                </>
              ) : (
                <>
                  <TextTile title={row.title}>{row.desc}</TextTile>
                  <ImageTile src={row.img} alt={row.title} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
