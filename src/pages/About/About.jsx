import './About.css';

const TEAM = [
  {
    name: 'Jake',
    role: 'Owner & Operations',
    bio: "Jim's youngest son, Jake has taken over ownership and operations at Custom Metal Finishing. He handles the day to day operations, writes up orders, and ensures the company stays up to date with all regulations.",
  },
  {
    name: 'Ben',
    role: 'Senior Polisher',
    bio: 'Ben started at the shop with Jake in 2011 as a full time polisher. He has since learned enough about the entire process to fill in almost any area as needed. He and Jake are the ones you will meet at any car or boat shows!',
  },
  {
    name: 'Matt',
    role: 'Polisher & Stripping Dept.',
    bio: 'Matt has been a full time polisher since 2020 and was in charge of the stripping and blasting department for about a year prior. He is a staple in our polishing department.',
  },
  {
    name: 'Jacob',
    role: 'Plating Department',
    bio: 'Jacob primarily runs the plating department and handles most of the day to day operations as it pertains to plating. He also strips parts of their original plating, sandblasts them, and gets them ready for the polishers.',
  },
  {
    name: 'Belinda',
    role: 'Front Office — Mornings',
    bio: 'Belinda works the front office in the mornings and takes care of final inspection, waxing, and wrapping of finished parts.',
  },
  {
    name: 'Morgan',
    role: 'Front Office — Afternoons',
    bio: 'Morgan works the front office in the afternoon and handles final inspection, waxing, and wrapping of finished parts.',
  },
  {
    name: 'Christy',
    role: 'Bookkeeping & Taxes',
    bio: 'Christy previously managed the front office in the afternoons but has since moved. She now handles the bookkeeping and taxes for CMF remotely.',
  },
];

export default function About() {
  return (
    <div className="about">

      {/* ── Section 1: Hero ───────────────────────── */}
      <section className="about-hero">
        <p className="about-hero__eyebrow">Our Story</p>
        <h1 className="about-hero__title">About Us</h1>
        <p className="about-hero__subtitle">Family owned and operated since 2004</p>
      </section>

      {/* ── Section 2: Gold Divider ───────────────── */}
      <div className="gold-divider" />

      {/* ── Section 3: Jim's Legacy ───────────────── */}
      <section className="about-legacy">
        <div className="about-legacy__inner">
          <div className="about-legacy__photo-col">
            <img
              src="/images/about/jim-polishing.jpg"
              alt="Jim — Founder of Custom Metal Finishing"
              className="about-legacy__img"
            />
            <p className="about-legacy__caption">
              Jim — Owner, Founder, and Master of Polishing &amp; Plating
            </p>
          </div>
          <div className="about-legacy__story-col">
            <p className="about-legacy__eyebrow">
              Our Founder
              <span className="about-legacy__eyebrow-line" />
            </p>
            <h2 className="about-legacy__title">
              Built on Craft. Carried Forward with Pride.
            </h2>
            <p className="about-legacy__body">
              Jim was the owner, founder, and master of polishing and plating at Custom Metal
              Finishing. He began his custom plating career in Muskegon, Michigan with his brother
              in 1994, and together they built Custom Metal Finishing from the ground up.
            </p>
            <p className="about-legacy__body">
              In 2004, Jim moved to Indiana and built the new Custom Metal Finishing IN, LLC with
              his eldest son James II. In 2016, Jim, James II, and his youngest son Jake completed
              a laborious move to the much larger and upgraded facility in Cambridge City that we
              call home today.
            </p>
            <p className="about-legacy__body">
              Jim very unfortunately and unexpectedly passed away in 2021. His legacy lives on in
              every piece that leaves this shop. Jake has since taken over full ownership and
              operations, carrying forward everything his father built.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 4: Gold Divider ───────────────── */}
      <div className="gold-divider" />

      {/* ── Section 5: Meet the Team ──────────────── */}
      <section className="about-team">
        <p className="about-section__eyebrow">The People Behind the Work</p>
        <h2 className="about-section__title">Meet the Team</h2>
        <span className="about-section__rule" />
        <div className="about-roster">
          {TEAM.map(({ name, role, bio }) => (
            <div key={name} className="about-roster__row">
              <div className="about-roster__name-col">
                <p className="about-roster__name">{name}</p>
              </div>
              <div className="about-roster__detail-col">
                <span className="about-roster__role">{role}</span>
                <p className="about-roster__bio">{bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 6: Team Photo ────────────────── */}
      <section className="about-team-photo">
        <div className="about-team-photo__inner">
          <img src="/images/about/team-2016.jpg" alt="The CMF Team — Cambridge City 2016" className="about-team-photo__img" />
          <p className="about-team-photo__caption">
            The Custom Metal Finishing team in October 2016, following our first day at the
            Cambridge City location after being in Hagerstown for 12 years
          </p>
        </div>
      </section>

      {/* ── Section 7: Shop Photos ───────────────── */}
      <section className="about-shop">
        <p className="about-section__eyebrow about-section__eyebrow--light">In the Shop</p>
        <h2 className="about-section__title about-section__title--light">The CMF Team</h2>
        <span className="about-section__rule" />
        <div className="about-shop__row">
          <img src="/images/about/jake-ben.png" alt="Jake and Ben at a car show" className="about-shop__photo" />
          <img src="/images/about/josh-grill.jpg" alt="Josh with a restored grill piece" className="about-shop__photo" />
          <img src="/images/about/jake-polishing2.jpg" alt="Jake polishing in the shop" className="about-shop__photo" />
        </div>
      </section>

    </div>
  );
}
