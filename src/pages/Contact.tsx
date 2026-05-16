import { useState } from 'react'
import PageWrapper from '../components/PageWrapper'
import AnimatedSection from '../components/AnimatedSection'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMsg = `Hello MAX DEV! My name is ${form.name}. ${form.subject ? `Subject: ${form.subject}. ` : ''}${form.message}`
    window.open(`https://wa.me/254746093533?text=${encodeURIComponent(whatsappMsg)}`, '_blank')
    setSubmitted(true)
  }

  return (
    <PageWrapper>
      <section className="section" style={{ paddingTop: 120 }}>
        <div className="mesh-gradient mesh-gradient-1" />
        <div className="mesh-gradient mesh-gradient-2" />
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="label font-mono">// GET IN TOUCH</span>
              <h1>Let's <span className="text-gradient">Connect</span></h1>
              <p>Ready to start your project? I'd love to hear about your vision. The fastest way to reach me is via WhatsApp.</p>
            </div>
          </AnimatedSection>

          <div className="contact-grid">
            {/* Left - Info */}
            <AnimatedSection delay={0.1}>
              <div className="contact-info">
                {/* WhatsApp CTAs */}
                <div className="contact-wa-box glass-card">
                  <h3>💬 Chat on WhatsApp</h3>
                  <p>The fastest way to discuss your project. I typically respond within 30 minutes during business hours.</p>
                  <div className="wa-buttons">
                    <a href="https://wa.me/254746093533" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a6.8 6.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      +254 746 093 533
                    </a>
                    <a href="https://wa.me/254701648600" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a6.8 6.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      +254 701 648 600
                    </a>
                  </div>
                </div>

                {/* Contact Cards */}
                <div className="contact-cards">
                  <div className="contact-card glass-card">
                    <div className="cc-icon">📧</div>
                    <div>
                      <h4>Email</h4>
                      <a href="mailto:maxtechnologies124@gmail.com">maxtechnologies124@gmail.com</a>
                    </div>
                  </div>
                  <div className="contact-card glass-card">
                    <div className="cc-icon">📍</div>
                    <div>
                      <h4>Location</h4>
                      <p style={{ fontSize: '0.9rem' }}>Kenya · Available Worldwide</p>
                    </div>
                  </div>
                  <div className="contact-card glass-card">
                    <div className="cc-icon">🕐</div>
                    <div>
                      <h4>Availability</h4>
                      <p className="availability-badge" style={{ margin: 0 }}>
                        <span className="status-dot" />
                        Available for Projects
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="contact-social glass-card">
                  <h4>Follow & Connect</h4>
                  <div className="social-links">
                    <a href="https://tiktok.com/@maxdev" target="_blank" rel="noopener noreferrer" className="social-link-btn">
                      <span>🎵</span> TikTok
                    </a>
                    <a href="https://youtube.com/@maxdev" target="_blank" rel="noopener noreferrer" className="social-link-btn">
                      <span>▶️</span> YouTube
                    </a>
                    <a href="https://facebook.com/maxdev" target="_blank" rel="noopener noreferrer" className="social-link-btn">
                      <span>📘</span> Facebook
                    </a>
                    <a href="https://instagram.com/maxdev" target="_blank" rel="noopener noreferrer" className="social-link-btn">
                      <span>📷</span> Instagram
                    </a>
                    <a href="https://wa.me/254746093533" target="_blank" rel="noopener noreferrer" className="social-link-btn">
                      <span>💬</span> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right - Form */}
            <AnimatedSection delay={0.2}>
              <div className="contact-form-box glass-card">
                <h3>Send a Message</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: 24 }}>Fill out the form and it will redirect you to WhatsApp with your message pre-filled.</p>

                {submitted ? (
                  <div className="form-success">
                    <div style={{ fontSize: '3rem', marginBottom: 16 }}>✅</div>
                    <h4>Message Sent!</h4>
                    <p>Your message has been forwarded to WhatsApp. I'll get back to you shortly.</p>
                    <button className="btn btn-primary" onClick={() => setSubmitted(false)} style={{ marginTop: 20 }}>
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label className="font-mono">YOUR NAME</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="form-group">
                      <label className="font-mono">EMAIL ADDRESS</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="form-group">
                      <label className="font-mono">SUBJECT</label>
                      <input
                        type="text"
                        value={form.subject}
                        onChange={e => setForm({ ...form, subject: e.target.value })}
                        placeholder="Project Inquiry"
                      />
                    </div>
                    <div className="form-group">
                      <label className="font-mono">MESSAGE</label>
                      <textarea
                        rows={5}
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        required
                        placeholder="Tell me about your project..."
                      />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                      Send via WhatsApp
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>

          {/* Map Placeholder */}
          <AnimatedSection>
            <div className="map-section glass-card" style={{ marginTop: 60 }}>
              <div className="map-placeholder">
                <span style={{ fontSize: '3rem' }}>🌍</span>
                <h4 style={{ marginTop: 12 }}>Based in Kenya · Serving Clients Worldwide</h4>
                <p style={{ fontSize: '0.9rem', maxWidth: 500, margin: '8px auto 0' }}>
                  I work with clients from all over the world. Distance is never a barrier — let's build something amazing together.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <div className="section-divider" />
    </PageWrapper>
  )
}
