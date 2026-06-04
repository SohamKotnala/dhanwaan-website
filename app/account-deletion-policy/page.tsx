import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account Deletion Policy • Dhanwaan",
  description:
    "Instructions and policy for requesting account deletion and data removal from Dhanwaan.",
};

const EFFECTIVE_DATE = "4 June 2026"; // Update this to your preferred effective date

export default function AccountDeletionPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Account Deletion Policy</h1>
      <p className="text-xs text-gray-500 mb-8">
        Effective Date: {EFFECTIVE_DATE}
      </p>

      <section className="space-y-6 prose prose-gray max-w-none">
        <p>
          At Dhanwaan, we respect your right to privacy and your right to control your personal data. 
          If you no longer wish to use our services and want your account and associated data permanently deleted, 
          please follow the instructions outlined in this policy.
        </p>

        <h2>1. How to Request Account Deletion</h2>
        <p>
          To initiate the account deletion process, you must submit a formal request via email. For security and verification purposes, the request <strong>must be sent from the email address currently linked to your Dhanwaan account</strong>.
        </p>
        <p>
          Please send your deletion request to: <br />
          <strong>Email:</strong> <a href="mailto:support@dhanwaanfinance.com">support@dhanwaanfinance.com</a>
        </p>

        <h2>2. Required Information</h2>
        <p>
          To help us quickly locate your account and verify your identity, please include the following details in your email:
        </p>
        <ul>
          <li><strong>Username:</strong> Your registered Dhanwaan username.</li>
          <li><strong>Phone Number:</strong> The mobile number associated with your account.</li>
          <li><strong>Reason for Deletion:</strong> A brief explanation of why you are leaving (this helps us improve our services).</li>
        </ul>

        <h2>3. Processing Time and Data Retention</h2>
        <p>
          Once we receive your request, our support team will verify your details. The account deletion process may take up to 7-14 business days to complete. 
        </p>
        <p>
          Please note that while your active account will be closed and your profile will be made inaccessible, we may be required to retain certain financial and transactional records to comply with applicable laws, regulations, and reporting obligations as specified by relevant authorities.
        </p>

        <h2>4. Contact Us</h2>
        <p>
          If you have any questions or face issues while attempting to delete your account, please reach out to our support team at <a href="mailto:support@dhanwaanfinance.com">support@dhanwaanfinance.com</a>.
        </p>
      </section>
    </main>
  );
}