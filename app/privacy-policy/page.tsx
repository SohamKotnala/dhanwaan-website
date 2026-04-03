import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy • Dhanwaan",
  description:
    "Privacy Policy governing the collection, use, storage, and disclosure of personal and sensitive data by Dhanwaan.",
};

const EFFECTIVE_DATE = "21 January 2026";

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-xs text-gray-500 mb-8">
        Effective Date: {EFFECTIVE_DATE}
      </p>

      <section className="space-y-6 prose prose-gray max-w-none">
        <p>
          This privacy policy document (&quot;Privacy Policy&quot;) is published
          in accordance with the provisions of Rule 4(1) of the Information
          Technology (Reasonable Security Practices and Procedures and Sensitive
          Personal Data or Information) Rules, 2011 which requires the publishing
          of a privacy policy for handling of or dealing in personal information
          including sensitive personal data or information.
        </p>

        <h2>1. General</h2>
        <p>
          DHANWAAN is a proprietorship registered firm incorporated under the
          Central Goods and Service Tax Act, 2017 (GST: 05CBVPD8485J3ZV) (&quot;the
          Firm&quot;) that provides a technological interface to facilitate
          savings in various financial products including fixed deposits, daily
          deposits, loan and loan repayment (&quot;Offerings on the
          Platform&quot;), through DHANWAAN.
        </p>

        <p>
          From time to time, the Platform may allow users to save in other saving
          products and schemes via different registered and authorised NIDHI
          companies, Credit Cooperative Societies (single state and multistate),
          Section 8 Companies, Microfinance companies, and other entities
          registered under State Government and Central Government of India.
        </p>

        <p>
          For the purpose of this Privacy Policy, &quot;You&quot;, &quot;Your&quot;
          or &quot;User&quot; shall mean any natural person who has already signed
          up on the Platform and intends to access the Platform and/or avail the
          Offerings on the Platform. &quot;We&quot;, &quot;Us&quot;, &quot;Firm&quot;
          or &quot;the Company&quot; shall mean DHANWAAN, having its registered
          office at Second Floor, 58-C, Green Residency Block 1, Govind Nagar,
          Race Course, Dehradun, Uttarakhand – 248001, or its subsidiaries,
          associates or affiliates.
        </p>

        <p>
          This Privacy Policy provides specific information on who is processing
          Your data, how and why it is being processed and Your rights with
          regard to the control over Your data when availing the Offerings on the
          Platform.
        </p>

        <h2>2. Consent</h2>
        <p>
          By accepting this Privacy Policy and by accessing or using the
          Platform, You agree that You have read, understood, acknowledged and
          accepted this Privacy Policy and explicitly consent to the collection,
          sharing, processing, use, storage and disclosure of Your Personal
          Information and Non-Personal Information by Us and our affiliate
          entities, Partner Banks and NBFCs.
        </p>

        <p>
          If You do not accept this Privacy Policy, the Terms and the Disclaimer
          Document, You must not access or use the Platform.
        </p>

        <p>
          If You use the Offerings on behalf of another person or entity, You
          represent that You are authorised to accept this Privacy Policy and
          provide consent on their behalf.
        </p>

        <h2>3. Types of Data Collected</h2>

        <h3>Personal Information</h3>
        <p>
          Personal Information includes any information which is directly or
          indirectly available to Us to identify or verify individual identity,
          including sensitive personal data such as bank account details, UPI
          details, debit card details and biometric information.
        </p>

        <h3>Non-Personal Information</h3>
        <p>
          Non-Personal Information includes information that cannot identify an
          individual, such as IP address, browser type and internet service
          provider.
        </p>

        <h3>Categories of Information</h3>
        <ul>
          <li>Personal particulars (name, age, gender, address, date of birth)</li>
          <li>Contact information (mobile number, email, address)</li>
          <li>Financial information (bank account, UPI, turnover, income)</li>
          <li>KYC documents (PAN, identity and address proofs)</li>
          <li>Transactional information and money flow details</li>
          <li>Usage and technical information</li>
          <li>Saving account information</li>
          <li>Marketing and communication data</li>
          <li>
            Device information including SMS, location, media (with permission)
          </li>
        </ul>

        <h2>4. Purpose and Use of Data</h2>
        <ul>
          <li>Providing Offerings on the Platform</li>
          <li>Setting up saving accounts and processing transactions</li>
          <li>Maintaining transaction records and notifications</li>
          <li>Identity verification and KYC compliance</li>
          <li>Customer support and grievance handling</li>
          <li>Analytics, research and service improvement</li>
          <li>Fraud prevention and security</li>
          <li>Compliance with applicable laws and regulations</li>
        </ul>

        <h2>5. Disclosure and Sharing</h2>
        <p>
          Personal Information may be shared with Partner Banks, NBFCs, KRAs,
          payment gateways, affiliates, auditors, legal advisors and regulatory
          authorities as required by law. Cross-border data transfer may occur
          where permitted by applicable law.
        </p>

        <h2>6. Cookies</h2>
        <p>
          Cookies may be used to analyse usage patterns and improve user
          experience. Disabling cookies may limit certain features.
        </p>

        <h2>7. Third-Party Links</h2>
        <p>
          The Platform may contain links to third-party websites. We are not
          responsible for their privacy practices and recommend reviewing their
          privacy policies separately.
        </p>

        <h2>8. Data Retention</h2>
        <p>
          Personal and Non-Personal Information may be retained as required for
          legal, regulatory, contractual and operational purposes, including
          after account deactivation.
        </p>

        <h2>9. Age Confirmation</h2>
        <p>
          You confirm that You are above 18 years of age and provide information
          voluntarily.
        </p>

        <h2>10. Contact Information</h2>
        <ul>
          <li>
            Email: <a href="mailto:care@dhanwaan.in">care@dhanwaan.in</a>
          </li>
          <li>
            Address: Second Floor, 58-C, Green Residency Block 1, Govind Nagar,
            Race Course, Dehradun, Uttarakhand – 248001
          </li>
        </ul>
      </section>
    </main>
  );
}
