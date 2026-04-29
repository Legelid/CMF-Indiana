import { useState, useEffect, useCallback, useRef } from 'react';
import { tBucketPhotos, notableBuilds, beforeAfterPairs, galleryPhotos } from '../../data/ourwork';
import './OurWork.css';

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
            This gorgeous T-Bucket is "Enginuity" — built over the course of six years by Dustin Cooper. Custom Metal Finishing LLC Indiana has done every single piece of chrome (and gold) on this car over the build time, besides the heads, intake and valve covers. It wasn't cheap, but the quality and service is worth it.
          </p>
        </div>
      </section>

      <div className="gold-divider" />

      {/* ── Section 3B: Notable Builds ────────────────── */}
      <section className="ow-notable">
        <p className="ow-section__eyebrow">Notable Builds</p>
        <h2 className="ow-section__title">Cars We Have Worked On</h2>
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
        <h2 className="ow-section__title">More of Our Work</h2>
        <span className="ow-section__rule" />
        <div className="ow-gallery__grid">
          {galleryPhotos.map((photo, photoIdx) => (
            <div
              key={photoIdx}
              className="ow-gallery__item"
              onClick={() => setLb({ mode: 'gallery', photoIdx })}
            >
              <img src={photo.src} alt={photo.alt} className="ow-gallery__img" />
              <div className="ow-gallery__overlay" />
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
          <div className="ow-lb__box" onClick={e => e.stopPropagation()}>
            <button className="ow-lb__close" onClick={closeLb} aria-label="Close">
              &times;
            </button>

            {lb.mode === 'gallery' && (
              <>
                <img
                  src={galleryPhotos[lb.photoIdx].src}
                  alt={galleryPhotos[lb.photoIdx].alt}
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
        </div>
      )}

    </div>
  );
}
