import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service — MyTikStats</title>
        <meta name="description" content="MyTikStats Terms of Service. Read our terms before using the platform." />
      </Head>

      <Nav />

      <div className="legal-page">
        <h1>Terms of Service</h1>
        <p className="legal-meta">Last updated: January 1, 2025 &nbsp;·&nbsp; Effective: January 1, 2025</p>

        <p>
          Welcome to MyTikStats. By accessing or using our platform, you agree to be bound by these Terms of Service
          ("Terms"). Please read them carefully before using the service.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By creating an account or using MyTikStats in any way, you confirm that you are at least 18 years of age
          (or the age of majority in your jurisdiction), have read and understood these Terms, and agree to be bound by them.
          If you do not agree to these Terms, you must not use the service.
        </p>

        <h2>2. Description of Service</h2>
        <p>
          MyTikStats is an analytics platform that allows TikTok content creators to view and analyze data from their
          own TikTok accounts. The service connects to TikTok's official API to retrieve publicly available metrics
          including video views, likes, comments, shares, and follower counts. MyTikStats is an independent service
          and is not affiliated with, endorsed by, or sponsored by TikTok or ByteDance Ltd.
        </p>

        <h2>3. TikTok API Usage</h2>
        <p>
          MyTikStats accesses TikTok account data exclusively through TikTok's official API. By using our service, you authorize MyTikStats to:
        </p>
        <ul>
          <li>Access your TikTok account data via TikTok's official Login Kit and Content API</li>
          <li>Read your public profile information, video list, and associated metrics</li>
          <li>Display that data within the MyTikStats dashboard</li>
          <li>Generate aggregated reports and exports for your personal use</li>
        </ul>
        <p>
          MyTikStats will never post content, send messages, follow or unfollow accounts, or perform any action on
          your TikTok account beyond reading the data you have authorized. Your TikTok login credentials are never
          stored on our servers; authentication is handled entirely by TikTok.
        </p>

        <h2>4. User Accounts and Responsibilities</h2>
        <p>You are responsible for:</p>
        <ul>
          <li>Maintaining the security of your MyTikStats account credentials</li>
          <li>All activity that occurs under your account</li>
          <li>Ensuring that your use of the service complies with TikTok's own Terms of Service and Community Guidelines</li>
          <li>Notifying us immediately of any unauthorized access to your account</li>
        </ul>

        <h2>5. Data and Privacy</h2>
        <p>
          Your use of the service is also governed by our <a href="/privacy">Privacy Policy</a>, which is incorporated
          into these Terms by reference. We collect and process only the minimum data necessary to provide the
          analytics service. We do not sell your personal data to third parties.
        </p>

        <h2>6. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the service to access any TikTok account other than your own</li>
          <li>Attempt to reverse engineer, decompile, or disassemble any part of the service</li>
          <li>Use automated scripts or bots to interact with the service in a way that places excessive load on our infrastructure</li>
          <li>Use the service for any unlawful purpose or in violation of any applicable law or regulation</li>
          <li>Resell, sublicense, or redistribute access to the service without written permission</li>
        </ul>

        <h2>7. Intellectual Property</h2>
        <p>
          All content, design, code, and materials on the MyTikStats platform are the intellectual property of
          MyTikStats and its licensors. TikTok data retrieved through the API remains the property of TikTok and its
          users as defined by TikTok's own terms. You may not reproduce, distribute, or create derivative works from
          MyTikStats's own platform materials without express written consent.
        </p>

        <h2>8. Disclaimer of Warranties</h2>
        <p>
          The service is provided "as is" and "as available" without warranties of any kind, either express or implied.
          MyTikStats does not warrant that the service will be uninterrupted, error-free, or that the data retrieved
          from TikTok will be accurate or complete. Accuracy of analytics data depends on TikTok's API and may be
          subject to delays or discrepancies beyond our control.
        </p>

        <h2>9. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by applicable law, MyTikStats shall not be liable for any indirect, incidental,
          special, consequential, or punitive damages arising from your use of or inability to use the service, even if
          we have been advised of the possibility of such damages. Our total liability to you for any claims arising
          under these Terms shall not exceed the amount you paid for the service in the twelve months preceding the claim.
        </p>

        <h2>10. Termination</h2>
        <p>
          MyTikStats reserves the right to suspend or terminate your access to the service at any time, with or without
          cause, and with or without notice. Upon termination, your right to use the service immediately ceases. You may
          also terminate your account at any time by contacting us at the address below.
        </p>

        <h2>11. Changes to Terms</h2>
        <p>
          We may update these Terms from time to time. We will notify you of material changes by posting the new Terms
          on this page and updating the "Last updated" date. Continued use of the service after changes constitutes
          your acceptance of the revised Terms.
        </p>

        <h2>12. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the Republic of Indonesia,
          without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject
          to the exclusive jurisdiction of the courts located in Indonesia.
        </p>

        <h2>13. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at:{' '}
          <a href="mailto:hello@mytikstats.com">hello@mytikstats.com</a>
        </p>
      </div>

      <Footer />
    </>
  )
}
