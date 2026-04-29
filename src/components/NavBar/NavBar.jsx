import { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './NavBar.css'

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/powder-coating', label: 'Powder Coating' },
  { to: '/our-work', label: 'Our Work' },
  { to: '/pricing', label: 'Chrome Prices' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/events', label: 'Current Events' },
]

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const overlayRef = useRef(null)

  useEffect(() => {
    if (!menuOpen) return
    function handleClick(e) {
      if (overlayRef.current && !overlayRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [menuOpen])

  return (
    <header className="navbar">
      {/* Top bar — logo + company name */}
      <div className="navbar__topbar">
        <Link to="/" className="navbar__brand">
          <div className="navbar__logo-wrapper">
            <img src="/Logo.png" alt="CMF Logo" className="navbar__logo" />
          </div>
          <div className="navbar__brand-text">
            <span className="navbar__site-name">Custom Metal Finishing Indiana LLC</span>
            <span className="navbar__site-tagline">Your complete chrome specialists!</span>
          </div>
        </Link>
      </div>

      {/* Nav bar — links */}
      <nav className="navbar__navbar">
        <div className="navbar__links">
          {NAV_LINKS.map(({ to, label, end }, i) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                [
                  'navbar__link',
                  isActive ? 'navbar__link--active' : '',
                  i < NAV_LINKS.length - 1 ? 'navbar__link--sep' : '',
                ].filter(Boolean).join(' ')
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <button
          className="navbar__hamburger"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <div />
          <div />
          <div />
        </button>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="navbar__overlay" ref={overlayRef}>
          <nav className="navbar__overlay-links">
            {NAV_LINKS.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  isActive
                    ? 'navbar__overlay-link navbar__overlay-link--active'
                    : 'navbar__overlay-link'
                }
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
