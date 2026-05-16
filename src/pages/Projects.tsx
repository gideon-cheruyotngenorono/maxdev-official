import { useState, useMemo } from 'react'
import PageWrapper from '../components/PageWrapper'
import AnimatedSection from '../components/AnimatedSection'
import './Projects.css'

const projectCategories = ['All', 'E-Commerce', 'Business', 'Entertainment', 'Education', 'Landing Page']

interface Project {
  id: number
  title: string
  emoji: string
  category: string
  tech: string[]
  desc: string
  liveUrl: string
  priceUsd: number
  buttonLabel?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Chuka Wholesalers – E-Commerce System',
    emoji: '🛒',
    category: 'E-Commerce',
    tech: ['React', 'Node.js', 'MongoDB', 'Vercel'],
    desc: 'A full-scale online retail and wholesale e-commerce platform that allows users to browse products, view categories, and place orders. Built with a scalable architecture, modern UI, and responsive design optimized for performance and user experience.',
    liveUrl: 'https://chukawholesalers.vercel.app/',
    priceUsd: 90,
  },
  {
    id: 2,
    title: 'Business Solution Platform',
    emoji: '📊',
    category: 'Business',
    tech: ['React', 'Vite', 'Chart.js', 'TypeScript'],
    desc: 'A digital business management system designed to help users track profits, losses, and financial performance. It features a clean dashboard interface for business analytics and data organization.',
    liveUrl: 'https://business-solution-seven.vercel.app/index.html',
    priceUsd: 75,
  },
  {
    id: 3,
    title: 'Mitai Delight – Landing Page',
    emoji: '🍪',
    category: 'Landing Page',
    tech: ['React', 'Vite', 'Framer Motion', 'CSS3'],
    desc: 'A modern Swahili snack landing page built for branding and product marketing. It focuses on smooth UI transitions, responsive design, and visually appealing product presentation.',
    liveUrl: 'https://mitai-delight.vercel.app/',
    priceUsd: 45,
  },
  {
    id: 4,
    title: 'Happy Birthday Programmer Website',
    emoji: '🎂',
    category: 'Entertainment',
    tech: ['React', 'Vite', 'GSAP', 'Three.js'],
    desc: 'An interactive celebration website designed for personalized birthday experiences with animations, storytelling UI, and creative visual effects.',
    liveUrl: 'https://rono-birthday.vercel.app/',
    priceUsd: 35,
  },
  {
    id: 5,
    title: 'MaxMovies Streaming Platform',
    emoji: '🎥',
    category: 'Entertainment',
    tech: ['Vite', 'React', 'TypeScript', 'Secure CDN', 'Protected Servers'],
    desc: 'A modern entertainment streaming platform powered by Vite and React with channel navigation, embedded media, encrypted video delivery, massive cloud storage, and DRM-protected content servers for seamless HD streaming.',
    liveUrl: 'https://maxmovies-254.vercel.app/channels.html',
    priceUsd: 99,
  },
  {
    id: 6,
    title: 'MaxMovies App Installation Page',
    emoji: '📲',
    category: 'Entertainment',
    tech: ['Vite', 'React', 'PWA', 'Service Workers'],
    desc: 'A dedicated installation page for the MaxMovies AI app built with Vite and React. Features auto-update mechanisms, offline-first architecture, and seamless PWA install flow.',
    liveUrl: 'https://maxmovies-254.vercel.app/install.html',
    priceUsd: 30,
    buttonLabel: 'Install App',
  },
  {
    id: 7,
    title: 'Criminology Hub – Education Platform',
    emoji: '🎓',
    category: 'Education',
    tech: ['React', 'Firebase', 'Real-time Chat', 'Cloud Storage'],
    desc: 'An online learning platform where students can upload resources, chat, and collaborate in real time. It includes educational content sharing and community learning features.',
    liveUrl: 'https://criminologyhub.vercel.app/',
    priceUsd: 95,
  },
  {
    id: 8,
    title: 'E-Commerce Demo – Sofas Store',
    emoji: '🛍',
    category: 'E-Commerce',
    tech: ['React', 'Vite', 'TypeScript', 'Responsive'],
    desc: 'A sample e-commerce platform showcasing product browsing, shopping flow, and modern UI design for online retail systems.',
    liveUrl: 'https://e-commerce-alpha-seven-86.vercel.app/',
    priceUsd: 60,
  },
  {
    id: 9,
    title: 'Ticketing System',
    emoji: '🎟',
    category: 'Business',
    tech: ['React', 'Vite', 'Node.js', 'Booking Logic'],
    desc: 'A booking system designed for managing event tickets, reservations, and user-friendly booking workflows.',
    liveUrl: 'https://ticketingsample.vercel.app/',
    priceUsd: 70,
  },
  {
    id: 10,
    title: 'Birthday Event Website',
    emoji: '🎉',
    category: 'Entertainment',
    tech: ['React', 'Vite', 'GSAP', 'Animations'],
    desc: 'A creative event-based website for birthday celebrations with animations, visuals, and interactive UI components.',
    liveUrl: 'https://birthdaywebsite-seven.vercel.app/',
    priceUsd: 40,
  },
  {
    id: 11,
    title: 'Bonus Entertainment Platform',
    emoji: '🎁',
    category: 'Entertainment',
    tech: ['Vite', 'React', 'TypeScript', 'Secure Servers', 'Cloud Storage'],
    desc: 'A streaming-style entertainment platform powered by Vite with encrypted media delivery, massive protected cloud storage, and a modern UI for browsing and accessing premium content.',
    liveUrl: 'https://maxmovies-254.vercel.app/',
    priceUsd: 85,
  },
]

/* ── Currency data ── */
const currencyRates: Record<string, { code: string; symbol: string; rate: number }> = {
  kenya:     { code: 'KES', symbol: 'KSh', rate: 130 },
  tanzania:  { code: 'TZS', symbol: 'TSh', rate: 2500 },
  uganda:    { code: 'UGX', symbol: 'USh', rate: 3700 },
  nigeria:   { code: 'NGN', symbol: '₦',  rate: 1550 },
  'south africa': { code: 'ZAR', symbol: 'R', rate: 18 },
  ghana:     { code: 'GHS', symbol: 'GH₵', rate: 15 },
  ethiopia:  { code: 'ETB', symbol: 'Br',  rate: 57 },
  rwanda:    { code: 'RWF', symbol: 'FRw', rate: 1300 },
  egypt:     { code: 'EGP', symbol: 'E£',  rate: 50 },
  india:     { code: 'INR', symbol: '₹',   rate: 83 },
  uk:        { code: 'GBP', symbol: '£',   rate: 0.79 },
  'united kingdom': { code: 'GBP', symbol: '£', rate: 0.79 },
  usa:       { code: 'USD', symbol: '$',   rate: 1 },
  'united states': { code: 'USD', symbol: '$', rate: 1 },
  canada:    { code: 'CAD', symbol: 'C$',  rate: 1.36 },
  australia: { code: 'AUD', symbol: 'A$',  rate: 1.53 },
  germany:   { code: 'EUR', symbol: '€',   rate: 0.92 },
  france:    { code: 'EUR', symbol: '€',   rate: 0.92 },
  italy:     { code: 'EUR', symbol: '€',   rate: 0.92 },
  brazil:    { code: 'BRL', symbol: 'R$',  rate: 5.0 },
  japan:     { code: 'JPY', symbol: '¥',   rate: 155 },
  china:     { code: 'CNY', symbol: '¥',   rate: 7.2 },
  somalia:   { code: 'SOS', symbol: 'Sh',  rate: 571 },
  congo:     { code: 'CDF', symbol: 'FC',  rate: 2750 },
  zambia:    { code: 'ZMW', symbol: 'ZK',  rate: 26 },
  malawi:    { code: 'MWK', symbol: 'MK',  rate: 1700 },
  mozambique:{ code: 'MZN', symbol: 'MT',  rate: 64 },
  botswana:  { code: 'BWP', symbol: 'P',   rate: 13.5 },
}

const defaultCurrencies = [
  { code: 'KES', symbol: 'KSh', rate: 130,  label: '🇰🇪 Kenya (KES)' },
  { code: 'TZS', symbol: 'TSh', rate: 2500, label: '🇹🇿 Tanzania (TZS)' },
  { code: 'UGX', symbol: 'USh', rate: 3700, label: '🇺🇬 Uganda (UGX)' },
]

function formatNumber(n: number): string {
  return n.toLocaleString('en-US', { maximumFractionDigits: 0 })
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [countryInput, setCountryInput] = useState('')
  const [customCurrency, setCustomCurrency] = useState<{ code: string; symbol: string; rate: number } | null>(null)

  const filtered = projects.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory
    const matchSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchCat && matchSearch
  })

  const handleCountryLookup = () => {
    const key = countryInput.trim().toLowerCase()
    const found = currencyRates[key]
    if (found) {
      setCustomCurrency(found)
    } else {
      setCustomCurrency(null)
      alert(`Sorry, we don't have rates for "${countryInput}" yet. Try Kenya, Tanzania, Uganda, Nigeria, South Africa, Ghana, USA, UK, India, etc.`)
    }
  }

  const displayCurrencies = useMemo(() => {
    const list = [...defaultCurrencies]
    if (customCurrency && !list.find(c => c.code === customCurrency.code)) {
      list.push({ ...customCurrency, label: `🌍 ${countryInput} (${customCurrency.code})` })
    }
    return list
  }, [customCurrency, countryInput])

  return (
    <PageWrapper>
      {/* ══════ PROJECTS SECTION ══════ */}
      <section className="section" style={{ paddingTop: 120 }}>
        <div className="mesh-gradient mesh-gradient-1" />
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="label font-mono">// DEMO PROJECT SHOWCASE</span>
              <h1>Featured <span className="text-gradient">Projects</span></h1>
              <p>These are <strong style={{ color: 'var(--primary)' }}>demo & sample projects</strong> showcasing MAX DEV's capabilities. Each one is a taste of what's possible. For full-scale enterprise systems, custom platforms, and massive production builds — <strong style={{ color: 'var(--secondary)' }}>DM me directly</strong>.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="project-filters">
              <div className="project-search">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                <input
                  type="text"
                  placeholder="Search projects or technologies..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="project-cats">
                {projectCategories.map(cat => (
                  <button
                    key={cat}
                    className={`skill-tab ${activeCategory === cat ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <div className="projects-grid">
            {filtered.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 0.05}>
                <div className="project-card glass-card">
                  <div className="pc-preview">
                    <div className="pc-preview-placeholder">
                      <span className="font-mono" style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>DEMO #{String(project.id).padStart(2, '0')}</span>
                      <span style={{ fontSize: '2.5rem', marginTop: 8 }}>{project.emoji}</span>
                    </div>
                    <div className="pc-category badge badge-primary">{project.category}</div>
                    <div className="pc-demo-tag">DEMO</div>
                  </div>
                  <div className="pc-body">
                    <h3>{project.title}</h3>
                    <p className="pc-desc">{project.desc}</p>
                    <div className="pc-tech">
                      {project.tech.map(t => (
                        <span key={t} className="badge badge-secondary">{t}</span>
                      ))}
                    </div>
                    <div className="pc-footer">
                      <span className="pc-price font-mono">${formatNumber(project.priceUsd)}</span>
                      <div className="pc-actions">
                        <a
                          href={project.liveUrl}
                          className="btn btn-primary"
                          style={{ padding: '8px 16px', fontSize: '0.8rem' }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.buttonLabel || 'Live Demo'}
                        </a>
                        <a
                          href="https://wa.me/254746093533"
                          className="btn btn-ghost"
                          style={{ padding: '8px 16px', fontSize: '0.8rem' }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Purchase
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: 60, color: 'var(--text-muted)' }}>
              <p>No projects found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      <div className="section-divider" />

      {/* ══════ PRICING & CURRENCY SECTION ══════ */}
      <section className="section">
        <div className="mesh-gradient mesh-gradient-2" />
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="label font-mono">// DEMO PRICING IN YOUR CURRENCY</span>
              <h2>Demo Project <span className="text-gradient">Pricing</span></h2>
              <p>All demo projects are priced <strong style={{ color: 'var(--primary)' }}>under $100 USD</strong>. These are sample builds — perfect for learning or small use-cases. For full-scale, enterprise-grade systems with custom backends, protected servers, and massive storage — <strong style={{ color: 'var(--secondary)' }}>DM me for a custom quote</strong>.</p>
            </div>
          </AnimatedSection>

          {/* Country lookup */}
          <AnimatedSection>
            <div className="currency-lookup glass-card">
              <h3>🌍 Check Price in Your Currency</h3>
              <p style={{ marginBottom: 20, fontSize: '0.9rem' }}>Type your country name to see all project prices converted to your local currency.</p>
              <div className="currency-input-row">
                <input
                  type="text"
                  placeholder="e.g. Kenya, Tanzania, Uganda, Nigeria, USA…"
                  value={countryInput}
                  onChange={e => setCountryInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleCountryLookup()}
                />
                <button className="btn btn-primary" onClick={handleCountryLookup}>
                  Convert
                </button>
              </div>
            </div>
          </AnimatedSection>

          {/* Default currency tables */}
          <AnimatedSection>
            <div className="currency-tables">
              {displayCurrencies.map(cur => (
                <div key={cur.code + cur.label} className="currency-table glass-card">
                  <h4>{cur.label}</h4>
                  <div className="ct-scroll">
                    <table>
                      <thead>
                        <tr>
                          <th>Project</th>
                          <th>USD</th>
                          <th>{cur.code}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {projects.map(p => (
                          <tr key={p.id}>
                            <td>
                              <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">
                                {p.emoji} {p.title}
                              </a>
                            </td>
                            <td className="font-mono">${formatNumber(p.priceUsd)}</td>
                            <td className="font-mono ct-local">{cur.symbol} {formatNumber(p.priceUsd * cur.rate)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="projects-note glass-card" style={{ padding: 32, textAlign: 'center', marginTop: 40 }}>
              <h3 style={{ marginBottom: 12, fontSize: '1.2rem' }}>🚀 Want Something Bigger?</h3>
              <p style={{ color: 'var(--on-surface-variant)', maxWidth: 700, margin: '0 auto' }}>
                These are just <strong style={{ color: 'var(--primary)' }}>demos & sample projects</strong> to showcase my skills. I build <strong style={{ color: 'var(--secondary)' }}>full-scale enterprise systems</strong> — e-commerce platforms, streaming services with massive protected servers, SaaS applications, mobile apps, AI-powered tools, and more. <strong style={{ color: '#fff' }}>DM me for real, production-grade projects built to scale globally.</strong>
              </p>
              <div style={{ marginTop: 20, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="https://wa.me/254746093533" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">💬 DM for Enterprise Projects</a>
                <a href="https://wa.me/254746093533" className="btn btn-primary" target="_blank" rel="noopener noreferrer">🔥 Get a Custom Quote</a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <div className="section-divider" />
    </PageWrapper>
  )
}
