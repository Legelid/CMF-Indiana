import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import './Home.css'

const showcaseItems = [
  {
    id: 1,
    title: '1955 Pontiac Chieftain',
    description: 'Hood ornament restoration — stripped, polished, and triple chrome plated to show quality finish',
    before: '/images/before-after/Before1.jpg',
    after: '/images/before-after/After1.jpg',
  },
  {
    id: 2,
    title: 'C1 Corvette Bumper Restoration',
    description: 'Watch the full bumper repair and chrome restoration process on our YouTube channel',
    before: null,
    after: null,
    youtubeId: 'kC5awPBeVd4',
  },
  {
    id: 3,
    title: 'Chris Craft Vintage Boat Light',
    description: 'Vintage navigation light fully restored — oxidation removed and chrome plated to mirror finish',
    before: '/images/before-after/Before3.jpg',
    after: '/images/before-after/After3.jpg',
  },
]

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [selectedItem, setSelectedItem] = useState(null)
  const [videoSrc, setVideoSrc] = useState('')
  const iframeRef = useRef(null)

  useEffect(() => {
    const isMobile = () => window.innerWidth <= 768
    function handleScroll() {
      if (!isMobile()) setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!selectedItem) return
    function handleKey(e) {
      if (e.key === 'Escape') closeModal()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [selectedItem])

  function openModal(item) {
    setSelectedItem(item)
    if (item.youtubeId) {
      setVideoSrc(`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1`)
    }
  }

  function closeModal() {
    // Stop video by blanking src before unmounting
    setVideoSrc('')
    setSelectedItem(null)
  }

  return (
    <main className="home">
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero__photo">
          <img
            src="/images/homepage_car.jpg"
            alt="Chrome restoration work by CMF Indiana"
            className="hero__img"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
        </div>

        <div className="hero__text">
          <p className="hero__eyebrow">
            <span>Full Service Chrome Restoration</span>
            <span className="hero__eyebrow-line" />
          </p>

          <p className="hero__headline">
            Everything from bolts to bumpers — show quality, every time.
          </p>

          <p className="hero__lead">
            We are a full service chrome restoration shop focusing on custom and production triple plating and polishing services; everything from bolts to bumpers.
          </p>

          <ul className="hero__list">
            <li className="hero__list-item">We pride ourselves on our ability to restore the worst rotten and broken pieces to show quality, including pot metal pieces.</li>
            <li className="hero__list-item">Most of our business is in autos and motorcycles, but most anything made of metal is gladly accepted.</li>
            <li className="hero__list-item">We offer anything from plate-only to a high end, show chrome finish. We are well accustomed to restoring extremely rare and valuable pieces.</li>
          </ul>

          <hr className="hero__divider" />

          <div>
            <Link to="/contact" className="hero__btn">Contact Us →</Link>
            <p className="hero__helper">or call us at (765) 478-9990</p>
          </div>
        </div>
      </section>

      {/* ── Gold separator ── */}
      <div className="gold-separator" />

      {/* ── Work Showcase ── */}
      <section className="showcase">
        <div className="showcase__header">
          <span className="showcase__eyebrow">Our Work</span>
          <h2 className="showcase__title">See the Difference</h2>
          <p className="showcase__subtitle">Before &amp; after — the CMF difference</p>
          <span className="showcase__header-rule" />
        </div>

        <div className="showcase__grid">
          {showcaseItems.map((item) => (
            <div
              key={item.id}
              className="showcase__card"
              onClick={() => openModal(item)}
            >
              {item.youtubeId ? (
                /* YouTube card — video fills flex-1 area */
                <div className="showcase__youtube-wrap">
                  <iframe
                    src={`https://www.youtube.com/embed/${item.youtubeId}`}
                    title={item.title}
                    className="showcase__youtube-iframe"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <>
                  {/* Before half */}
                  <div className="showcase__half showcase__half--before">
                    {item.before ? (
                      <img src={item.before} alt={`Before — ${item.title}`} className="showcase__half-img" />
                    ) : (
                      <span className="showcase__placeholder-text">Coming Soon</span>
                    )}
                    <span className="showcase__label">BEFORE</span>
                  </div>
                  <div className="showcase__divider" />
                  {/* After half */}
                  <div className="showcase__half showcase__half--after">
                    {item.after ? (
                      <img src={item.after} alt={`After — ${item.title}`} className="showcase__half-img" />
                    ) : (
                      <span className="showcase__placeholder-text">Coming Soon</span>
                    )}
                    <span className="showcase__label showcase__label--after">AFTER</span>
                  </div>
                </>
              )}

              {/* Caption */}
              <div className="showcase__caption">
                <p className="showcase__caption-title">{item.title}</p>
                <p className="showcase__caption-desc">{item.description}</p>
              </div>

              {/* Hover overlay */}
              <div className="showcase__hover-overlay">
                <span className="showcase__hover-text">
                  {item.youtubeId ? 'Click to Watch →' : 'Click to View →'}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="showcase__cta">
          <Link to="/our-work" className="showcase__btn">View All Our Work →</Link>
        </div>
      </section>

      {/* ── Lightbox modal ── */}
      {selectedItem && (
        <div className="lightbox" onClick={closeModal}>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox__close" onClick={closeModal} aria-label="Close">✕</button>

            <div className="lightbox__header">
              <h2 className="lightbox__title">{selectedItem.title}</h2>
              <p className="lightbox__desc">{selectedItem.description}</p>
            </div>

            {selectedItem.youtubeId ? (
              <div className="lightbox__video-wrap">
                <iframe
                  ref={iframeRef}
                  src={videoSrc}
                  title={selectedItem.title}
                  className="lightbox__video-iframe"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="lightbox__photos">
                <div className="lightbox__panel">
                  {selectedItem.before ? (
                    <img src={selectedItem.before} alt="Before" className="lightbox__photo" />
                  ) : (
                    <div className="lightbox__photo-placeholder">Coming Soon</div>
                  )}
                  <span className="lightbox__photo-label lightbox__photo-label--left">BEFORE</span>
                </div>
                <div className="lightbox__panel">
                  {selectedItem.after ? (
                    <img src={selectedItem.after} alt="After" className="lightbox__photo" />
                  ) : (
                    <div className="lightbox__photo-placeholder">Coming Soon</div>
                  )}
                  <span className="lightbox__photo-label lightbox__photo-label--right">AFTER</span>
                </div>
              </div>
            )}

            <div className="lightbox__info">
              <div>
                <p className="lightbox__info-title">{selectedItem.title}</p>
                <p className="lightbox__info-desc">{selectedItem.description}</p>
              </div>
              <Link
                to="/our-work"
                className="lightbox__info-link"
                onClick={closeModal}
              >
                View All Our Work →
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
