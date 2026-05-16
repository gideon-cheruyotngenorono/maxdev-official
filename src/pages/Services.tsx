import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'
import AnimatedSection from '../components/AnimatedSection'
import './Services.css'

const services = [
  {
    icon: '🌐', title: 'Web Development',
    desc: 'Modern, responsive websites and web applications built with React, Next.js, and cutting-edge frontend technologies. SEO-optimized, accessible, and blazing fast.',
    features: ['React & Next.js', 'Responsive Design', 'SEO Optimization', 'Performance Tuning', 'Progressive Web Apps'],
  },
  {
    icon: '📱', title: 'Mobile App Development',
    desc: 'Cross-platform and native mobile applications for iOS and Android using Flutter, Kotlin, and Java. Beautiful UI, smooth animations, and robust architecture.',
    features: ['Flutter Cross-Platform', 'Native Android', 'UI/UX Design', 'Play Store Deployment', 'Push Notifications'],
  },
  {
    icon: '⚙️', title: 'Fullstack Systems',
    desc: 'End-to-end application development from database design to deployment. Scalable backend APIs, real-time systems, and microservices architecture.',
    features: ['REST & GraphQL APIs', 'Microservices', 'Database Design', 'WebSocket Real-time', 'Authentication Systems'],
  },
  {
    icon: '🔧', title: 'Web & App Repairs',
    desc: 'Bug fixing, performance optimization, code refactoring, and legacy system modernization. Get your existing projects back on track.',
    features: ['Bug Diagnosis', 'Performance Fixes', 'Code Refactoring', 'Migration & Upgrades', 'Security Patching'],
  },
  {
    icon: '🤖', title: 'AI Integration',
    desc: 'Integrate artificial intelligence into your applications — chatbots, recommendation engines, predictive analytics, and automation workflows.',
    features: ['OpenAI Integration', 'Custom Chatbots', 'ML Models', 'Data Analysis', 'Automation Pipelines'],
  },
  {
    icon: '🔌', title: 'API Integration',
    desc: 'Connect your applications with third-party services — payment gateways, social platforms, cloud services, and enterprise systems.',
    features: ['Payment APIs', 'Social Auth', 'Cloud APIs', 'Webhooks', 'Real-time Sync'],
  },
  {
    icon: '🚀', title: 'Deployment Services',
    desc: 'Production-ready deployment on cloud platforms with CI/CD pipelines, monitoring, auto-scaling, and zero-downtime updates.',
    features: ['Cloud Hosting', 'CI/CD Pipelines', 'Docker & Containers', 'SSL & Domain Setup', 'Monitoring'],
  },
  {
    icon: '☁️', title: 'Cloud Hosting',
    desc: 'Managed cloud infrastructure on AWS, GCP, and DigitalOcean. Optimized for performance, security, and cost-efficiency.',
    features: ['AWS & GCP', 'Load Balancing', 'Auto-scaling', 'CDN Setup', 'Backup Systems'],
  },
  {
    icon: '🔒', title: 'Cybersecurity Solutions',
    desc: 'Comprehensive security audits, encryption implementation, secure API design, and server hardening for your digital infrastructure.',
    features: ['Security Audits', 'Data Encryption', 'DDoS Protection', 'Firewall Setup', 'Compliance'],
  },
  {
    icon: '📈', title: 'SEO Optimization',
    desc: 'Technical SEO, on-page optimization, structured data, Core Web Vitals optimization, and Google indexing strategies.',
    features: ['Technical SEO', 'Core Web Vitals', 'Structured Data', 'Mobile SEO', 'Analytics Setup'],
  },
  {
    icon: '🎨', title: 'UI/UX Design',
    desc: 'Premium user interface design with modern aesthetics, intuitive navigation, micro-animations, and fully responsive layouts.',
    features: ['Interface Design', 'Prototyping', 'Responsive Layouts', 'Animations', 'Design Systems'],
  },
  {
    icon: '🛠️', title: 'Maintenance & Support',
    desc: 'Ongoing maintenance, feature updates, server monitoring, backups, and 24/7 technical support for your applications.',
    features: ['Regular Updates', 'Server Monitoring', 'Backup Systems', 'Priority Support', 'Feature Additions'],
  },
]

export default function Services() {
  return (
    <PageWrapper>
      <section className="section" style={{ paddingTop: 120 }}>
        <div className="mesh-gradient mesh-gradient-1" />
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="label font-mono">// SERVICES</span>
              <h1>Premium <span className="text-gradient">Digital Services</span></h1>
              <p>From concept to deployment, every service is delivered with precision, quality, and attention to detail that sets MAX DEV apart.</p>
            </div>
          </AnimatedSection>

          <div className="services-grid">
            {services.map((svc, i) => (
              <AnimatedSection key={svc.title} delay={i * 0.06}>
                <div className="service-card glass-card">
                  <div className="sc-icon">{svc.icon}</div>
                  <h3>{svc.title}</h3>
                  <p className="sc-desc">{svc.desc}</p>
                  <ul className="sc-features">
                    {svc.features.map(f => (
                      <li key={f}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="services-cta">
              <div className="glass-card" style={{ padding: '48px 32px', textAlign: 'center' }}>
                <h3>Need a Custom Solution?</h3>
                <p style={{ maxWidth: 500, margin: '12px auto 24px' }}>Every project is unique. Let's discuss your specific requirements and build something extraordinary together.</p>
                <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href="https://wa.me/254746093533" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
                  <Link to="/pricing" className="btn btn-ghost">View Pricing</Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <div className="section-divider" />
    </PageWrapper>
  )
}
