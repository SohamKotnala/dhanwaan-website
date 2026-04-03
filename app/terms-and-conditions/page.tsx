import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions • Dhanwaan",
  description:
    "These Terms & Conditions govern the use of Dhanwaan’s software platform and website as a technology service provider.",
};

const EFFECTIVE_DATE = "December 18, 2025";

export default function TermsAndConditionsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">
        Terms &amp; Conditions
      </h1>
      <p className="text-xs text-gray-500 mb-8">
        Effective Date: {EFFECTIVE_DATE}
      </p>

      <section className="prose prose-gray max-w-none space-y-6">

        <h2>1. Agreement to These Terms</h2>
        <p>
          These Terms &amp; Conditions (“Terms”) govern your access to and use of
          the Dhanwaan mobile application, website, and related digital platforms
          (collectively, the “Platform”). By accessing or using the Platform, you
          agree to be bound by these Terms. If you do not agree, you must
          discontinue use immediately.
        </p>

        <h2>2. About Dhanwaan</h2>
        <p>
          Dhanwaan is a technology service provider offering subscription-based
          software infrastructure to regulated financial institutions, including
          Nidhi companies, cooperatives, and micro-finance institutions.
        </p>
        <p>
          <strong>
            Dhanwaan does not undertake any regulated financial activity and does
            not handle, store, pool, or control customer funds.
          </strong>{" "}
          All financial products, deposits, withdrawals, interest calculations,
          and repayments are managed solely by the respective registered
          financial institutions.
        </p>

        <h2>3. Definitions</h2>
        <ul>
          <li>
            <strong>“Platform”</strong> refers to the Dhanwaan app and website.
          </li>
          <li>
            <strong>“User”</strong> refers to any individual accessing the
            Platform.
          </li>
          <li>
            <strong>“Institution”</strong> refers to a registered financial
            entity using Dhanwaan’s software.
          </li>
          <li>
            <strong>“Services”</strong> refers to technology and software
            services provided by Dhanwaan.
          </li>
        </ul>

        <h2>4. Eligibility &amp; User Responsibilities</h2>
        <ul>
          <li>You must be at least 18 years old to use the Platform.</li>
          <li>You agree to provide accurate and up-to-date information.</li>
          <li>
            You are responsible for maintaining the confidentiality of your login
            credentials.
          </li>
          <li>
            You agree not to misuse the Platform or attempt unauthorized access.
          </li>
        </ul>

        <h2>5. Nature of Financial Transactions</h2>
        <p>
          Any financial transaction initiated through the Platform is executed
          directly between the User and the relevant Institution.
        </p>
        <p>
          Dhanwaan’s role is limited to providing a digital interface,
          automation tools, and system logging. Dhanwaan does not:
        </p>
        <ul>
          <li>Accept deposits or repayments</li>
          <li>Approve or reject withdrawals</li>
          <li>Determine interest, returns, or penalties</li>
          <li>Act as a custodian of funds</li>
        </ul>

        <h2>6. Institution-Specific Terms</h2>
        <p>
          Each Institution may publish its own terms, policies, and financial
          conditions governing deposits, withdrawals, refunds, and dispute
          resolution.
        </p>
        <p>
          By proceeding with any financial action, you acknowledge that you have
          reviewed and accepted the applicable Institution’s terms. Dhanwaan is
          not a party to those agreements.
        </p>

        <h2>7. Fees &amp; Subscriptions</h2>
        <p>
          Dhanwaan charges subscription fees exclusively to Institutions for
          access to its software services. End users are not charged by
          Dhanwaan.
        </p>

        <h2>8. Intellectual Property</h2>
        <p>
          All software, content, trademarks, and design elements of the Platform
          are the intellectual property of Dhanwaan or its licensors. Unauthorized
          reproduction or distribution is prohibited.
        </p>

        <h2>9. Prohibited Activities</h2>
        <ul>
          <li>Using the Platform for unlawful or fraudulent purposes</li>
          <li>Attempting to disrupt system security or performance</li>
          <li>Impersonating any individual or institution</li>
          <li>Uploading harmful or misleading content</li>
        </ul>

        <h2>10. Disclaimer</h2>
        <p>
          The Platform is provided on an “as-is” and “as-available” basis.
          Dhanwaan makes no warranties regarding uninterrupted access or error-
          free operation.
        </p>

        <h2>11. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Dhanwaan shall not be liable
          for any losses arising from:
        </p>
        <ul>
          <li>Institution decisions or actions</li>
          <li>Banking or payment network failures</li>
          <li>User errors or unauthorized access</li>
          <li>Regulatory actions affecting Institutions</li>
        </ul>

        <h2>12. Termination</h2>
        <p>
          Dhanwaan may suspend or terminate access to the Platform if these Terms
          are violated or if required by law.
        </p>

        <h2>13. Governing Law</h2>
        <p>
          These Terms are governed by the laws of India, with exclusive
          jurisdiction in Dehradun, Uttarakhand.
        </p>

        <h2>14. Contact Information</h2>
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:care@dhanwaan.in">care@dhanwaan.in</a>
          </li>
          <li>
            Address: Dehradun, Uttarakhand, India
          </li>
        </ul>

      </section>
    </main>
  );
}
