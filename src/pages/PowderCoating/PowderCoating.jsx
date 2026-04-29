import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './PowderCoating.css';

const featurePhoto = '/images/powder-coating/Josh_powdercoatin2.jpg';

const galleryPhotos = [
  { src: '/images/powder-coating/Chair_legs.jpg', alt: 'Powder coated chair legs' },
  { src: '/images/powder-coating/Motorcycle_frame.jpg', alt: 'Motorcycle frame powder coated' },
  { src: '/images/powder-coating/Powder-Coating~~element4.jpeg', alt: 'Powder coating finish detail' },
  { src: '/images/powder-coating/Powder_coat_Production.jpg', alt: 'Production powder coating run' },
  { src: '/images/powder-coating/Viper_Rims.jpg', alt: 'Viper rims powder coated' },
];

export default function PowderCoating() {
  const [lb, setLb] = useState(null);
  const closeLb = useCallback(() => setLb(null), []);

  useEffect(() => {
    if (!lb) return;
    function handler(e) { if (e.key === 'Escape') closeLb(); }
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lb, closeLb]);

  return (
    <div className="pc">

      {/* ── Section 1: Hero ───────────────────────────── */}
      <section className="pc-hero">
        <p className="pc-hero__eyebrow">Finishing Services</p>
        <h1 className="pc-hero__title">Powder Coating</h1>
        <p className="pc-hero__subtitle">
          Custom and production powder coating — any color, any finish
        </p>
      </section>

      {/* ── Section 2: Gold Divider ───────────────────── */}
      <div className="gold-divider" />

      {/* ── Section 3: Feature Introduction ──────────── */}
      <section className="pc-intro">
        <div className="pc-intro__inner">
          <div className="pc-intro__photo-col">
            <img
              src={featurePhoto}
              alt="Jacob spraying rims in the powder coating shop"
              className="pc-intro__photo"
            />
          </div>
          <div className="pc-intro__text-col">
            <h2 className="pc-intro__title">
              We Now Offer Custom and Production Powder Coating!
            </h2>
            <ul className="pc-intro__list">
              <li className="pc-intro__item">
                State of the art pre-treatment system to ensure proper adhesion of the powder that will last
              </li>
              <li className="pc-intro__item">
                All work is completed in our industrial size oven
              </li>
              <li className="pc-intro__item">
                Available in many different colors and finishes to suit your needs
              </li>
              <li className="pc-intro__item">
                All custom powder ordered from{' '}
                <a
                  href="https://www.prismaticpowders.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pc-intro__ext-link"
                >
                  Prismatic Powders
                </a>
                {' '}— we can offer any finish they have, just tell us what you are looking for!
              </li>
              <li className="pc-intro__item">
                Currently offering introductory rates for initial purchase orders
              </li>
            </ul>
            <span className="pc-intro__rule" />
            <p className="pc-intro__cta-text">
              For an estimate, give us a call or send us an email
            </p>
            <Link to="/contact" className="pc-intro__btn">Contact Us →</Link>
          </div>
        </div>
      </section>

      {/* ── Section 4: Gold Divider ───────────────────── */}
      <div className="gold-divider" />

      {/* ── Section 5: Gallery ────────────────────────── */}
      <section className="pc-gallery">
        <p className="pc-gallery__eyebrow">Our Work</p>
        <h2 className="pc-gallery__title">Powder Coating Gallery</h2>
        <span className="pc-gallery__rule" />
        <div className="pc-gallery__grid">
          {galleryPhotos.map((photo, i) => (
            <img
              key={i}
              src={photo.src}
              alt={photo.alt}
              className="pc-gallery__img"
              onClick={() => setLb(photo)}
            />
          ))}
        </div>
      </section>

      {/* ── Section 6: CTA ────────────────────────────── */}
      <section className="pc-cta">
        <div className="pc-cta__left">
          <p className="pc-cta__title">Ready to Get a Quote?</p>
          <p className="pc-cta__subtitle">
            Call, email, or text us — we will get back to you as soon as possible
          </p>
        </div>
        <Link to="/contact" className="pc-cta__btn">Contact Us →</Link>
      </section>

      {/* ── Lightbox ──────────────────────────────────── */}
      {lb && (
        <div className="pc-lb" onClick={closeLb}>
          <div className="pc-lb__box" onClick={e => e.stopPropagation()}>
            <button className="pc-lb__close" onClick={closeLb} aria-label="Close">&times;</button>
            <img src={lb.src} alt={lb.alt} className="pc-lb__img" />
          </div>
        </div>
      )}

    </div>
  );
}
