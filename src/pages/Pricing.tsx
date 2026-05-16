import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'
import AnimatedSection from '../components/AnimatedSection'
import './Pricing.css'

const workflow = [
  { step: '01', title: 'Discovery Call', desc: 'We discuss your project requirements, goals, timeline, and budget over WhatsApp or video call.', icon: '📞' },
  { step: '02', title: 'Proposal & Quote', desc: 'I prepare a detailed proposal with scope, timeline, technology recommendations, and pricing.', icon: '📋' },
  { step: '03', title: 'Prototype / Demo', desc: 'I build a working prototype or demo for your review and approval before full development begins.', icon: '🎨' },
  { step: '04', title: '40% Deposit', desc: 'After you approve the prototype, a 40% deposit is required to begin full-scale development.', icon: '💳' },
  { step: '05', title: 'Development', desc: 'Full-scale development with regular progress updates, live preview links, and feedback rounds.', icon: '⚡' },
  { step: '06', title: 'Final Delivery & 60%', desc: 'Final project delivery with full handover. The remaining 60% balance is due upon completion.', icon: '🚀' },
]

const pricingTiers = [
  {
    name: 'Landing Page', price: 'From $100', desc: 'Single-page websites for businesses, events, and promotions.',
    features: ['Responsive Design', 'SEO Optimized', 'Contact Forms', 'Animations', '1 Week Delivery'],
    popular: false,
  },
  {
    name: 'Business Website', price: 'From $200', desc: 'Multi-page websites with CMS, blog, and advanced features.',
    features: ['Up to 10 Pages', 'Admin Dashboard', 'Blog System', 'Analytics', '2-3 Week Delivery'],
    popular: false,
  },
  {
    name: 'Web Application', price: 'From $400', desc: 'Full-featured web applications with backend, database, and APIs.',
    features: ['Custom Backend', 'Database Design', 'User Auth', 'API Integration', '4-8 Week Delivery'],
    popular: true,
  },
  {
    name: 'Mobile Application', price: 'From $500', desc: 'Cross-platform or native mobile apps for iOS and Android.',
    features: ['iOS & Android', 'Push Notifications', 'Offline Support', 'App Store Deploy', '6-12 Week Delivery'],
    popular: false,
  },
  {
    name: 'E-Commerce Platform', price: 'From $350', desc: 'Full-featured online stores with payment processing and inventory.',
    features: ['Product Catalog', 'Secure Payments', 'Order Management', 'Inventory System', 'Analytics'],
    popular: false,
  },
  {
    name: 'Custom Integration', price: 'From $250', desc: 'API integrations, third-party tools, and system customizations.',
    features: ['API Integration', 'Custom Features', 'System Testing', 'Documentation', 'Support Included'],
    popular: false,
  },
]

export default function Pricing() {
  return (
    <PageWrapper>
      <section className="section" style={{ paddingTop: 120 }}>
        <div className="mesh-gradient mesh-gradient-1" />
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="label font-mono">// PRICING & WORKFLOW</span>
              <h1>Transparent <span className="text-gradient">Pricing</span></h1>
              <p>Clear, upfront pricing with no hidden fees. Every project is unique — these are starting prices. Contact me for a custom quote.</p>
            </div>
          </AnimatedSection>

          <div className="pricing-grid">
            {pricingTiers.map((tier, i) => (
              <AnimatedSection key={tier.name} delay={i * 0.08}>
                <div className={`pricing-card glass-card ${tier.popular ? 'popular' : ''}`}>
                  {tier.popular && <div className="popular-badge font-mono">MOST POPULAR</div>}
                  <h3>{tier.name}</h3>
                  <div className="pricing-amount font-display">{tier.price}</div>
                  <p className="pricing-desc">{tier.desc}</p>
                  <ul className="pricing-features">
                    {tier.features.map(f => (
                      <li key={f}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="https://wa.me/254746093533" className="btn btn-primary" style={{ width: '100%' }} target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Workflow */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="label font-mono">// HOW IT WORKS</span>
              <h2>My <span className="text-gradient">Workflow</span></h2>
              <p>A streamlined process designed for clarity, efficiency, and client satisfaction at every step.</p>
            </div>
          </AnimatedSection>

          <div className="workflow-grid">
            {workflow.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.1}>
                <div className="workflow-card glass-card">
                  <div className="wf-step font-mono">{step.step}</div>
                  <div className="wf-icon">{step.icon}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Terms */}
          <AnimatedSection>
            <div className="terms-box glass-card" style={{ padding: 32, marginTop: 60 }}>
              <h3 style={{ marginBottom: 12 }}>📜 Terms of Service</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                Clients are required to pay a <strong style={{ color: 'var(--primary)' }}>40% deposit</strong> after receiving and approving the prototype/demo link confirming the project meets their expectations. The remaining <strong style={{ color: 'var(--primary)' }}>60% balance</strong> must be completed immediately after final project delivery.
              </p>
              <div style={{ marginTop: 20, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href="https://wa.me/254746093533" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">Discuss Your Project</a>
                <Link to="/contact" className="btn btn-ghost">Contact Form</Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <div className="section-divider" />
    </PageWrapper>
  )
}
