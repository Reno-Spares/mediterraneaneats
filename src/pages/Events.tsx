import { useState } from 'react'
import { attended, upcoming, type EventEntry } from '../data'

type Tab = 'upcoming' | 'attended'

function EventList({ events, past }: { events: EventEntry[]; past: boolean }) {
  return (
    <ul className="event-list">
      {events.map((event) => (
        <li className={past ? 'event past' : 'event'} key={event.name}>
          <div className="event-date" aria-hidden="true">
            <span className="event-month">{event.month}</span>
            <span className="event-year">2026</span>
          </div>
          <div className="event-body">
            <h3>{event.name}</h3>
            <p className="event-place">{event.place}</p>
            {event.note && <p className="event-note">{event.note}</p>}
          </div>
          <div className="event-meta">
            <span className={past ? 'pill pill-past' : 'pill pill-next'}>
              {past ? 'Attended' : 'Upcoming'}
            </span>
            <span className="event-when">{event.when}</span>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default function Events() {
  const [tab, setTab] = useState<Tab>('upcoming')

  return (
    <>
      <section className="page-head">
        <div className="shell">
          <p className="eyebrow">On the road</p>
          <h1 className="page-title">
            Events we have <span className="script-inline">worked</span>
          </h1>
          <p className="page-lede">
            Since launching in January 2026 we have been invited to{' '}
            {attended.length + upcoming.length}+ events across the Central West
            — rodeos, agricultural shows, festivals, markets and race days.
            Here is where we have been and where we are heading.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="tabs" role="tablist" aria-label="Event timeline">
            <button
              type="button"
              role="tab"
              id="tab-upcoming"
              aria-selected={tab === 'upcoming'}
              aria-controls="panel-upcoming"
              className={tab === 'upcoming' ? 'tab is-active' : 'tab'}
              onClick={() => setTab('upcoming')}
            >
              Upcoming
              <span className="tab-count">{upcoming.length}</span>
            </button>
            <button
              type="button"
              role="tab"
              id="tab-attended"
              aria-selected={tab === 'attended'}
              aria-controls="panel-attended"
              className={tab === 'attended' ? 'tab is-active' : 'tab'}
              onClick={() => setTab('attended')}
            >
              Attended
              <span className="tab-count">{attended.length}</span>
            </button>
          </div>

          {tab === 'upcoming' ? (
            <div
              role="tabpanel"
              id="panel-upcoming"
              aria-labelledby="tab-upcoming"
            >
              <EventList events={upcoming} past={false} />
            </div>
          ) : (
            <div
              role="tabpanel"
              id="panel-attended"
              aria-labelledby="tab-attended"
            >
              <EventList events={attended} past />
            </div>
          )}
        </div>
      </section>

      <section className="section section-navy">
        <div className="shell cta">
          <div>
            <h2 className="section-title">Want us at your event?</h2>
            <p>
              We take bookings for shows, markets, sporting fixtures, school
              fetes and private functions right across the Central West.
            </p>
          </div>
          <div className="cta-actions">
            <a className="btn btn-primary" href="#/contact">
              Send an enquiry
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
