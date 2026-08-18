import flyer from '../assets/flyer.jpeg'
import { attended, business, menu, upcoming } from '../data'

const highlights = [
  {
    title: 'Charcoal chicken & falafel',
    body: 'Wraps and rolls built the Lebanese way — marinated meat, house falafel, garlic sauce and salad in warm bread.',
  },
  {
    title: 'Show food done properly',
    body: 'Dagwood dogs, potato twisties and hot chips straight from the fryer, for the kids and the grown-ups who never grew out of it.',
  },
  {
    title: 'Dips made every morning',
    body: 'Hummus, baba-ghanouj, tabouli and fattoush prepped fresh before the truck rolls out.',
  },
]

export default function Home() {
  const nextUp = upcoming.slice(0, 3)
  const totalEvents = attended.length + upcoming.length

  return (
    <>
      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="shell hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">{business.region} &middot; Family owned</p>
            <h1 className="hero-title">
              <span className="script">Mediterranean</span>
              <span className="display">Food</span>
              <span className="script script-lg">Truck</span>
            </h1>
            <p className="hero-lede">
              Lebanese street food and showground favourites, cooked fresh on
              site. Catch us at the rodeos, shows, festivals and markets right
              across the Central West — or book the truck for your own event.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#/food">
                See the menu
              </a>
              <a className="btn btn-ghost" href="#/contact">
                Book the truck
              </a>
            </div>
            <dl className="hero-stats">
              <div>
                <dt>Events</dt>
                <dd>{totalEvents}+</dd>
              </div>
              <div>
                <dt>On the road since</dt>
                <dd>Jan 2026</dd>
              </div>
              <div>
                <dt>Menu items</dt>
                <dd>{menu.reduce((n, s) => n + s.items.length, 0)}</dd>
              </div>
            </dl>
          </div>

          <figure className="hero-figure">
            <img src={flyer} alt={`${business.name} menu flyer`} />
            <figcaption>Our 2026 season flyer</figcaption>
          </figure>
        </div>
      </section>

      <section className="award-strip">
        <div className="shell award-inner">
          <span className="award-badge" aria-hidden="true">
            &#127942;
          </span>
          <p>
            <strong>2026 Finalist</strong> &mdash; Outstanding New Business,
            Oberon Business Awards
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <h2 className="section-title">What we cook</h2>
          <div className="card-grid">
            {highlights.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <p className="section-more">
            <a href="#/food">View the full menu &rarr;</a>
          </p>
        </div>
      </section>

      <section className="section section-navy">
        <div className="shell">
          <h2 className="section-title">Where to find us next</h2>
          <ul className="next-list">
            {nextUp.map((event) => (
              <li key={event.name}>
                <span className="next-month">{event.month}</span>
                <span className="next-body">
                  <strong>{event.name}</strong>
                  <span>{event.place}</span>
                </span>
                <span className="next-when">{event.when}</span>
              </li>
            ))}
          </ul>
          <p className="section-more">
            <a href="#/events">All events, attended and upcoming &rarr;</a>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell cta">
          <div>
            <h2 className="section-title">Got an event coming up?</h2>
            <p>
              Shows, markets, race days, birthdays, work functions and school
              fetes — we travel across Bathurst, Orange, Oberon, Lithgow,
              Blayney and everywhere between.
            </p>
          </div>
          <div className="cta-actions">
            <a className="btn btn-primary" href={business.phoneHref}>
              Call {business.phone}
            </a>
            <a className="btn btn-ghost" href={`mailto:${business.email}`}>
              Email us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
