import { useEffect, useState, type ReactElement } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Food from './pages/Food'
import Events from './pages/Events'
import Contact from './pages/Contact'
import './App.css'

const routes: Record<string, () => ReactElement> = {
  '#/': Home,
  '#/food': Food,
  '#/events': Events,
  '#/contact': Contact,
}

function currentRoute() {
  const hash = window.location.hash
  return hash in routes ? hash : '#/'
}

function App() {
  const [route, setRoute] = useState(currentRoute)
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    const onHashChange = () => {
      setRoute(currentRoute())
      setNavOpen(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const Page = routes[route]

  return (
    <>
      {/* Focuses the main region without touching the hash, which drives routing. */}
      <button
        type="button"
        className="skip-link"
        onClick={() => document.getElementById('main')?.focus()}
      >
        Skip to content
      </button>
      <Nav
        route={route}
        open={navOpen}
        onToggle={() => setNavOpen((v) => !v)}
        onNavigate={() => setNavOpen(false)}
      />
      <main id="main" tabIndex={-1}>
        <Page />
      </main>
      <Footer />
    </>
  )
}

export default App
