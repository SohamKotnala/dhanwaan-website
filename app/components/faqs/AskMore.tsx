"use client";

import { useState, FormEvent } from "react";

export default function AskMore() {
  const [q, setQ] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    // Wire this up to your backend/email as needed.
    setQ("");
  }

  return (
    <section className="w-full bg-gradient-to-b from-emerald-500/30 via-emerald-600/50 to-emerald-800 text-white">
      <div className="mx-auto max-w-5xl px-6 py-10 md:py-14">
        <h2 className="text-xl md:text-2xl font-extrabold">Still Have Questions?</h2>
        <p className="mt-1 text-xs md:text-sm text-white/85">
          Everything you need to know about Dhanwaan — your trusted savings companion.
        </p>

        <form onSubmit={onSubmit} className="mt-6">
          <div className="flex items-center overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-inset ring-gray-300">
            <input
              type="text"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Ask Your Question"
              className="w-full px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none"
              aria-label="Ask your question"
              required
            />
            <button
              type="submit"
              className="shrink-0 px-5 py-2.5 text-sm font-medium bg-emerald-900 text-white hover:bg-emerald-800 transition"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
