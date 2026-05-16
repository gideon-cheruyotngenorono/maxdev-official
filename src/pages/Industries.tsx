import PageWrapper from '../components/PageWrapper'
import AnimatedSection from '../components/AnimatedSection'
import './Industries.css'

const industries = [
  { icon: '👗', title: 'Fashion E-Commerce', desc: 'Premium online stores for fashion brands with product catalogs, size guides, wishlist, AR try-on, and seamless checkout experiences.' },
  { icon: '🛒', title: 'Grocery Stores', desc: 'Full-featured grocery delivery platforms with real-time inventory, route optimization, subscription boxes, and driver management.' },
  { icon: '🏗️', title: 'Construction Companies', desc: 'Project management portals, contractor platforms, bid management, progress tracking, and professional marketing websites.' },
  { icon: '🪑', title: 'Furniture Stores', desc: '3D product viewing, AR room visualization, custom order management, delivery scheduling, and showroom booking systems.' },
  { icon: '📺', title: 'Electronics Shops', desc: 'Product comparison engines, review systems, warranty tracking, trade-in programs, and multi-vendor marketplace features.' },
  { icon: '🚗', title: 'Car Dealership Platforms', desc: 'Vehicle listing with 360° views, financing calculators, trade-in valuation, test drive booking, and dealer CRM systems.' },
  { icon: '🖥️', title: 'Landing Pages', desc: 'High-converting landing pages with A/B testing, lead capture, analytics integration, and optimized conversion funnels.' },
  { icon: '🏫', title: 'School Management', desc: 'Complete ERP systems with student enrollment, grading, attendance, timetables, fee management, and parent communication portals.' },
  { icon: '🏨', title: 'Hotel Management', desc: 'Reservation systems, room management, housekeeping scheduling, POS integration, and guest experience platforms.' },
  { icon: '🍽️', title: 'Restaurant Management', desc: 'POS systems, table management, kitchen display systems, online ordering, delivery integration, and loyalty programs.' },
  { icon: '🏥', title: 'Hospital Management', desc: 'Patient records (EMR/EHR), appointment scheduling, billing, pharmacy management, lab integration, and telemedicine.' },
  { icon: '💼', title: 'Remote Jobs Platforms', desc: 'Job boards with applicant tracking, resume parsing, skill matching, employer dashboards, and automated communication.' },
  { icon: '🎫', title: 'Ticketing Systems', desc: 'Event management, ticket sales, QR validation, seating charts, multi-event support, and organizer analytics.' },
  { icon: '📋', title: 'Portfolio Websites', desc: 'Cinematic portfolios for creatives, agencies, and professionals with project showcases, blogs, and contact systems.' },
  { icon: '📊', title: 'Business Management', desc: 'CRM, ERP, inventory management, invoicing, HR management, and custom business process automation solutions.' },
  { icon: '📱', title: 'Mobile Apps (All Industries)', desc: 'Cross-platform and native mobile applications tailored to any industry vertical with offline support and push notifications.' },
]

export default function Industries() {
  return (
    <PageWrapper>
      <section className="section" style={{ paddingTop: 120 }}>
        <div className="mesh-gradient mesh-gradient-1" />
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="label font-mono">// INDUSTRIES SERVED</span>
              <h1>Solutions for <span className="text-gradient">Every Industry</span></h1>
              <p>I build tailored digital solutions for businesses across all sectors. Each solution is crafted with deep domain understanding and technical excellence.</p>
            </div>
          </AnimatedSection>

          <div className="industries-grid">
            {industries.map((ind, i) => (
              <AnimatedSection key={ind.title} delay={i * 0.05}>
                <div className="industry-card glass-card">
                  <div className="ind-icon">{ind.icon}</div>
                  <h3>{ind.title}</h3>
                  <p>{ind.desc}</p>
                  <a href="https://wa.me/254746093533" className="ssc-link font-mono" target="_blank" rel="noopener noreferrer">
                    Get a Quote →
                  </a>
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
