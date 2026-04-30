import { Link } from 'react-router-dom';
import './Pricing.css';

const CORVETTE_SECTIONS = [
  {
    id: '1953-1955',
    years: '1953–1955',
    potMetal: false,
    parts: [
      { name: 'Front verticals', price: '$72 each' },
      { name: 'Front & rear inners', price: '$70 each' },
      { name: 'Front outers', price: '$85 each' },
      { name: 'Front & rear bullets', price: '$70 each' },
      { name: 'Rear center bumper', price: '$240' },
      { name: 'Rear verticals', price: '$72 each' },
      { name: 'Rear sides', price: '$96 each' },
      { name: 'Windshield posts', price: '$180 each' },
      { name: 'Headlight bezels', price: '$120 each' },
      { name: 'Grill center', price: '$240' },
      { name: 'Grill oval', price: '$960' },
    ],
  },
  {
    id: '1956-1957',
    years: '1956–1957',
    potMetal: false,
    parts: [
      { name: 'Taillight bezels', price: '$300 each' },
      { name: 'Front bumper pieces', price: '$120 each' },
      { name: 'Rear bumper ends', price: '$132 each' },
    ],
  },
  {
    id: '1958-1960',
    years: '1958–1960',
    potMetal: false,
    parts: [
      { name: 'Front bumpers', price: '$450 each' },
      { name: 'Rear bumpers', price: '$480 each' },
      { name: 'Rear turndowns', price: '$90 each' },
    ],
  },
  {
    id: '1961-1962',
    years: '1961–1962',
    potMetal: false,
    parts: [
      { name: 'Front bumpers', price: '$450 each' },
      { name: 'Rear bumpers', price: '$300 each' },
      { name: 'Rear license plate surround', price: '$222' },
    ],
  },
  {
    id: '1958-1962',
    years: '1958–1962',
    potMetal: false,
    parts: [
      { name: 'Front license plate guards', price: '$84 each' },
      { name: 'Front license plate backing plate', price: '$120' },
      { name: 'Front license plate lower bar', price: '$60' },
      { name: 'Grill center bar', price: '$180' },
    ],
  },
  {
    id: '1958-1962-pot',
    years: '1958–1962',
    potMetal: true,
    parts: [
      { name: 'Upper and lower grill surrounds', price: '$330 each' },
      { name: 'Grill teeth', price: '$108 each' },
      { name: 'Eyebrows', price: '$132 each' },
      { name: 'Headlight bezels', price: '$150 each' },
      { name: 'Windshield posts', price: '$222 each' },
      { name: 'Door posts', price: '$222 each' },
      { name: 'License plate light bezels', price: '$48 each' },
      { name: 'Exterior door handles w/ buttons', price: '$96 each' },
      { name: 'Trunk spears', price: '$330 each' },
      { name: 'Round tail light bezels', price: '$108 each' },
    ],
  },
  {
    id: '1963-1967',
    years: '1963–1967',
    potMetal: false,
    parts: [
      { name: 'Front bumpers', price: '$450 each' },
      { name: 'Rear bumpers', price: '$450 each' },
      { name: 'Window posts', price: '$240 each' },
      { name: 'Gas filler bezel', price: '$60' },
      { name: 'Front license plate cross bar', price: '$90' },
    ],
  },
  {
    id: '1968-1973',
    years: '1968–1973',
    potMetal: false,
    parts: [
      { name: 'Front bumper (one piece)', price: '$600' },
      { name: 'Front bumperettes', price: '$150 each' },
      { name: 'Rear bumpers', price: '$300 each' },
      { name: '3 pc aluminum side exhaust', price: '$690 each side' },
      { name: '4 pc aluminum side exhaust', price: '$462 each side' },
      { name: 'Grill halves', price: '$270 each' },
      { name: 'Air cleaner cover', price: '$270' },
    ],
  },
];

export default function Pricing() {
  return (
    <div className="pricing">

      {/* ── Section 1: Hero ───────────────────────────── */}
      <section className="pricing-hero">
        <p className="pricing-hero__eyebrow">Pricing</p>
        <h1 className="pricing-hero__title">Chrome Prices</h1>
        <p className="pricing-hero__subtitle">
          Corvette prices listed below — contact us for all other parts
        </p>
      </section>

      {/* ── Section 2: Gold Divider ───────────────────── */}
      <div className="gold-divider" />

      {/* ── Section 3: Notice Banner ──────────────────── */}
      <div className="pricing-notice">
        <span className="pricing-notice__line">⚠ All prices are subject to change without notice.</span>
        <span className="pricing-notice__line">Please be patient as we are constantly updating prices. For any part not listed, email us a photo or give us a call.</span>
      </div>

      {/* ── Section 4: Intro Text ─────────────────────── */}
      <div className="pricing-intro">
        <p className="pricing-intro__para">
          Below is our Corvette price list. If you do not see what you are looking for or cannot find a price, please give us a call or email us the part for which you would like an estimate.
        </p>
        <p className="pricing-intro__para">
          For any part not listed here, you can email us a picture or give us a call so we can at least give you a ballpark figure. Over the phone we can only give estimates for bumpers — everything else we need to see in person or at least see a photo.
        </p>
      </div>

      {/* ── Section 5: Corvette Prices ────────────────── */}
      <section className="pricing-corvette">
        <p className="pricing-section__eyebrow">Corvette Pricing</p>
        <h2 className="pricing-section__title">Corvette Chrome Prices</h2>
        <span className="pricing-section__rule" />

        <div className="pricing-table">
          {CORVETTE_SECTIONS.map((section) => (
            <div key={section.id} className="pricing-block">
              <div className={`pricing-block__header${section.potMetal ? ' pricing-block__header--pot' : ''}`}>
                <span className="pricing-block__year">{section.years}</span>
                {section.potMetal && (
                  <span className="pricing-block__pot-label">Pot Metal</span>
                )}
              </div>
              {section.parts.map((part, i) => (
                <div
                  key={part.name}
                  className={`pricing-row${i % 2 === 1 ? ' pricing-row--alt' : ''}`}
                >
                  <span className="pricing-row__name">{part.name}</span>
                  <span className="pricing-row__price">{part.price}</span>
                </div>
              ))}
            </div>
          ))}
          <div className="pricing-note-row">
            Mounting nut and stud replacement available on all bumpers at an additional cost of approximately $25+/- each.
          </div>
        </div>
      </section>

      {/* ── Section 6: Additional Notes ───────────────── */}
      <section className="pricing-notes">
        <div className="pricing-notes__cards">
          <div className="pricing-notes__card">
            <p className="pricing-notes__card-title">Stainless Trim Refinishing</p>
            <p className="pricing-notes__card-price">$25 – $50 per foot depending on width and condition</p>
          </div>
          <div className="pricing-notes__card">
            <p className="pricing-notes__card-title">Good to Know</p>
            <ul className="pricing-notes__list">
              <li>Minor dent and ding removal on all parts — no additional cost</li>
              <li>Broken, rusted, or rotted through steel and die cast/pot metal parts can be repaired at additional cost, determined on a part by part basis</li>
            </ul>
          </div>
          <div className="pricing-notes__card">
            <p className="pricing-notes__card-title">Stainless Steel</p>
            <p className="pricing-notes__card-body">
              We offer chrome plating or polish and buff only on stainless steel pieces for the same cost to you.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 7: Bumper Prices ──────────────────── */}
      <section className="pricing-bumper">
        <div className="pricing-bumper__inner">
          <div className="pricing-bumper__text">
            <p className="pricing-bumper__eyebrow">Full Size Bumpers</p>
            <h2 className="pricing-bumper__title">Bumper Pricing</h2>
            <p className="pricing-bumper__body">
              For pricing on full size bumpers, give us a call, send an email, or text us directly. We can usually provide an estimate over the phone for bumpers.
            </p>
            <div className="pricing-bumper__contacts">
              <a href="tel:7654789990" className="pricing-bumper__contact">📞 (765) 478-9990</a>
              <a href="mailto:chromeplater1@yahoo.com" className="pricing-bumper__contact">✉ chromeplater1@yahoo.com</a>
              <a href="sms:7655241027" className="pricing-bumper__contact">💬 Text: (765) 524-1027</a>
            </div>
          </div>
          <div className="pricing-bumper__photo">
            <img src="/images/our-work/VETTE.jpeg" alt="Early Corvette with chrome bright-work" className="pricing-bumper__photo-img" />
          </div>
        </div>
      </section>

      {/* ── Section 8: CTA ────────────────────────────── */}
      <section className="pricing-cta">
        <div className="pricing-cta__left">
          <p className="pricing-cta__title">Don't See What You Need?</p>
          <p className="pricing-cta__subtitle">
            Send us a photo or give us a call — we can give you a ballpark on almost anything.
          </p>
        </div>
        <Link to="/contact" className="pricing-cta__btn">Contact Us →</Link>
      </section>

    </div>
  );
}
