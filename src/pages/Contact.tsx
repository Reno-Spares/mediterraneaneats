import { useState, type ChangeEvent, type FormEvent } from 'react'
import { business } from '../data'

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  eventDate: '',
  location: '',
  guests: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [sent, setSent] = useState(false)

  const update = (field: keyof typeof emptyForm) => (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  // No backend on this site, so the enquiry is handed to the user's mail app.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Event date: ${form.eventDate || 'TBC'}`,
      `Location: ${form.location || 'TBC'}`,
      `Approx. guests: ${form.guests || 'TBC'}`,
      '',
      form.message,
    ].join('\n')

    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(
      `Food truck enquiry — ${form.name || 'website'}`,
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <>
      <section className="page-head">
        <div className="shell">
          <p className="eyebrow">Get in touch</p>
          <h1 className="page-title">
            Book the <span className="script-inline">truck</span>
          </h1>
          <p className="page-lede">
            Tell us the date, the place and roughly how many people you are
            feeding, and we will come back to you with availability and a
            quote. For anything urgent, ring {business.owner} directly.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell contact-grid">
          <div className="contact-details">
            <h2 className="section-title">Contact details</h2>
            <ul className="detail-list">
              <li>
                <span className="detail-label">Owner</span>
                <span className="detail-value">{business.owner}</span>
              </li>
              <li>
                <span className="detail-label">Phone</span>
                <a className="detail-value" href={business.phoneHref}>
                  {business.phone}
                </a>
              </li>
              <li>
                <span className="detail-label">Email</span>
                <a
                  className="detail-value detail-email"
                  href={`mailto:${business.email}`}
                >
                  {business.email}
                </a>
              </li>
              <li>
                <span className="detail-label">Service area</span>
                <span className="detail-value">
                  Bathurst, Orange, Oberon, Lithgow, Blayney, Millthorpe,
                  Canowindra and surrounds
                </span>
              </li>
              <li>
                <span className="detail-label">Trading since</span>
                <span className="detail-value">{business.launched}</span>
              </li>
            </ul>

            <div className="award-card">
              <span aria-hidden="true">&#127942;</span>
              <p>{business.award}</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2 className="section-title">Enquiry form</h2>

            <div className="field">
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                required
                value={form.name}
                onChange={update('name')}
              />
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={update('phone')}
                />
              </div>
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="eventDate">Event date</label>
                <input
                  id="eventDate"
                  type="date"
                  value={form.eventDate}
                  onChange={update('eventDate')}
                />
              </div>
              <div className="field">
                <label htmlFor="guests">Approx. guests</label>
                <input
                  id="guests"
                  inputMode="numeric"
                  value={form.guests}
                  onChange={update('guests')}
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="location">Location</label>
              <input
                id="location"
                placeholder="Town or venue"
                value={form.location}
                onChange={update('location')}
              />
            </div>

            <div className="field">
              <label htmlFor="message">What are you planning?</label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={update('message')}
              />
            </div>

            <button className="btn btn-primary btn-block" type="submit">
              Send enquiry
            </button>
            <p className="form-note" role="status">
              {sent
                ? 'Your email app should have opened with the enquiry ready to send. If it did not, email us directly at ' +
                  business.email
                : 'Submitting opens your email app with the details filled in.'}
            </p>
          </form>
        </div>
      </section>
    </>
  )
}
