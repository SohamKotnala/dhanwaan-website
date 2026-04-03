import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies Policy • Dhanwaan",
  description:
    "How Dhanwaan uses cookies and similar technologies on its website and app.",
};

const EFFECTIVE_DATE = "October 28, 2025";

export default function CookiesPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Cookies Policy</h1>
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

        <h2>1. What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit a website or use an
          app. They help us remember your preferences, improve performance, and provide a more
          personalized experience.
        </p>

        <h2>2. How We Use Cookies</h2>
        <p>
          We use cookies and similar technologies on our Dhanwaan website and app for the following
          purposes:
        </p>
        <h3>a. Essential Cookies</h3>
        <p>
          These cookies are necessary for the app and website to function properly — for example,
          enabling secure login, maintaining session state, and remembering your saved preferences.
        </p>
        <h3>b. Performance &amp; Analytics Cookies</h3>
        <p>
          These help us understand how users interact with our app and website, so we can enhance
          performance, navigation, and experience.
        </p>
        <h3>c. Functional Cookies</h3>
        <p>
          These allow us to personalize your experience — such as remembering your settings, region,
          and preferred language.
        </p>
        <h3>d. Marketing Cookies (if applicable)</h3>
        <p>
          Used only with your consent to show relevant promotions or updates. Dhanwaan does not sell
          or share cookie data for third-party advertising.
        </p>

        <h2>3. Managing Cookies</h2>
        <p>You can control cookies through your browser or device settings:</p>
        <ul>
          <li>Accept, reject, or delete cookies.</li>
          <li>Be notified when a cookie is set.</li>
        </ul>
        <p>
          However, disabling certain cookies may limit your access to some features or affect
          website performance.
        </p>

        <h2>4. Third-Party Cookies</h2>
        <p>
          We may use secure third-party tools such as Google Analytics to measure website traffic
          and performance. These tools may set their own cookies in accordance with their respective
          privacy policies.
        </p>

        <h2>5. Consent</h2>
        <p>
          By continuing to use our app or website, you consent to the use of cookies as outlined in
          this policy. You can withdraw your consent anytime by changing your cookie settings in your
          browser or app preferences.
        </p>

        <h2>6. Changes to This Policy</h2>
        <p>
          We may update this Cookies Policy periodically. Any changes will be posted on our website
          with the updated “Effective Date.”
        </p>

        <h2>7. Contact Us</h2>
        <ul>
          <li>
            📩 Email:{" "}
            <a href="mailto:care@dhanwaan.in">care@dhanwaan.in</a>
          </li>
          <li>🏢 Address: Sumangalam Credit Society, Dehradun, Uttarakhand, India</li>
        </ul>
      </section>
    </main>
  );
}
