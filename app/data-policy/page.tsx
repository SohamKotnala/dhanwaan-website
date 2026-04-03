import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Policy • Dhanwaan",
  description:
    "How Dhanwaan (operated by Sumangalam Credit Society) collects, processes, stores, and protects user data.",
};

const EFFECTIVE_DATE = "October 28, 2025";

export default function DataPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Data Policy</h1>
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

        <h2>1. Introduction</h2>
        <p>
          This Data Policy explains how Dhanwaan (operated by Sumangalam Credit Society)
          collects, processes, uses, stores, and protects user data. We are committed to
          handling all data in a lawful, transparent, and secure manner in compliance with
          applicable Indian laws and cooperative banking regulations.
        </p>

        <h2>2. Types of Data Collected</h2>
        <h3>a. Personal Data</h3>
        <ul>
          <li>Full Name</li>
          <li>Contact Information (email, phone number)</li>
          <li>Date of Birth and Address</li>
          <li>State and Pincode</li>
          <li>Aadhaar / PAN (for KYC verification)</li>
        </ul>
        <h3>b. Financial Data</h3>
        <ul>
          <li>Bank Account Details</li>
          <li>Transaction History (savings, deposits, withdrawals)</li>
          <li>E-Mandate / Auto-debit consent records</li>
          <li>Credit and loan-related data (if applicable)</li>
        </ul>
        <h3>c. Device &amp; Technical Data</h3>
        <ul>
          <li>IP address, device type, and OS version</li>
          <li>App usage logs and crash analytics</li>
          <li>Cookies and session identifiers (for web users)</li>
        </ul>
        <h3>d. Location Data</h3>
        <p>Used only to verify identity and prevent fraud during KYC and onboarding.</p>

        <h2>3. Purpose of Data Collection</h2>
        <ul>
          <li>Completing KYC and regulatory compliance checks</li>
          <li>Enabling savings, deposits, and transaction services</li>
          <li>Verifying user identity and preventing fraud</li>
          <li>Providing customer support and resolving queries</li>
          <li>Sending transaction alerts, notifications, and updates</li>
          <li>Improving app functionality, security, and performance</li>
          <li>Generating analytics (anonymized and aggregated)</li>
        </ul>
        <p><strong>We do not sell, trade, or rent</strong> your personal information to any third party.</p>

        <h2>4. Data Storage and Security</h2>
        <ul>
          <li>All sensitive user information is encrypted during transmission and storage.</li>
          <li>
            Data is stored securely on servers that comply with RBI and NPCI standards for
            financial systems.
          </li>
          <li>
            We regularly conduct security audits to protect against unauthorized access, data
            loss, or misuse.
          </li>
          <li>Only authorized personnel have controlled access to user data.</li>
        </ul>

        <h2>5. Data Sharing</h2>
        <p>Your data may be shared only with:</p>
        <ul>
          <li>Authorized banking and financial partners for transaction processing.</li>
          <li>Regulatory bodies such as RBI or NPCI, as mandated by law.</li>
          <li>
            Third-party vendors for secure services like OTP, SMS, KYC verification, or
            analytics — bound by confidentiality agreements.
          </li>
        </ul>
        <p>We do not allow any partner to use your data beyond the purpose agreed upon.</p>

        <h2>6. Data Retention</h2>
        <p>We retain your data only for as long as:</p>
        <ul>
          <li>Required by law or regulatory authorities, and</li>
          <li>Necessary to fulfill the services you use.</li>
        </ul>
        <p>
          After this period, data is safely deleted or anonymized following secure disposal
          protocols.
        </p>

        <h2>7. User Rights</h2>
        <p>As a Dhanwaan user, you have the right to:</p>
        <ul>
          <li>Access and review your stored personal data.</li>
          <li>Request corrections or updates to inaccurate data.</li>
          <li>Withdraw consent for certain data uses (subject to regulatory requirements).</li>
          <li>Request deletion of your account and related personal data.</li>
        </ul>
        <p>
          To exercise these rights, email us at{" "}
          <a href="mailto:care@dhanwaan.in">care@dhanwaan.in</a>.
        </p>

        <h2>8. Data Breach Response</h2>
        <ul>
          <li>You will be notified promptly via your registered email or phone.</li>
          <li>
            The breach will be reported to relevant authorities as per compliance norms.
          </li>
          <li>Immediate actions will be taken to mitigate impact and restore data integrity.</li>
        </ul>

        <h2>9. Data Transfers</h2>
        <p>
          We do not transfer user data outside India. All processing and storage occur within
          Indian jurisdiction, ensuring compliance with the Digital Personal Data Protection
          Act, 2023 (DPDP Act).
        </p>

        <h2>10. Policy Updates</h2>
        <p>
          This Data Policy may be updated periodically to reflect new legal or operational
          requirements. Any changes will be posted on{" "}
          <a href="https://dhanwaan.in/data-policy" target="_blank" rel="noopener noreferrer">
            https://dhanwaan.in/data-policy
          </a>{" "}
          with the revised Effective Date.
        </p>

        <h2>11. Contact Us</h2>
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
