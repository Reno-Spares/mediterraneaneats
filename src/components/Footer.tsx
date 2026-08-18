import { business } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <div className="footer-brand">
          <span className="brand-script">Mediterranean</span>
          <span className="brand-display">Food Truck</span>
          <p className="footer-tag">
            Launched {business.launched}. Proudly family owned. Invited all over
            the Central West.
          </p>
        </div>

        <div className="footer-cols">
          <div>
            <h3>Pages</h3>
            <ul>
              <li>
                <a href="#/">Home</a>
              </li>
              <li>
                <a href="#/food">Food</a>
              </li>
              <li>
                <a href="#/events">Events</a>
              </li>
              <li>
                <a href="#/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Bookings</h3>
            <ul>
              <li>{business.owner}</li>
              <li>
                <a href={business.phoneHref}>{business.phone}</a>
              </li>
              <li>
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="shell footer-base">
        <p>
          &copy; {new Date().getFullYear()} {business.name} &middot;{' '}
          {business.region}
        </p>
        <p>{business.award}</p>
      </div>
    </footer>
  )
}
