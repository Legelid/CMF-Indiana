import './SiteFooter.css';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <p className="site-footer__copy">
        &copy; 2026 Custom Metal Finishing Indiana LLC. All rights reserved.
      </p>
      <p className="site-footer__credit">
        Designed &amp; developed by{' '}
        <a
          href="https://andrewrobertcollins.com"
          target="_blank"
          rel="noopener noreferrer"
          className="site-footer__credit-link"
        >
          Coldev Enterprises
        </a>
        {' '}in collaboration with Jacob Canfield
      </p>
    </footer>
  );
}
