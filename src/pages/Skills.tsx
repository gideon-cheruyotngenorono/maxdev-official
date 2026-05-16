import { useState } from 'react'
import PageWrapper from '../components/PageWrapper'
import AnimatedSection from '../components/AnimatedSection'
import { useInView } from '../hooks/useInView'
import './Skills.css'

interface Skill { name: string; percent: number; desc: string }

const categories = [
  {
    id: 'mobile', label: '📱 Mobile Development', skills: [
      { name: 'Flutter', percent: 70, desc: 'Cross-platform development, performance optimization, UI/UX architecture, animations, Firebase integration, state management, Play Store & iOS deployment, API integrations.' },
      { name: 'Kotlin', percent: 75, desc: 'Native Android architecture, MVVM, coroutines, Jetpack Compose, scalable Android systems, Firebase integration, REST APIs, secure mobile development.' },
      { name: 'Java', percent: 84, desc: 'Android backend logic, OOP, scalable systems, multithreading, enterprise applications, API handling, SDK integrations.' },
    ]
  },
  {
    id: 'frontend', label: '🖥️ Frontend', skills: [
      { name: 'HTML5', percent: 95, desc: 'Semantic markup, accessibility, SEO-friendly structure, responsive layouts, modern HTML APIs.' },
      { name: 'CSS3', percent: 94, desc: 'Advanced layouts, animations, Grid & Flexbox, custom properties, responsive design systems.' },
      { name: 'JavaScript', percent: 93, desc: 'ES6+, async/await, DOM manipulation, event handling, performance optimization, module systems.' },
      { name: 'TypeScript', percent: 90, desc: 'Type safety, interfaces, generics, advanced patterns, enterprise-scale codebases.' },
      { name: 'React.js', percent: 95, desc: 'Component architecture, hooks, state management, performance optimization, SSR/SSG, testing.' },
      { name: 'Vite', percent: 90, desc: 'Modern build tooling, HMR, plugin ecosystem, optimized production builds.' },
      { name: 'Tailwind CSS', percent: 95, desc: 'Utility-first CSS, custom design systems, responsive design, component patterns.' },
      { name: 'Next.js', percent: 92, desc: 'SSR/SSG, API routes, image optimization, middleware, ISR, app router architecture.' },
    ]
  },
  {
    id: 'backend', label: '⚙️ Backend', skills: [
      { name: 'Node.js', percent: 92, desc: 'Event-driven architecture, streams, clustering, performance optimization, microservices.' },
      { name: 'Express.js', percent: 93, desc: 'REST APIs, middleware patterns, authentication, rate limiting, error handling.' },
      { name: 'Python', percent: 90, desc: 'Data processing, scripting, AI/ML integration, automation, API development.' },
      { name: 'Django', percent: 91, desc: 'ORM, admin panel, authentication, REST framework, scalable web applications.' },
      { name: 'Flask', percent: 89, desc: 'Lightweight APIs, microservices, rapid prototyping, webhook handlers.' },
      { name: 'Java Backend', percent: 88, desc: 'Spring Boot, enterprise systems, multithreading, JPA, scalable architectures.' },
      { name: 'Next.js API', percent: 90, desc: 'Serverless functions, API routes, middleware, edge computing, full-stack Next.js.' },
    ]
  },
  {
    id: 'database', label: '🗄️ Databases', skills: [
      { name: 'MongoDB', percent: 95, desc: 'Document modeling, aggregation pipelines, indexing, Atlas cloud, real-time sync.' },
      { name: 'Firebase', percent: 94, desc: 'Firestore, real-time database, authentication, cloud functions, hosting.' },
      { name: 'Supabase', percent: 93, desc: 'PostgreSQL backend, real-time subscriptions, row-level security, edge functions.' },
      { name: 'PostgreSQL', percent: 92, desc: 'Relational design, complex queries, indexing, JSON support, performance tuning.' },
      { name: 'MySQL', percent: 90, desc: 'Schema design, stored procedures, replication, optimization, legacy systems.' },
      { name: 'Redis', percent: 89, desc: 'Caching, session management, pub/sub, rate limiting, real-time leaderboards.' },
      { name: 'Prisma ORM', percent: 90, desc: 'Type-safe queries, migrations, relation modeling, database introspection.' },
    ]
  },
  {
    id: 'seo', label: '📈 SEO', skills: [
      { name: 'Search Engine Optimization', percent: 80, desc: 'Technical SEO, on-page optimization, structured data, metadata, Core Web Vitals, Google indexing, mobile-first optimization.' },
    ]
  },
]

function ProgressBar({ skill, inView }: { skill: Skill; inView: boolean }) {
  return (
    <div className="skill-progress-item">
      <div className="progress-bar-container">
        <div className="progress-label">
          <span>{skill.name}</span>
          <span>{skill.percent}%</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: inView ? `${skill.percent}%` : '0%' }} />
        </div>
      </div>
      <p className="skill-desc">{skill.desc}</p>
    </div>
  )
}

function SkillCategory({ category }: { category: typeof categories[0] }) {
  const { ref, inView } = useInView(0.1)
  return (
    <div ref={ref} className="skill-category glass-card">
      <h3>{category.label}</h3>
      <div className="skill-list">
        {category.skills.map(skill => (
          <ProgressBar key={skill.name} skill={skill} inView={inView} />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('mobile')

  const activeCategory = categories.find(c => c.id === activeTab)!

  return (
    <PageWrapper>
      <section className="section" style={{ paddingTop: 120 }}>
        <div className="mesh-gradient mesh-gradient-1" />
        <div className="mesh-gradient mesh-gradient-2" />
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="label font-mono">// SKILLS & TECHNOLOGIES</span>
              <h1>Technical <span className="text-gradient">Expertise</span></h1>
              <p>Deep proficiency across the full technology stack — frontend, backend, mobile, databases, and beyond.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="skill-tabs">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  className={`skill-tab ${activeTab === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection key={activeTab}>
            <SkillCategory category={activeCategory} />
          </AnimatedSection>
        </div>
      </section>
      <div className="section-divider" />
    </PageWrapper>
  )
}
