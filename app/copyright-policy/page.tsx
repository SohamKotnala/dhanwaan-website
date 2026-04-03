import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Copyright Policy • Dhanwaan",
  description:
    "Learn about Dhanwaan’s copyright ownership, permitted use, and reporting process for intellectual property violations.",
};

const EFFECTIVE_DATE = "October 28, 2025";

export default function CopyrightPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Copyright Policy</h1>
      <p className="text-xs text-gray-500 mb-8">Effective Date: {EFFECTIVE_DATE}</p>

      <section className="space-y-6 prose prose-gray max-w-none">
        <p>
          <strong>Entity:</strong> Sumangalam Credit Society (operating with Dhanwaan)
          <br />
          <strong>Website &amp; App:</strong>{" "}
          <a href="https://dhanwaan.in" target="_blank" rel="noopener noreferrer">
            https://dhanwaan.in
          </a>
        </p>

        <h2>1. Ownership of Content</h2>
        <p>
          All content available on Dhanwaan, including but not limited to:
        </p>
        <ul>
          <li>Text, graphics, icons, images, videos, illustrations, and designs</li>
          <li>Website and app layout, structure, and code</li>
          <li>Logos, brand names, trademarks, and taglines</li>
        </ul>
        <p>
          is the exclusive property of Sumangalam Credit Society (operating with Dhanwaan)
          unless otherwise stated. All rights are reserved under the Copyright Act, 1957
          (India) and applicable international copyright laws.
        </p>

        <h2>2. Limited License for Users</h2>
        <p>You are granted a limited, non-transferable, and non-exclusive license to:</p>
        <ul>
          <li>
            Access and use Dhanwaan’s website and app for personal, lawful, and non-commercial
            purposes.
          </li>
          <li>Download or print portions of material for personal reference only.</li>
        </ul>
        <p>You may not:</p>
        <ul>
          <li>
            Copy, reproduce, modify, distribute, display, or publish any part of Dhanwaan’s
            content without written permission.
          </li>
          <li>Use our brand name, logo, or materials for commercial or misleading purposes.</li>
          <li>
            Reverse engineer, decompile, or replicate any part of our website or app’s code or
            design.
          </li>
        </ul>

        <h2>3. Copyright Infringement Notice</h2>
        <p>
          We respect the intellectual property rights of others and expect the same from our
          users. If you believe that any content on Dhanwaan infringes your copyright, please
          notify us with the following details:
        </p>
        <ol>
          <li>
            A written description of the copyrighted material you claim has been infringed.
          </li>
          <li>The URL or location where the infringing content appears.</li>
          <li>Proof of ownership or authorization to act on behalf of the copyright holder.</li>
          <li>Your name, address, contact number, and email ID.</li>
        </ol>
        <p>
          Send your notice to:
          <br />
          📩 <a href="mailto:care@dhanwaan.in">care@dhanwaan.in</a>
          <br />
          📍 Sumangalam Credit Society, Dehradun, Uttarakhand, India
        </p>
        <p>
          We will investigate and take appropriate action, including content removal or access
          restriction, if necessary.
        </p>

        <h2>4. Use of Third-Party Material</h2>
        <p>
          Some visuals, icons, or references used in the Dhanwaan website or app may originate
          from third-party licensed sources or open resources with attribution. Such materials
          remain the property of their respective copyright owners and are used in compliance
          with their terms.
        </p>

        <h2>5. Trademarks</h2>
        <p>
          The Dhanwaan name, logo, and associated visuals are trademarks of Sumangalam Credit
          Society. Unauthorized use of these marks in connection with any product, service, or
          communication is strictly prohibited and may result in legal action.
        </p>

        <h2>6. Violation of Copyright Policy</h2>
        <p>Any unauthorized use, reproduction, or redistribution of Dhanwaan’s intellectual property may result in:</p>
        <ul>
          <li>Immediate suspension of account or access, and/or</li>
          <li>Legal action under applicable laws of India (Dehradun jurisdiction).</li>
        </ul>

        <h2>7. Updates to This Policy</h2>
        <p>
          We may revise this Copyright Policy periodically to comply with new laws or internal
          practices. All updates will be reflected on this page with the revised Effective Date.
        </p>

        <h2>8. Contact Us</h2>
        <ul>
          <li>
            📩 Email: <a href="mailto:care@dhanwaan.in">care@dhanwaan.in</a>
          </li>
          <li>🏢 Address: Sumangalam Credit Society, Dehradun, Uttarakhand, India</li>
        </ul>
      </section>
    </main>
  );
}
