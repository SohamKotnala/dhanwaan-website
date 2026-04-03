// footer.tsx
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-12 flex flex-col items-center gap-6">

        {/* Compliance disclaimer */}
        <p className="text-sm sm:text-base text-gray-600 text-center max-w-3xl">
          Dhanwaan is a technology service provider offering software infrastructure to
          regulated financial institutions. Dhanwaan does not undertake any regulated
          financial activity and does not handle customer funds.
        </p>

        {/* App store buttons */}
        <div className="flex gap-4 items-center">
          <div className="relative w-[150px] h-[48px] sm:w-[170px] sm:h-[55px]">
            <Image
              src="/appstore.png"
              alt="App Store"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 150px, 170px"
            />
          </div>
          <div className="relative w-[150px] h-[48px] sm:w-[170px] sm:h-[55px]">
            <Image
              src="/playstore.png"
              alt="Google Play"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 150px, 170px"
            />
          </div>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-600">
          <a href="#">Personal Loan</a>
          <a href="#">Dhan Card</a>
          <a href="#">Savings</a>
          <a href="#">Checking</a>
          <a href="#">Contact</a>
          <a href="#">Help</a>
          <a href="#">Support</a>
        </nav>

        {/* Feedback */}
        <p className="text-sm text-gray-500 text-center">
          Send Your Feedback:{" "}
          <a href="mailto:care@dhanwaan.in" className="underline">
            care@dhanwaan.in
          </a>
        </p>

        {/* Policy links */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-gray-400 mt-2">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
          <Link href="/cookies-policy">Cookies Policy</Link>
          <Link href="/copyright-policy">Copyright Policy</Link>
          <Link href="/data-policy">Data Policy</Link>
        </div>
      </div>
    </footer>
  );
}
