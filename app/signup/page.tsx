"use client";

import { useState } from "react";

export default function SignupPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    // Simulate submission success
    setTimeout(() => {
      (e.currentTarget as HTMLFormElement).reset();
      setStatus("ok");
    }, 500);
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-lg mx-auto px-6 py-12">
        <h1 className="text-3xl font-extrabold text-emerald-900">Create your account</h1>
        <p className="mt-2 text-sm text-gray-600">
          Fill this quick form to get started with Dhanwaan.
        </p>

        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              name="name"
              required
              className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>

          {/* Email + Phone */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input
                type="tel"
                name="phone"
                required
                className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>
          </div>

          {/* Role + City */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium">Role</label>
              <select
                name="role"
                className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              >
                <option>Customer</option>
                <option>Agent</option>
                <option>Dealer</option>
                <option>Not using the app</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">City</label>
              <input
                name="city"
                required
                className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>
          </div>

          {/* State + Pin Code */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium">State</label>
              <select
                name="state"
                className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                required
              >
                <option value="">Select State</option>
                <option>Uttarakhand</option>
                <option>Uttar Pradesh</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Pin Code</label>
              <input
                type="number"
                name="pincode"
                required
                className="no-spinner mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-700 text-white px-5 py-2.5 font-semibold hover:bg-emerald-600 disabled:opacity-60"
          >
            {status === "submitting" ? "Submitting..." : "Sign up"}
          </button>

          {status === "ok" && (
            <p className="text-sm text-emerald-700 mt-2">
              Thanks! We’ll reach out shortly.
            </p>
          )}
        </form>
      </section>

      {/* Style block to remove number input arrows */}
      <style jsx global>{`
        /* Hide increment/decrement arrows on number input */
        input[type="number"].no-spinner::-webkit-outer-spin-button,
        input[type="number"].no-spinner::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type="number"].no-spinner {
          -moz-appearance: textfield;
        }
      `}</style>
    </main>
  );
}
