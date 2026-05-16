import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/industries', label: 'Industries' },
  { path: '/security', label: 'Security & AI' },
  { path: '/testimonials', label: 'Testimonials' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/contact', label: 'Contact' },
]

const allSearchItems = [
  ...navLinks,
  { path: '/services', label: 'Web Development' },
  { path: '/services', label: 'Mobile App Development' },
  { path: '/services', label: 'AI Integration' },
  { path: '/services', label: 'Cybersecurity Solutions' },
  { path: '/skills', label: 'React.js' },
  { path: '/skills', label: 'Flutter' },
  { path: '/skills', label: 'Node.js' },
  { path: '/skills', label: 'Python' },
  { path: '/projects', label: 'Project Catalog' },
  { path: '/contact', label: 'WhatsApp Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const location = useLocation()
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setSearchOpen(false)
    setSearchQuery('')
  }, [location])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const filteredSearch = allSearchItems.filter(item =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner container">
          <Link to="/" className="navbar-logo">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-text">MAX</span>
            <span className="logo-accent">DEV</span>
            <span className="logo-bracket">/&gt;</span>
          </Link>

          <div className="navbar-links">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div className="nav-indicator" layoutId="nav-indicator" />
                )}
              </Link>
            ))}
          </div>

          <div className="navbar-actions">
            <button
              className="search-toggle"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>
            <button
              className={`hamburger ${mobileOpen ? 'open' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            className="search-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              className="search-modal"
              ref={searchRef}
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="search-input-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
                <input
                  type="text"
                  placeholder="Search pages, services, skills..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <kbd>ESC</kbd>
              </div>
              {searchQuery && (
                <div className="search-results">
                  {filteredSearch.length > 0 ? filteredSearch.map((item, i) => (
                    <Link
                      key={i}
                      to={item.path}
                      className="search-result-item"
                      onClick={() => setSearchOpen(false)}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                      {item.label}
                    </Link>
                  )) : (
                    <div className="search-no-results">No results found</div>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="mobile-menu-inner">
              <div className="mobile-menu-header">
                <span className="font-mono" style={{ color: 'var(--primary)', fontSize: '0.8rem' }}>// NAVIGATION</span>
              </div>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="mobile-nav-number font-mono">0{i + 1}</span>
                    <span>{link.label}</span>
                  </Link>
                </motion.div>
              ))}
              <div className="mobile-menu-cta">
                <a href="https://wa.me/254746093533" className="btn btn-whatsapp" style={{ width: '100%' }}>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
