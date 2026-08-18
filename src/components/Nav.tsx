import { business } from '../data'

const links = [
  { hash: '#/', label: 'Home' },
  { hash: '#/food', label: 'Food' },
  { hash: '#/events', label: 'Events' },
  { hash: '#/contact', label: 'Contact' },
]

type Props = {
  route: string
  open: boolean
  onToggle: () => void
  onNavigate: () => void
}

export default function Nav({ route, open, onToggle, onNavigate }: Props) {
  return (
    <header className="topbar">
      <div className="topbar-inner shell">
        <a className="brand" href="#/" onClick={onNavigate}>
          <span className="brand-script">Mediterranean</span>
          <span className="brand-display">Food Truck</span>
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={onToggle}
        >
          <span className="nav-toggle-bars" aria-hidden="true" />
          {open ? 'Close' : 'Menu'}
        </button>

        <nav id="site-nav" className={open ? 'site-nav is-open' : 'site-nav'}>
          <ul>
            {links.map((link) => (
              <li key={link.hash}>
                <a
                  href={link.hash}
                  className={route === link.hash ? 'is-active' : undefined}
                  aria-current={route === link.hash ? 'page' : undefined}
                  onClick={onNavigate}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="nav-call" href={business.phoneHref}>
            {business.phone}
          </a>
        </nav>
      </div>
    </header>
  )
}
