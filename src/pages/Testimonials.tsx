import { useState, useEffect } from 'react'
import PageWrapper from '../components/PageWrapper'
import AnimatedSection from '../components/AnimatedSection'
import './Testimonials.css'

const testimonials = [
  { name: 'Sarah K.', role: 'CEO, Fashion Brand', rating: 5, text: 'MAX DEV delivered an absolutely stunning e-commerce platform for our fashion brand. The attention to detail, animations, and overall user experience exceeded our expectations. Sales increased by 40% within the first month!' },
  { name: 'James M.', role: 'Restaurant Owner', rating: 5, text: 'The restaurant management system Max built for us transformed our operations. Real-time order tracking, kitchen display, and the POS system work flawlessly. Our staff loves it.' },
  { name: 'Dr. Amina R.', role: 'Hospital Administrator', rating: 5, text: 'We needed a comprehensive hospital management system, and Max delivered beyond our expectations. Patient records, scheduling, and billing — everything works seamlessly together.' },
  { name: 'John D.', role: 'Tech Startup Founder', rating: 5, text: 'The AI chatbot Max integrated into our platform has reduced our customer support load by 60%. The implementation was smooth and the system keeps getting smarter.' },
  { name: 'Emily W.', role: 'School Principal', rating: 5, text: 'Our school management system is a game-changer. Parents can track grades, attendance, and communicate with teachers. The admin dashboard is incredibly powerful yet easy to use.' },
  { name: 'David O.', role: 'Construction Company CEO', rating: 5, text: 'Max created a premium website for our construction company that truly represents our brand. The project showcase and lead generation features have brought us significant new business.' },
  { name: 'Grace L.', role: 'Hotel Manager', rating: 5, text: 'The hotel booking system is world-class. Our guests love the seamless booking experience, and our staff can manage rooms, check-ins, and services all from one beautiful dashboard.' },
  { name: 'Michael T.', role: 'E-Commerce Director', rating: 5, text: 'Working with MAX DEV was the best tech decision we made. The performance optimization alone saved us thousands in hosting costs while improving user experience dramatically.' },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <PageWrapper>
      <section className="section" style={{ paddingTop: 120 }}>
        <div className="mesh-gradient mesh-gradient-1" />
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="label font-mono">// TESTIMONIALS</span>
              <h1>Client <span className="text-gradient">Success Stories</span></h1>
              <p>Hear from the clients who've experienced the MAX DEV difference. Every project is a partnership built on trust and excellence.</p>
            </div>
          </AnimatedSection>

          {/* Featured Testimonial */}
          <AnimatedSection>
            <div className="testimonial-featured glass-card">
              <div className="tf-quote">"</div>
              <p className="tf-text">{testimonials[active].text}</p>
              <div className="tf-author">
                <div className="tf-avatar font-display">
                  {testimonials[active].name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4>{testimonials[active].name}</h4>
                  <span className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--primary)' }}>{testimonials[active].role}</span>
                </div>
                <div className="tf-stars">
                  {Array.from({ length: testimonials[active].rating }, (_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
              </div>
              <div className="tf-dots">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`tf-dot ${i === active ? 'active' : ''}`}
                    onClick={() => setActive(i)}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Grid */}
          <div className="testimonials-grid" style={{ marginTop: 60 }}>
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.06}>
                <div className="testimonial-card glass-card">
                  <div className="tc-stars">
                    {Array.from({ length: t.rating }, (_, j) => (
                      <span key={j} className="star">★</span>
                    ))}
                  </div>
                  <p className="tc-text">"{t.text}"</p>
                  <div className="tc-author">
                    <div className="tc-avatar font-display">{t.name.split(' ').map(n => n[0]).join('')}</div>
                    <div>
                      <strong style={{ color: '#fff' }}>{t.name}</strong>
                      <span className="tc-role">{t.role}</span>
                    </div>
                  </div>
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
