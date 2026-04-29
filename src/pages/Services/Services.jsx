import { Link } from 'react-router-dom'
import './Services.css'

const PLATING_SERVICES = [
  { title: 'Copper Plating',                                    desc: 'Base layer plating for adhesion and conductivity' },
  { title: 'Nickel Plating',                                    desc: 'Bright or satin finish, excellent corrosion resistance' },
  { title: 'Chrome Plating',                                    desc: 'Triple chrome plating — our signature show quality finish' },
  { title: 'Gold Plating',                                      desc: 'Decorative gold plating for custom and specialty pieces' },
  { title: 'Aluminum Polishing & Plating',                      desc: 'Polishing and plating of aluminum parts to mirror finish' },
  { title: 'Steel & Cast Iron Restoration, Repair & Plating',   desc: 'Full restoration, repair, and plating of ferrous metals' },
  { title: 'Die-Cast / Pot Metal Restoration, Repair & Plating',desc: 'Specialists in restoring broken and corroded pot metal pieces' },
  { title: 'Stainless Steel Dent Repair, Plating & Mirror Polish',desc: 'Dent repair, plating, and mirror polishing of stainless' },
  { title: 'Steel Restoration, Repair & Plating',               desc: 'Structural repair and restoration before plating' },
]

const STRIP_METHODS = [
  {
    title: 'Chemical Immersion',
    desc: 'Parts are submerged in chemical solution to safely dissolve existing plating and surface contaminants',
  },
  {
    title: 'Electrolytic Stripping',
    desc: 'Electrical current reverses the plating process, precisely removing existing chrome or nickel without damaging the base metal',
  },
  {
    title: 'Media Blasting',
    desc: 'Abrasive blasting removes rust, paint, and corrosion from surfaces that require mechanical preparation before plating',
  },
]

export default function Services() {
  return (
    <main className="services">

      {/* ── Section 1: Page Hero ── */}
      <section className="svc-hero">
        <p className="svc-hero__eyebrow">What We Offer</p>
        <h1 className="svc-hero__title">Our Services</h1>
        <p className="svc-hero__subtitle">Metal Stripping, Polishing, Plating &amp; Powder Coating</p>
      </section>

      {/* ── Section 2: Golden Divider ── */}
      <div className="gold-divider" />

      {/* ── Section 2B: Feature Intro ── */}
      <section className="svc-intro">
        <div className="svc-intro__inner">
          <div className="svc-intro__photo-col">
            <img
              src="/images/services/Indy_Street_Rods_Caddy3.jpg"
              alt="Custom chrome-plated Cadillac by CMF Indiana"
              className="svc-intro__photo"
            />
          </div>
          <div className="svc-intro__text-col">
            <h2 className="svc-intro__title">Complete Metal Finishing Services</h2>
            <p className="svc-intro__body">
              We offer a variety of finishes on custom or production orders specific to your needs — from a single bolt to a full production run.
            </p>
            <span className="svc-intro__rule" />
            <p className="svc-intro__note">
              View our full list of services below or contact us with any questions
            </p>
            <Link to="/contact" className="svc-intro__btn">Contact Us →</Link>
          </div>
        </div>
      </section>

      {/* ── Section 3: Plating & Finishing Services ── */}
      <section className="svc-plating">
        <p className="svc-section__eyebrow">Plating &amp; Finishing</p>
        <h2 className="svc-section__title">Our Services Include</h2>
        <span className="svc-section__rule" />

        <div className="svc-plating__grid">
          {PLATING_SERVICES.map((svc) => (
            <div key={svc.title} className="svc-card">
              <h3 className="svc-card__title">{svc.title}</h3>
              <p className="svc-card__desc">{svc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 4: Stripping Methods ── */}
      <section className="svc-strip">
        <p className="svc-section__eyebrow svc-section__eyebrow--light">Preparation</p>
        <h2 className="svc-section__title svc-section__title--light">Stripping Methods Available</h2>
        <span className="svc-section__rule" />
        <p className="svc-strip__subtitle">Stripping of paint, corrosion, rust, and previous plating on any metal</p>

        <div className="svc-strip__grid">
          {STRIP_METHODS.map((method) => (
            <div key={method.title} className="svc-strip__card">
              <h3 className="svc-strip__card-title">{method.title}</h3>
              <p className="svc-strip__card-desc">{method.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 5: Powder Coating CTA Banner ── */}
      <section className="svc-powder">
        <div className="svc-powder__left">
          <h2 className="svc-powder__title">Powder Coating Now Available!</h2>
          <p className="svc-powder__subtitle">Custom and production powder coating in hundreds of colors and finishes</p>
        </div>
        <Link to="/powder-coating" className="svc-powder__btn">Learn More →</Link>
      </section>

      {/* ── Section 6: Quote CTA ── */}
      <section className="svc-quote">
        <div className="svc-quote__inner">
          <h2 className="svc-quote__title">Have Questions or Need a Quote?</h2>
          <p className="svc-quote__body">
            If you have any questions about what we offer, or would like a quote, feel free to send us an email or give us a call during our business hours. For parts not listed here we need to see the piece in person or at minimum receive photos with size references.
          </p>
          <div className="svc-quote__buttons">
            <Link to="/contact" className="svc-quote__btn-primary">Contact Us →</Link>
            <a href="tel:7654789990" className="svc-quote__btn-outline">Call Us: (765) 478-9990</a>
          </div>
        </div>
      </section>

    </main>
  )
}
