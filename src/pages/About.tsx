import PageWrapper from '../components/PageWrapper'
import AnimatedSection from '../components/AnimatedSection'
import './About.css'

const timeline = [
  { year: '2018', title: 'Started Web Development', desc: 'Began mastering HTML, CSS, JavaScript and building responsive websites.' },
  { year: '2019', title: 'Backend Mastery', desc: 'Deep-dived into Node.js, Express, databases, and server architecture.' },
  { year: '2020', title: 'Mobile App Development', desc: 'Started building native Android apps with Java/Kotlin and cross-platform with Flutter.' },
  { year: '2021', title: 'Fullstack & Cloud', desc: 'Mastered React ecosystem, cloud deployment, Docker, and CI/CD pipelines.' },
  { year: '2022', title: 'AI & Machine Learning', desc: 'Integrated AI models, chatbots, and automation into client projects.' },
  { year: '2023', title: 'Enterprise Security', desc: 'Specialized in cybersecurity, encryption, secure APIs, and server hardening.' },
  { year: '2024', title: 'Global Scale', desc: 'Serving international clients with enterprise-grade fullstack solutions.' },
  { year: '2025-26', title: 'Innovation Leader', desc: 'Pushing boundaries with AI-powered apps, SaaS platforms, and digital transformation.' },
]

const values = [
  { icon: '🎯', title: 'Precision Engineering', desc: 'Every line of code is purposeful. Clean, scalable, and maintainable architecture.' },
  { icon: '🚀', title: 'Performance First', desc: 'Lightning-fast load times, optimized assets, and smooth user experiences.' },
  { icon: '🔐', title: 'Security By Design', desc: 'Security is not an afterthought — it is built into every layer of the stack.' },
  { icon: '🌍', title: 'Global Perspective', desc: 'Building solutions that work across markets, cultures, and devices worldwide.' },
]

export default function About() {
  return (
    <PageWrapper>
      <section className="section about-hero">
        <div className="mesh-gradient mesh-gradient-1" />
        <div className="mesh-gradient mesh-gradient-2" />
        <div className="container">
          <AnimatedSection>
            <div className="section-header" style={{ paddingTop: 80 }}>
              <span className="label font-mono">// ABOUT ME</span>
              <h1>Meet <span className="text-gradient">Max Ronoh</span></h1>
              <p style={{ fontSize: '1.15rem' }}>
                The elite software engineer behind MAX DEV — a one-man powerhouse delivering enterprise-grade digital solutions to clients worldwide.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="about-intro glass-card">
              <div className="about-intro-content">
                <div className="about-avatar">
                  <div className="avatar-ring" />
                  <div className="avatar-placeholder font-display">MR</div>
                </div>
                <div className="about-bio">
                  <h3>Max Ronoh <span className="badge badge-primary">Founder & Lead Engineer</span></h3>
                  <p>
                    With over <strong>8 years of web development</strong> and <strong>6+ years of mobile app development</strong> experience,
                    I specialize in building scalable, secure, and visually stunning digital products. From modern frontend architectures
                    with React and Next.js, to robust backend systems with Node.js and Python, to cross-platform mobile apps with Flutter and Kotlin —
                    I deliver end-to-end solutions that exceed expectations.
                  </p>
                  <p>
                    My expertise spans fullstack engineering, AI/ML integration, cybersecurity, cloud infrastructure, API design,
                    and deployment automation. I've completed 100+ projects for clients across fashion, healthcare, education,
                    hospitality, construction, and more.
                  </p>
                  <div className="about-tags">
                    <span className="badge badge-primary">Fullstack</span>
                    <span className="badge badge-secondary">AI/ML</span>
                    <span className="badge badge-tertiary">Security</span>
                    <span className="badge badge-primary">Mobile</span>
                    <span className="badge badge-secondary">Cloud</span>
                    <span className="badge badge-tertiary">DevOps</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="label font-mono">// CORE VALUES</span>
              <h2>What Drives <span className="text-gradient">My Work</span></h2>
            </div>
          </AnimatedSection>
          <div className="grid-4">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="value-card glass-card" style={{ padding: 28 }}>
                  <div className="ssc-icon">{v.icon}</div>
                  <h4>{v.title}</h4>
                  <p style={{ fontSize: '0.9rem' }}>{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="label font-mono">// JOURNEY</span>
              <h2>My <span className="text-gradient">Growth Timeline</span></h2>
            </div>
          </AnimatedSection>
          <div className="timeline">
            {timeline.map((item, i) => (
              <AnimatedSection key={item.year} delay={i * 0.08}>
                <div className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="timeline-dot" />
                  <div className="timeline-card glass-card" style={{ padding: 24 }}>
                    <span className="font-mono" style={{ color: 'var(--primary)', fontSize: '0.8rem' }}>{item.year}</span>
                    <h4 style={{ margin: '8px 0' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.9rem' }}>{item.desc}</p>
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
