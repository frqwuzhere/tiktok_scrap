import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">
        MyTik<span>Stats</span>
      </Link>
      <ul className="nav-links">
        <li><Link href="/#features">Features</Link></li>
        <li><Link href="/#metrics">Metrics</Link></li>
        <li><Link href="/terms">Terms</Link></li>
        <li><Link href="/privacy">Privacy</Link></li>
        <li><Link href="/#contact" className="nav-cta">Get Started</Link></li>
      </ul>
    </nav>
  )
}
