// app/components/Nav.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top bar */}
        <div className="h-16 flex items-center justify-between">
          {/* Logo → Home */}
          <Link href="/" className="flex items-center">
            <Image
              src="/DhanLogoFinal.png"
              alt="DhanwaanLogo"
              width={100}
              height={100}
              className="cursor-pointer w-[90px] h-auto sm:w-[100px]"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex flex-wrap gap-6 text-sm font-medium">
            <Link href="/">Home</Link>
            <Link href="/how-it-works">How It Works</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/features">Features</Link>
            <Link href="/faqs">FAQs</Link>
          </div>

          {/* Desktop Sign up */}
          <Link
            href="/signup"
            className="hidden md:inline-flex border border-gray-500 rounded-lg px-4 py-1 hover:bg-gray-800 transition"
          >
            Sign up
          </Link>

          {/* Mobile menu button */}
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-700"
          >
            <span className="sr-only">Open menu</span>
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-5 bg-current transition ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          className={`md:hidden ${
            open ? "block" : "hidden"
          } border-t border-neutral-800`}
        >
          <div className="py-4 flex flex-col gap-3 text-base">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/how-it-works" onClick={() => setOpen(false)}>How It Works</Link>
            <Link href="/pricing" onClick={() => setOpen(false)}>Pricing</Link>
            <Link href="/blogs" onClick={() => setOpen(false)}>Blogs</Link>
            <Link href="/features" onClick={() => setOpen(false)}>Features</Link>
            <Link href="/faqs" onClick={() => setOpen(false)}>FAQs</Link>

            <Link
              href="/signup"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center rounded-lg bg-white text-neutral-900 font-medium"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
