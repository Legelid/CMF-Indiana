import { useState, useEffect, useCallback, useRef } from 'react';
import { tBucketPhotos, notableBuilds, beforeAfterPairs, galleryPhotos } from '../../data/ourwork';
import './OurWork.css';

const devillePhotos = [
  '/images/our-work/deville/488544688_1171975634721366_1956677559633708844_n.jpg',
  '/images/our-work/deville/488894605_1171973471388249_4007462879788411672_n.jpg',
  '/images/our-work/deville/489400178_1171973668054896_4959126679969028646_n.jpg',
];

export default function OurWork() {
  const [lb, setLb] = useState(null);
  const touchStartX = useRef(null);

  const closeLb = useCallback(() => setLb(null), []);

  const lbPrev = useCallback(() => {
    setLb(prev => {
      if (!prev) return null;
      if (prev.mode === 'gallery') {
        return { ...prev, photoIdx: (prev.photoIdx - 1 + galleryPhotos.length) % galleryPhotos.length };
      }
      if (prev.mode === 'tbucket') {
        return { ...prev, photoIdx: (prev.photoIdx - 1 + tBucketPhotos.length) % tBucketPhotos.length };
      }
      if (prev.mode === 'deville') {
        return { ...prev, photoIdx: (prev.photoIdx - 1 + devillePhotos.length) % devillePhotos.length };
      }
      return prev;
    });
  }, []);

  const lbNext = useCallback(() => {
    setLb(prev => {
      if (!prev) return null;
      if (prev.mode === 'gallery') {
        return { ...prev, photoIdx: (prev.photoIdx + 1) % galleryPhotos.length };
      }
      if (prev.mode === 'tbucket') {
        return { ...prev, photoIdx: (prev.photoIdx + 1) % tBucketPhotos.length };
      }
      if (prev.mode === 'deville') {
        return { ...prev, photoIdx: (prev.photoIdx + 1) % devillePhotos.length };
      }
      return prev;
    });
  }, []);

  useEffect(() => {
    if (!lb) return;
    function handler(e) {
      if (e.key === 'Escape') closeLb();
      if (e.key === 'ArrowLeft') lbPrev();
      if (e.key === 'ArrowRight') lbNext();
    }
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lb, closeLb, lbPrev, lbNext]);

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      delta < 0 ? lbNext() : lbPrev();
    }
    touchStartX.current = null;
  }

  return (
    <div className="our-work">

      {/* ── Section 1: Hero ───────────────────────────── */}
      <section className="ow-hero">
        <p className="ow-hero__eyebrow">The Work</p>
        <h1 className="ow-hero__title">Our Work</h1>
        <p className="ow-hero__subtitle">
          Show quality on every piece — from bolts to full restorations
        </p>
      </section>

      {/* ── Section 2: Gold Divider ───────────────────── */}
      <div className="gold-divider" />

      {/* ── Section 3A: T-Bucket Spotlight ───────────── */}
      <section className="ow-tbucket">
        <div className="ow-tbucket__inner">
          <div className="ow-tbucket__header">
            <p className="ow-section__eyebrow ow-section__eyebrow--light">Featured Build</p>
            <h2 className="ow-section__title ow-section__title--light">Award-Winning T-Bucket</h2>
            <span className="ow-section__rule" />
          </div>
          <div className="tbucket-photos">
            <div className="tbucket-main">
              <img src={tBucketPhotos[0]} alt="T-Bucket main" />
            </div>
            <div className="tbucket-side">
              <img src={tBucketPhotos[1]} alt="T-Bucket detail" />
              <img src={tBucketPhotos[2]} alt="T-Bucket detail" />
            </div>
          </div>
          {tBucketPhotos.length > 3 && (
            <div className="tbucket-extra">
              {tBucketPhotos.slice(3).map((photo, i) => (
                <img key={i} src={photo} alt={`T-Bucket ${i + 3}`} />
              ))}
            </div>
          )}
          <p className="ow-tbucket__caption">
            This gorgeous T-Bucket is "Enginuity" — built over the course of six years by Dustin Cooper.

              Dustin had this to say - "Custom Metal Finishing LLC Indiana has done every single piece of chrome (and gold) on this car over the build time, besides the heads, intake and valve covers. It wasn't cheap, but the quality and service is worth it."
          </p>
        </div>
      </section>

      <div className="gold-divider" />

      {/* ── Section 3B: Notable Builds ────────────────── */}
      <section className="ow-notable">
        <p className="ow-section__eyebrow">Notable Builds</p>
        <h2 className="ow-section__title">Cars We Worked On</h2>
        <span className="ow-section__rule" />
        {notableBuilds.map((build) => (
          <div key={build.id} className={`ow-notable__row ow-notable__row--${build.photoSide}`}>
            <div className="ow-notable__photo-col">
              <img src={build.photo} alt={build.photoAlt} className="ow-notable__img" />
            </div>
            <div className="ow-notable__text-col">
              <span className="ow-notable__subtitle">{build.subtitle}</span>
              <h3 className="ow-notable__title">{build.title}</h3>
              <p className="ow-notable__desc">{build.description}</p>
              {build.link && (
                <a href={build.link} target="_blank" rel="noopener noreferrer" className="ow-notable__link">
                  {build.linkText}
                </a>
              )}
            </div>
          </div>
        ))}

        {/* ── 1957 Cadillac DeVille Row ─────────────────── */}
        <div className="ow-notable__row">
          <div
            className="ow-notable__photo-col ow-notable__photo-col--deville"
            onClick={() => setLb({ mode: 'deville', photoIdx: 0 })}
          >
            <img
              src={devillePhotos[0]}
              alt="1957 Cadillac DeVille Convertible"
              className="ow-notable__img ow-notable__img--deville"
            />
            <div className="ow-deville__click-note">Click photo to view all images</div>
          </div>
          <div className="ow-notable__text-col">
            <span className="ow-notable__subtitle">1957 Cadillac DeVille Convertible</span>
            <h3 className="ow-notable__title">57 Cadillac DeVille</h3>
            <p className="ow-notable__desc">
              This absolute beauty of a 1957 Cadillac DeVille convertible was recently completed by Darren Nickleson and his team at Indy Street Rods &amp; Classics. We are beyond proud to have our name on the bright-work!
            </p>
            <a
              href="https://www.indystreetrodsandclassics.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="ow-notable__link"
            >
              Visit Indy Street Rods &amp; Classics →
            </a>
            <a
              href="https://www.facebook.com/darren.nickleson"
              target="_blank"
              rel="noopener noreferrer"
              className="ow-notable__link"
            >
              Darren Nickleson on Facebook →
            </a>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* ── Section 4: Before & After ─────────────────── */}
      <section className="ow-pairs">
        <p className="ow-section__eyebrow ow-section__eyebrow--light">The Transformation</p>
        <h2 className="ow-section__title ow-section__title--light">Before &amp; After</h2>
        <span className="ow-section__rule" />
        <div className="ow-pairs__stack">
          {beforeAfterPairs.map((pair, pairIdx) => (
            <div key={pair.id} className="ow-comparison">
              <div
                className="ow-comparison__row"
                onClick={() => setLb({ mode: 'pair', pairIdx })}
              >
                <div className="ow-comparison__panel">
                  <img src={pair.before} alt={`${pair.label} — Before`} className="ow-comparison__img" />
                  <span className="ow-comparison__label ow-comparison__label--before">Before</span>
                </div>
                <div className="ow-comparison__panel">
                  <img src={pair.after} alt={`${pair.label} — After`} className="ow-comparison__img" />
                  <span className="ow-comparison__label ow-comparison__label--after">After</span>
                </div>
              </div>
              <div className="ow-comparison__caption">
                <p className="ow-comparison__caption-title">{pair.label}</p>
                <span className="ow-comparison__caption-tag">Chrome Restoration</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 5: Gallery ────────────────────────── */}
      <section className="ow-gallery">
        <p className="ow-section__eyebrow">Gallery</p>
        <h2 className="ow-section__title">Our Work</h2>
        <span className="ow-section__rule" />
        <div className="ow-gallery__grid">
          {galleryPhotos.map((photo, photoIdx) => (
            <div
              key={photo.id}
              className="ow-gallery__card"
              onClick={() => setLb({ mode: 'gallery', photoIdx })}
            >
              <img src={photo.src} alt={photo.label} className="ow-gallery__img" />
              <p className="ow-gallery__label">{photo.label}</p>
              <div className="ow-gallery__divider" />
            </div>
          ))}
        </div>
      </section>

      {/* ── Lightbox ──────────────────────────────────── */}
      {lb && (
        <div
          className="ow-lb"
          onClick={closeLb}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {lb.mode === 'gallery' ? (
            <div className="ow-lb__gallery-card" onClick={e => e.stopPropagation()}>
              <button className="ow-lb__gallery-close" onClick={closeLb} aria-label="Close">
                &times;
              </button>
              <img
                src={galleryPhotos[lb.photoIdx].src}
                alt={galleryPhotos[lb.photoIdx].label}
                className="ow-lb__gallery-img"
              />
              <h3 className="ow-lb__gallery-label">{galleryPhotos[lb.photoIdx].label}</h3>
              <p className="ow-lb__gallery-desc">{galleryPhotos[lb.photoIdx].description}</p>
              <button className="ow-lb__gallery-prev" onClick={e => { e.stopPropagation(); lbPrev(); }} aria-label="Previous">
                &#8592;
              </button>
              <button className="ow-lb__gallery-next" onClick={e => { e.stopPropagation(); lbNext(); }} aria-label="Next">
                &#8594;
              </button>
            </div>
          ) : (
          <div className="ow-lb__box" onClick={e => e.stopPropagation()}>
            <button className="ow-lb__close" onClick={closeLb} aria-label="Close">
              &times;
            </button>

            {lb.mode === 'tbucket' && (
              <>
                <img
                  src={tBucketPhotos[lb.photoIdx]}
                  alt="Award-Winning T-Bucket"
                  className="ow-lb__img"
                />
                <button className="ow-lb__prev" onClick={e => { e.stopPropagation(); lbPrev(); }}>
                  &#8592;
                </button>
                <button className="ow-lb__next" onClick={e => { e.stopPropagation(); lbNext(); }}>
                  &#8594;
                </button>
              </>
            )}

            {lb.mode === 'deville' && (
              <>
                <img
                  src={devillePhotos[lb.photoIdx]}
                  alt="1957 Cadillac DeVille Convertible"
                  className="ow-lb__img"
                />
                <button className="ow-lb__prev" onClick={e => { e.stopPropagation(); lbPrev(); }}>
                  &#8592;
                </button>
                <button className="ow-lb__next" onClick={e => { e.stopPropagation(); lbNext(); }}>
                  &#8594;
                </button>
              </>
            )}

            {lb.mode === 'pair' && (
              <div className="ow-lb__pair">
                <div className="ow-lb__pair-half">
                  <img
                    src={beforeAfterPairs[lb.pairIdx].before}
                    alt="Before"
                    className="ow-lb__pair-img"
                  />
                  <span className="ow-lb__pair-label ow-lb__pair-label--before">Before</span>
                </div>
                <div className="ow-lb__pair-half">
                  <img
                    src={beforeAfterPairs[lb.pairIdx].after}
                    alt="After"
                    className="ow-lb__pair-img"
                  />
                  <span className="ow-lb__pair-label ow-lb__pair-label--after">After</span>
                </div>
              </div>
            )}
          </div>
          )}
        </div>
      )}

    </div>
  );
}
