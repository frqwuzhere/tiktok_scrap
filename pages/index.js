import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>MyTikStats — TikTok Analytics for Creators</title>
        <meta name="description" content="Track your TikTok growth. Monitor views, likes, comments, shares and follower growth — all in one place." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="hero-badge">
            <span>📊</span> TikTok Analytics Platform
          </div>
          <h1 className="hero-title">
            Know Your<br />
            <span className="highlight">TikTok Growth</span>
          </h1>
          <p className="hero-sub">
            MyTikStats connects to your TikTok account and delivers real-time analytics —
            views, likes, comments, shares, and follower trends — in a clean dashboard built for creators.
          </p>
          <div className="hero-actions">
            <a href="#features" className="btn-primary">
              Explore Features →
            </a>
            <a href="#contact" className="btn-secondary">
              Get Early Access
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <div className="stats-bar">
        <div className="stat-item">
          <div className="stat-number">5+</div>
          <div className="stat-label">Metrics Tracked</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">Real‑time</div>
          <div className="stat-label">Data Sync</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">Excel</div>
          <div className="stat-label">Export Ready</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">100%</div>
          <div className="stat-label">Your Data Only</div>
        </div>
      </div>

      {/* ── Features ── */}
      <section className="section" id="features">
        <div className="section-tag">Features</div>
        <h2 className="section-title">Everything you need to<br />track your growth</h2>
        <p className="section-sub">
          MyTikStats uses the official TikTok API to pull your account data safely and display it in a way that actually makes sense.
        </p>
        <div className="features-grid">
          {[
            { icon: '👁', title: 'Video Views', desc: 'Track play counts across all your videos. Filter by date range and see which content performs best over time.' },
            { icon: '❤️', title: 'Likes & Engagement', desc: 'Monitor like counts, engagement rate, and how your audience reacts to different content types.' },
            { icon: '💬', title: 'Comment Tracking', desc: 'See comment volume trends across your posts to understand which topics spark the most conversation.' },
            { icon: '🔁', title: 'Share Analytics', desc: 'Shares are the strongest virality signal on TikTok. Track which videos are being spread by your audience.' },
            { icon: '👥', title: 'Follower Growth', desc: 'See how your follower count evolves over time. Correlate growth spikes with specific videos or campaigns.' },
            { icon: '📥', title: 'Excel Export', desc: 'Download all your metrics as a formatted Excel file with totals, summaries, and per-video breakdowns.' },
          ].map((f) => (
            <div className="feature-card" key={f.title}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Metrics Preview ── */}
      <div className="metrics-section" id="metrics">
        <div className="metrics-inner">
          <div>
            <div className="section-tag">Live Data</div>
            <h2 className="section-title">Your metrics,<br />always up to date</h2>
            <p className="section-sub" style={{ marginBottom: '2rem' }}>
              MyTikStats reads directly from TikTok's official API using your account credentials. 
              Your data stays private — we only read, never post or modify anything.
            </p>
            <a href="#contact" className="btn-primary" style={{ display: 'inline-flex' }}>
              Connect Your Account →
            </a>
          </div>
          <div className="metrics-visual">
            <div className="metrics-visual-title">📊 Sample Account Overview</div>
            {[
              { icon: '👁', name: 'Total Views',    value: '2.4M',  change: '+12.4%' },
              { icon: '❤️', name: 'Total Likes',    value: '184K',  change: '+8.1%' },
              { icon: '💬', name: 'Comments',       value: '12.3K', change: '+21.3%' },
              { icon: '🔁', name: 'Shares',         value: '9.8K',  change: '+5.7%' },
              { icon: '👥', name: 'Followers',      value: '48.2K', change: '+3.2%' },
            ].map((m) => (
              <div className="metric-row" key={m.name}>
                <div className="metric-name">{m.icon} {m.name}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div className="metric-value">{m.value}</div>
                  <div className="metric-change">{m.change}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <section className="cta-section" id="contact">
        <h2>Ready to understand<br />your TikTok growth?</h2>
        <p>Connect your account in seconds using TikTok's official API.<br />No passwords stored. No posting on your behalf. Ever.</p>
        <a href="mailto:hello@mytikstats.com" className="btn-primary" style={{ display: 'inline-flex' }}>
          Request Early Access →
        </a>
        <p style={{ marginTop: '1.5rem', fontSize: '0.8rem', color: 'var(--text3)' }}>
          By using MyTikStats you agree to our{' '}
          <a href="/terms" style={{ color: 'var(--accent)' }}>Terms of Service</a>{' '}
          and{' '}
          <a href="/privacy" style={{ color: 'var(--accent)' }}>Privacy Policy</a>.
        </p>
      </section>

      <Footer />
    </>
  )
}
