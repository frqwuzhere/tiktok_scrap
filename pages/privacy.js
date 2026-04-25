import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — MyTikStats</title>
        <meta name="description" content="MyTikStats Privacy Policy. Understand how we collect, use, and protect your data." />
      </Head>

      <Nav />

      <div className="legal-page">
        <h1>Privacy Policy</h1>
        <p className="legal-meta">Last updated: January 1, 2025 &nbsp;·&nbsp; Effective: January 1, 2025</p>

        <p>
          MyTikStats ("we", "us", or "our") is committed to protecting your personal data. This Privacy Policy explains
          how we collect, use, store, and share information when you use our analytics platform. By using MyTikStats,
          you agree to the practices described in this policy.
        </p>

        <h2>1. Information We Collect</h2>
        <p>We collect the following categories of information:</p>

        <p><strong style={{color:'var(--text)'}}>1.1 Information from TikTok (via Official API)</strong></p>
        <p>When you connect your TikTok account, we retrieve the following data through TikTok's official API:</p>
        <ul>
          <li>Your TikTok username and display name</li>
          <li>Your public profile information (avatar, bio, follower count, following count)</li>
          <li>A list of your posted videos and their associated metrics (views, likes, comments, shares, duration)</li>
          <li>Aggregate account statistics (total likes, total video count)</li>
        </ul>
        <p>
          We do not access your private messages, draft content, payment information, or any data beyond what is
          necessary to provide the analytics service.
        </p>

        <p><strong style={{color:'var(--text)'}}>1.2 Account Information</strong></p>
        <p>When you register for MyTikStats, we collect your email address and a hashed password to manage your account.</p>

        <p><strong style={{color:'var(--text)'}}>1.3 Usage Data</strong></p>
        <p>
          We automatically collect standard technical information when you use the service, including IP address,
          browser type, pages visited, and timestamps. This data is used solely for security monitoring and service improvement.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Display your TikTok analytics within your personal dashboard</li>
          <li>Generate reports and Excel exports upon your request</li>
          <li>Maintain and improve the functionality of the service</li>
          <li>Send you service-related communications (account alerts, updates)</li>
          <li>Comply with legal obligations and enforce our Terms of Service</li>
        </ul>
        <p>We do not use your data for advertising, profiling, or any purpose unrelated to providing you with analytics.</p>

        <h2>3. How We Share Your Information</h2>
        <p>
          We do not sell, rent, or trade your personal data to third parties. We may share your data only in the
          following limited circumstances:
        </p>
        <ul>
          <li><strong style={{color:'var(--text)'}}>Service Providers:</strong> We use trusted third-party providers (e.g., cloud hosting, database) to operate the service. These providers are contractually obligated to protect your data and may not use it for their own purposes.</li>
          <li><strong style={{color:'var(--text)'}}>Legal Requirements:</strong> We may disclose your information if required by law, court order, or government authority.</li>
          <li><strong style={{color:'var(--text)'}}>Business Transfer:</strong> In the event of a merger, acquisition, or sale of assets, your data may be transferred. We will notify you before such a transfer occurs.</li>
        </ul>

        <h2>4. TikTok API Data and Compliance</h2>
        <p>
          MyTikStats accesses TikTok data exclusively through TikTok's official API and complies with TikTok's
          API Terms of Service. We use TikTok's Login Kit for authentication — we never store your TikTok
          password. Access tokens obtained through TikTok's OAuth flow are stored securely and encrypted.
          You may revoke our access to your TikTok account at any time through TikTok's app settings under
          "Manage App Permissions."
        </p>
        <p>
          Data obtained through the TikTok API is used solely to provide the analytics service to you. We do
          not share, sell, or use TikTok API data for training machine learning models or for purposes beyond
          the core functionality described in this policy.
        </p>

        <h2>5. Data Retention</h2>
        <p>
          We retain your account information and cached analytics data for as long as your account is active.
          If you delete your account, we will delete your personal data within 30 days, except where we are
          required by law to retain it. Anonymized, aggregate usage statistics may be retained indefinitely.
        </p>

        <h2>6. Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your data, including encryption in transit
          (TLS/HTTPS) and at rest, access controls, and regular security reviews. However, no system is completely
          secure. We encourage you to use a strong, unique password for your MyTikStats account and to notify us
          immediately if you suspect unauthorized access.
        </p>

        <h2>7. Your Rights</h2>
        <p>Depending on your location, you may have the following rights regarding your personal data:</p>
        <ul>
          <li><strong style={{color:'var(--text)'}}>Access:</strong> Request a copy of the personal data we hold about you.</li>
          <li><strong style={{color:'var(--text)'}}>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
          <li><strong style={{color:'var(--text)'}}>Deletion:</strong> Request that we delete your personal data ("right to be forgotten").</li>
          <li><strong style={{color:'var(--text)'}}>Portability:</strong> Request your data in a portable, machine-readable format.</li>
          <li><strong style={{color:'var(--text)'}}>Objection:</strong> Object to certain types of processing of your data.</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at <a href="mailto:privacy@mytikstats.com">privacy@mytikstats.com</a>.
          We will respond within 30 days.
        </p>

        <h2>8. Cookies and Tracking</h2>
        <p>
          MyTikStats uses only essential cookies required for authentication and session management. We do not
          use advertising cookies, third-party tracking pixels, or analytics cookies that share your data with
          external platforms. You may disable cookies in your browser settings, but this may affect the
          functionality of the service.
        </p>

        <h2>9. Children's Privacy</h2>
        <p>
          MyTikStats is not directed at individuals under the age of 18. We do not knowingly collect personal
          data from minors. If you believe we have inadvertently collected data from a minor, please contact us
          and we will delete it promptly.
        </p>

        <h2>10. International Data Transfers</h2>
        <p>
          Your data may be stored and processed in servers located outside your country of residence. By using
          MyTikStats, you consent to the transfer of your information to these servers, which may have different
          data protection laws than your jurisdiction. We take steps to ensure your data is treated securely
          regardless of where it is processed.
        </p>

        <h2>11. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of significant changes by
          email or through a notice on our platform. Your continued use of the service after the changes take
          effect constitutes your acceptance of the revised policy.
        </p>

        <h2>12. Contact Us</h2>
        <p>
          For any questions or concerns about this Privacy Policy or how we handle your data, please contact us:
        </p>
        <ul>
          <li>Email: <a href="mailto:privacy@mytikstats.com">privacy@mytikstats.com</a></li>
          <li>General inquiries: <a href="mailto:hello@mytikstats.com">hello@mytikstats.com</a></li>
        </ul>
      </div>

      <Footer />
    </>
  )
}
