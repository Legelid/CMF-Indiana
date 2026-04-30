import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Events.css';

const SHOW_PHOTOS = [
  { src: '/images/events/hot-rod-coupe.jpg', alt: 'Traditional hot rod at a car show' },
  { src: '/images/events/black-cadillac.jpg', alt: 'Black Cadillac with chrome trim at a car show' },
  { src: '/images/events/tin-restoration-engine.jpg.png', alt: 'Classic engine bay with chrome valve covers and trim' },
  { src: '/images/events/greg-goergens-rupp-mini-bike.jpg.png', alt: "Greg Goergens' purple Rupp mini-bike with chrome detailing" },
];

export default function Events() {
  const [activeLb, setActiveLb] = useState(null);

  useEffect(() => {
    if (activeLb === null) return;
    const onKey = (e) => { if (e.key === 'Escape') setActiveLb(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeLb]);

  return (
    <div className="events">

      {/* ── Section 1: Hero ───────────────────────── */}
      <section className="ev-hero">
        <p className="ev-hero__eyebrow">Find Us</p>
        <h1 className="ev-hero__title">Current Events</h1>
        <p className="ev-hero__subtitle">
          Meet us in person — ask questions, drop off work right at the show
        </p>
      </section>

      {/* ── Section 2: Gold Divider ───────────────── */}
      <div className="gold-divider" />

      {/* ── Section 3: Upcoming Shows ─────────────── */}
      <section className="ev-shows">
        <p className="ev-section__eyebrow">Upcoming Shows</p>
        <h2 className="ev-section__title">Where to Find Us</h2>
        <span className="ev-section__rule" />

        <p className="ev-shows__intro">
          There are certain shows we are vendors at annually where you can meet us, ask any
          questions you may have, and even drop off work right at the show.
        </p>

        <div className="ev-card">
          <span className="ev-card__label">Featured Annual Show</span>
          <h3 className="ev-card__name">Ducktail Run</h3>
          <span className="ev-card__date">September 24 – 27, 2026</span>
          <span className="ev-card__rule" />
          <p className="ev-card__desc">
            Stop by our booth — ask questions, see our work up close, and drop off parts right at
            the show.
          </p>
          <a
            href="https://www.ducktailrun.com"
            target="_blank"
            rel="noreferrer"
            className="ev-card__btn"
          >
            Visit Ducktailrun.com →
          </a>
        </div>
      </section>

      {/* ── Section 4: Gold Divider ───────────────── */}
      <div className="gold-divider" />

      {/* ── Section 5: Looking to Expand ──────────── */}
      <section className="ev-expand">
        <div className="ev-expand__inner">

          <div className="ev-expand__text">
            <p className="ev-expand__eyebrow">
              Growing Our Reach
              <span className="ev-expand__eyebrow-line" />
            </p>
            <h2 className="ev-expand__title">Looking to Expand</h2>
            <p className="ev-expand__body">
              At this time Ducktail Run is the only show we set up at regularly. We are looking
              into expanding and setting up at shows out of state to expand our customer base. We
              are currently strongly considering some classic boat shows and British Car shows.
            </p>
            <p className="ev-expand__body">
              Have a show recommendation? Let us know! We would love to hear from you.
            </p>
            <span className="ev-expand__rule" />
            <div className="ev-expand__contacts">
              <a href="mailto:chromeplater1@yahoo.com" className="ev-expand__contact">✉ ChromePlater1@Yahoo.com</a>
              <a href="sms:7655241027" className="ev-expand__contact">💬 Text: (765) 524-1027</a>
              <a href="https://www.facebook.com/CustomMetalFinishingIndiana/" target="_blank" rel="noreferrer" className="ev-expand__contact">Facebook Messenger: Custom Metal Finishing IN, LLC</a>
              <a href="tel:7654789990" className="ev-expand__contact">📞 Call: (765) 478-9990</a>
            </div>
          </div>

          <div className="ev-photos__grid">
            {SHOW_PHOTOS.map((photo, i) =>
              photo.src ? (
                <img
                  key={i}
                  src={photo.src}
                  alt={photo.alt}
                  className="ev-photos__img"
                  onClick={() => setActiveLb(i)}
                />
              ) : (
                <div key={i} className="ev-photos__placeholder">
                  {photo.label}
                </div>
              )
            )}
          </div>

        </div>
      </section>

      {/* ── Section 6: CTA ────────────────────────── */}
      <section className="ev-cta">
        <div className="ev-cta__left">
          <p className="ev-cta__title">See You at the Show!</p>
          <p className="ev-cta__subtitle">
            Drop off your parts right at the event — no need to drive to Cambridge City.
          </p>
        </div>
        <Link to="/contact" className="ev-cta__btn">Contact Us →</Link>
      </section>

      {/* ── Lightbox ──────────────────────────────── */}
      {activeLb !== null && SHOW_PHOTOS[activeLb]?.src && (
        <div className="ev-lb" onClick={() => setActiveLb(null)}>
          <div className="ev-lb__box" onClick={(e) => e.stopPropagation()}>
            <button className="ev-lb__close" onClick={() => setActiveLb(null)}>×</button>
            <img
              src={SHOW_PHOTOS[activeLb].src}
              alt={SHOW_PHOTOS[activeLb].alt}
              className="ev-lb__img"
            />
          </div>
        </div>
      )}

    </div>
  );
}
