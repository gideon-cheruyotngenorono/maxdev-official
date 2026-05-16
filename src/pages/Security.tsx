import PageWrapper from '../components/PageWrapper'
import AnimatedSection from '../components/AnimatedSection'
import './Security.css'

const securityTopics = [
  { icon: '🔐', title: 'App Encryption Systems', desc: 'End-to-end encryption for mobile and web applications, secure data storage, encrypted communications, and key management systems.' },
  { icon: '🌐', title: 'Web Encryption & SSL/TLS', desc: 'HTTPS enforcement, SSL certificate management, TLS 1.3 implementation, HSTS headers, and secure cookie configuration.' },
  { icon: '🔑', title: 'JWT & OAuth Authentication', desc: 'JSON Web Token implementation, OAuth 2.0 flows, refresh token rotation, session management, and multi-factor authentication.' },
  { icon: '🛡️', title: 'Secure API Communication', desc: 'API key management, request signing, rate limiting, input validation, CORS configuration, and API gateway security.' },
  { icon: '🧱', title: 'Firewall & Server Hardening', desc: 'Firewall rule configuration, SSH hardening, port management, intrusion detection, and server access control.' },
  { icon: '⚡', title: 'DDoS Protection', desc: 'Rate limiting, traffic analysis, CDN-based protection, IP reputation filtering, and auto-scaling under attack.' },
  { icon: '📊', title: 'Data Protection', desc: 'GDPR compliance, data encryption at rest, secure backups, data anonymization, and privacy-by-design architecture.' },
  { icon: '💳', title: 'Secure Payment Systems', desc: 'PCI-DSS compliance, tokenized payments, secure checkout flows, fraud detection, and payment gateway integration.' },
]

const aiTopics = [
  { icon: '🧠', title: 'Python AI Systems', desc: 'Building intelligent systems with TensorFlow, PyTorch, scikit-learn, and custom ML pipelines for business automation.' },
  { icon: '🤖', title: 'AI Chatbot Systems', desc: 'Custom chatbot development with NLP, conversation design, multi-channel deployment, and continuous learning systems.' },
  { icon: '⚙️', title: 'Automation Systems', desc: 'Business process automation, workflow engines, intelligent scheduling, and RPA integration for operational efficiency.' },
  { icon: '🔌', title: 'OpenAI & AI APIs', desc: 'GPT integration, DALL-E implementation, Whisper transcription, custom fine-tuning, and AI API orchestration.' },
  { icon: '📈', title: 'Predictive Analytics', desc: 'Data modeling, forecasting systems, recommendation engines, anomaly detection, and business intelligence insights.' },
  { icon: '🔍', title: 'Data Analysis', desc: 'Data pipeline design, ETL processes, visualization dashboards, statistical analysis, and reporting automation.' },
]

export default function Security() {
  return (
    <PageWrapper>
      <section className="section" style={{ paddingTop: 120 }}>
        <div className="mesh-gradient mesh-gradient-1" />
        <div className="mesh-gradient mesh-gradient-2" />
        <div className="container">
          {/* Security Section */}
          <AnimatedSection>
            <div className="section-header">
              <span className="label font-mono">// CYBERSECURITY</span>
              <h1>Security & <span className="text-gradient">Encryption</span></h1>
              <p>Enterprise-grade security solutions built into every layer of your application stack. Security is not an afterthought — it's foundational.</p>
            </div>
          </AnimatedSection>

          <div className="security-visual">
            <AnimatedSection>
              <div className="shield-container">
                <div className="shield-ring ring-1" />
                <div className="shield-ring ring-2" />
                <div className="shield-ring ring-3" />
                <div className="shield-core">
                  <span>🛡️</span>
                  <span className="font-mono" style={{ color: 'var(--primary)', fontSize: '0.7rem', marginTop: 8 }}>SECURED</span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="security-grid">
            {securityTopics.map((topic, i) => (
              <AnimatedSection key={topic.title} delay={i * 0.06}>
                <div className="security-card glass-card">
                  <div className="sec-icon">{topic.icon}</div>
                  <h3>{topic.title}</h3>
                  <p>{topic.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* AI Section */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="label font-mono">// ARTIFICIAL INTELLIGENCE</span>
              <h2>AI & <span className="text-gradient">Machine Learning</span></h2>
              <p>Leveraging the power of artificial intelligence to build intelligent, adaptive, and automated systems that transform businesses.</p>
            </div>
          </AnimatedSection>

          <div className="ai-grid">
            {aiTopics.map((topic, i) => (
              <AnimatedSection key={topic.title} delay={i * 0.08}>
                <div className="ai-card glass-card">
                  <div className="sec-icon">{topic.icon}</div>
                  <h3>{topic.title}</h3>
                  <p>{topic.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <div className="section-divider" />
    </PageWrapper>
  )
}
