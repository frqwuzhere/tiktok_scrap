import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">MyTik<span>Stats</span></div>
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/#features">Features</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
        <div className="footer-copy">© {new Date().getFullYear()} MyTikStats. All rights reserved.</div>
      </div>
    </footer>
  )
}
