import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'
import AnimatedSection from '../components/AnimatedSection'
import { useTypingEffect, useCountUp } from '../hooks/useInView'
import './Home.css'

const typingTexts = [
  'Building Powerful Digital Experiences',
  'Crafting Elite Web Solutions',
  'Engineering Mobile Applications',
  'Integrating AI Intelligence',
  'Securing Digital Infrastructure',
]

const stats = [
  { value: 8, suffix: '+', label: 'Years Web Development' },
  { value: 6, suffix: '+', label: 'Years App Development' },
  { value: 100, suffix: '+', label: 'Completed Projects' },
  { value: 50, suffix: '+', label: 'Global Clients' },
]

const showcaseServices = [
  { icon: '⚡', title: 'Web Development', desc: 'Modern React, Next.js, and fullstack solutions' },
  { icon: '📱', title: 'Mobile Apps', desc: 'Flutter, Kotlin & Java cross-platform apps' },
  { icon: '🤖', title: 'AI Integration', desc: 'Machine learning, chatbots & automation' },
  { icon: '🔒', title: 'Cybersecurity', desc: 'Encryption, secure APIs & infrastructure' },
  { icon: '☁️', title: 'Cloud & Deploy', desc: 'Scalable hosting & CI/CD pipelines' },
  { icon: '🎨', title: 'UI/UX Design', desc: 'Premium interfaces & user experiences' },
]

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value)
  return (
    <div className="stat-card" ref={ref}>
      <span className="stat-number font-display">
        {count}<span className="stat-suffix">{suffix}</span>
      </span>
      <span className="stat-label font-mono">{label}</span>
    </div>
  )
}

export default function Home() {
  const typedText = useTypingEffect(typingTexts, 70, 2500)

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-mesh mesh-1" />
        <div className="hero-mesh mesh-2" />
        <div className="hero-mesh mesh-3" />

        <div className="container hero-content">
          <div className="hero-text">
            <div className="hero-badge font-mono">
              <span className="badge-dot" />
              AVAILABLE FOR PROJECTS
            </div>

            <h1 className="hero-title">
              <span className="typing-text">{typedText}</span>
              <span className="typing-cursor">|</span>
            </h1>

            <p className="hero-subtitle">
              Elite Fullstack Web & Mobile Developer · AI Integration Expert · Security & Deployment Specialist
            </p>

            <div className="hero-cta">
              <Link to="/projects" className="btn btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                View Portfolio
              </Link>
              <Link to="/services" className="btn btn-ghost">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                Explore Services
              </Link>
              <a href="https://wa.me/254746093533" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a6.8 6.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Floating Dashboard Cards */}
          <div className="hero-visual">
            <div className="floating-card card-1 animate-float">
              <div className="fc-header">
                <span className="fc-dot green" />
                <span className="fc-title font-mono">system.status</span>
              </div>
              <div className="fc-metric">
                <span className="fc-value text-gradient">99.9%</span>
                <span className="fc-label">Uptime</span>
              </div>
            </div>

            <div className="floating-card card-2 animate-float" style={{ animationDelay: '1s' }}>
              <div className="fc-header">
                <span className="fc-dot cyan" />
                <span className="fc-title font-mono">projects.active</span>
              </div>
              <div className="fc-bars">
                <div className="fc-bar" style={{ width: '90%', background: 'linear-gradient(90deg, var(--primary), var(--secondary))' }} />
                <div className="fc-bar" style={{ width: '75%', background: 'linear-gradient(90deg, var(--secondary), var(--tertiary))' }} />
                <div className="fc-bar" style={{ width: '85%', background: 'linear-gradient(90deg, var(--tertiary), var(--primary))' }} />
              </div>
            </div>

            <div className="floating-card card-3 animate-float" style={{ animationDelay: '2s' }}>
              <div className="fc-header">
                <span className="fc-dot purple" />
                <span className="fc-title font-mono">tech.stack</span>
              </div>
              <div className="fc-tags">
                <span className="badge badge-primary">React</span>
                <span className="badge badge-secondary">Node.js</span>
                <span className="badge badge-tertiary">Flutter</span>
                <span className="badge badge-primary">Python</span>
              </div>
            </div>

            <div className="hero-glow-ring" />
          </div>
        </div>

        {/* Stats Bar */}
        <AnimatedSection className="stats-bar">
          <div className="container">
            <div className="stats-grid">
              {stats.map(s => (
                <StatCard key={s.label} {...s} />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Quick Services */}
      <section className="section" id="quick-services">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="label">// WHAT I DO</span>
              <h2>Elite <span className="text-gradient">Digital Solutions</span></h2>
              <p>From concept to deployment, I deliver world-class software solutions that empower businesses globally.</p>
            </div>
          </AnimatedSection>

          <div className="services-showcase-grid">
            {showcaseServices.map((svc, i) => (
              <AnimatedSection key={svc.title} delay={i * 0.1}>
                <div className="service-showcase-card glass-card">
                  <div className="ssc-icon">{svc.icon}</div>
                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>
                  <Link to="/services" className="ssc-link font-mono">
                    Learn more →
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <AnimatedSection>
            <div className="cta-box glass-card">
              <div className="cta-mesh" />
              <h2>Ready to Build <span className="text-gradient">Something Extraordinary</span>?</h2>
              <p>Let's discuss your next project. I'll turn your vision into a premium digital reality.</p>
              <div className="hero-cta" style={{ justifyContent: 'center' }}>
                <a href="https://wa.me/254746093533" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
                  Start a Conversation
                </a>
                <Link to="/contact" className="btn btn-ghost">
                  Contact Form
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageWrapper>
  )
}
