import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    const data = Object.fromEntries(new FormData(e.target))
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (json.success) setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="contact">

      {/* ── Section 1: Page Hero ── */}
      <section className="contact-hero">
        <p className="contact-hero__eyebrow">Get In Touch</p>
        <h1 className="contact-hero__title">Contact Us</h1>
        <p className="contact-hero__subtitle">Drop off in person or reach out for a quote before hauling your parts to us</p>
      </section>

      {/* ── Section 2: Gold Divider ── */}
      <div className="contact-gold-divider" />

      {/* ── Section 3: Main Contact Section ── */}
      <section className="contact-main">
        <div className="contact-main__inner">

          {/* Left — Form */}
          <div className="contact-form-col">
            <p className="contact-col__label">Send Us a Message</p>
            <span className="contact-col__rule" />

            {submitted ? (
              <div className="contact-success">Thanks! We will be in touch soon.</div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                {/* Replace with actual Web3Forms access key from web3forms.com */}
                <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY" />

                <div className="contact-field">
                  <label className="contact-field__label" htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="contact-field__input"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label className="contact-field__label" htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="contact-field__input"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label className="contact-field__label" htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="contact-field__input"
                  />
                  <span className="contact-field__note">Optional</span>
                </div>

                <div className="contact-field">
                  <label className="contact-field__label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="contact-field__input contact-field__textarea"
                    required
                  />
                </div>

                <button type="submit" className="contact-form__btn" disabled={submitting}>
                  {submitting ? 'Sending…' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>

          {/* Right — Info */}
          <div className="contact-info-col">
            <p className="contact-col__label">Our Information</p>
            <span className="contact-col__rule" />

            <div className="contact-info-block">
              <p className="contact-info-block__label">Visit Us</p>
              <p className="contact-info-block__text">
                508 South Green St<br />
                Cambridge City, IN 47327
              </p>
            </div>

            <div className="contact-info-block">
              <p className="contact-info-block__label">Call or Text Us</p>
              <a href="tel:7654789990" className="contact-info-block__phone">(765) 478-9990</a>
              <a href="sms:7655241027" className="contact-info-block__sms">Text Only: (765) 524-1027</a>
            </div>

            <div className="contact-info-block">
              <p className="contact-info-block__label">Email Us</p>
              <a href="mailto:chromeplater1@yahoo.com" className="contact-info-block__email">
                chromeplater1@yahoo.com
              </a>
              <p className="contact-info-block__note">
                Please include photos with size references for the most accurate quote
              </p>
            </div>

            <div className="contact-info-block contact-info-block--last">
              <p className="contact-info-block__label">Follow Us</p>
              <a
                href="https://www.facebook.com/CustomMetalFinishingIndiana/"
                target="_blank"
                rel="noreferrer"
                className="contact-info-block__email"
              >
                Custom Metal Finishing Indiana on Facebook
              </a>
              <p className="contact-info-block__note">
                We post photos of finished work and you can contact us via Messenger
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── Section 4: Hours ── */}
      <section className="contact-hours">
        <p className="contact-hours__eyebrow">When To Find Us</p>
        <h2 className="contact-hours__title">Weekly Hours</h2>
        <span className="contact-hours__rule" />

        <div className="contact-hours__grid">
          <div className="contact-hours__block">
            <p className="contact-hours__day">Monday – Thursday</p>
            <p className="contact-hours__time">7:00 AM – 5:00 PM</p>
          </div>
          <div className="contact-hours__block">
            <p className="contact-hours__day">Friday</p>
            <p className="contact-hours__time">7:00 AM – 12:00 PM</p>
          </div>
          <div className="contact-hours__block">
            <p className="contact-hours__day">Friday PM &amp; Saturday</p>
            <p className="contact-hours__time">By Appointment</p>
          </div>
          <div className="contact-hours__block">
            <p className="contact-hours__day">Sunday</p>
            <p className="contact-hours__time contact-hours__time--closed">Closed</p>
          </div>
        </div>
      </section>

      {/* ── Section 5: Important Notice ── */}
      <div className="contact-notice">
        <span className="contact-notice__icon">⚠</span>
        <p className="contact-notice__text">
          We no longer accept personal or business checks on final pickup of your order. Sorry for the inconvenience.
        </p>
      </div>

    </main>
  )
}
