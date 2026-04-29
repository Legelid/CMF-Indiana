import { Link } from 'react-router-dom'
import './Footer.css'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/powder-coating', label: 'Powder Coating' },
  { to: '/our-work', label: 'Our Work' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/events', label: 'Events' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__columns">
        <div className="footer__col">
          <img src="/Logo.png" alt="CMF Logo" className="footer__logo" />
          <p className="footer__address">
            508 South Green St<br />
            Cambridge City, IN 47327
          </p>
          <a href="tel:7654789990" className="footer__contact-link">(765) 478-9990</a>
        </div>

        <div className="footer__col footer__col--center">
          <nav className="footer__nav">
            {NAV_LINKS.map(({ to, label }) => (
              <Link key={to} to={to} className="footer__link">{label}</Link>
            ))}
          </nav>
        </div>

        <div className="footer__col footer__col--right">
          <a href="mailto:chromeplater1@yahoo.com" className="footer__contact-link">
            chromeplater1@yahoo.com
          </a>
          <a href="tel:7655241027" className="footer__contact-link">(765) 524-1027</a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__contact-link"
          >
            Facebook
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <span>&copy; {new Date().getFullYear()} Custom Metal Finishing Indiana LLC. All rights reserved.</span>
        <span className="footer__notice">We no longer accept personal or business checks on final pickup.</span>
      </div>
    </footer>
  )
}
