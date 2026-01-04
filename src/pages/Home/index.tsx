import './style.css'

const stats = [
  { icon: '😊', label: 'Happy Customers', value: '1 Crore+' },
  { icon: '📱', label: 'Free', value: 'Mobile App' },
  { icon: '⭐', label: 'Rated 4.7/5', value: 'On Google Play' },
  { icon: '🖥️', label: 'Multi-Device', value: 'Use on Mobile/Desktop' },
  { icon: '👥', label: 'Multi-User', value: 'User Management' },
]

const features = [
  {
    icon: '🧾',
    title: 'Create GST bills online and share',
    copy: 'Generate invoices, auto-calculate taxes, and share over WhatsApp, email, or print to build a professional brand image.',
  },
  {
    icon: '📦',
    title: 'Manage inventory seamlessly',
    copy: 'Track purity, sizes, batches, and ageing with low-stock alerts and synced counters during peak hours.',
  },
  {
    icon: '🔔',
    title: 'Payment reminders',
    copy: 'Send one-tap reminders with payment links to reduce outstanding dues and keep cash flow steady.',
  },
  {
    icon: '📈',
    title: 'Smart reports & GST-ready',
    copy: 'Profit, sales, and GST summaries refresh instantly. Export data for filings without manual effort.',
  },
  {
    icon: '👥',
    title: 'Customer & khata management',
    copy: 'Maintain party ledgers, customer histories, and khata-style credit/debit tracking with reminders.',
  },
  {
    icon: '🧾',
    title: 'Audit-friendly exports',
    copy: 'Item and invoice exports for auditors, with clear foldering to speed up checks and reconciliations.',
  },
  {
    icon: '☁️',
    title: 'Online backups',
    copy: 'Secure cloud + local backups with easy restore, so your billing and inventory data stays safe.',
  },
]

const highlightRows = [
  {
    title: 'Create GST bills online and share them with customers',
    body: 'Generate compliant invoices in minutes and share digitally to build trust while keeping your brand front and center.',
    cta: 'Read more',
  },
  {
    title: 'Manage small business inventory seamlessly',
    body: 'Monitor stock, batches, and reorder levels in one place. Stay ahead during peak season without stockouts.',
    cta: 'Read more',
  },
]

const productFeatures = [
  'GST & non-GST invoicing with automatic tax slabs',
  'Send estimates, quotations, and delivery challans in a click',
  'Inventory with batches, purity, sizes, barcode/QR labels',
  'Payment reminders with links and UPI QR for faster collections',
  'Multi-user roles for counters, managers, and accountants',
  'Works online/offline with auto-sync when connected',
  'Export-ready GST reports and business dashboards',
  'Customer management with party histories and credit limits',
  'Khata/ledger tracking for payables and receivables',
  'Auditor-ready exports for invoices and stock',
  'Online + local backups with simple restore',
]

const benefits = [
  { title: 'Lifetime free basics', body: 'Invoice, track stock, and view dashboards on mobile without setup fees.' },
  { title: 'Track cash flow', body: 'Monitor payables/receivables, payouts, and expenses in one ledger view.' },
  { title: 'Fewer errors', body: 'Pre-set tax rules, round-offs, and templates to keep bills compliant.' },
  { title: 'Faster onboarding', body: 'Import existing items/parties from Excel and start billing in minutes.' },
]

export function HomePage() {
  return (
    <div className="page home-page">
      <section className="hero hero-banner">
        <div className="container hero-grid">
          <div className="hero__copy">
            <h1>GST Billing Software for Small Businesses in India</h1>
            <p className="lead">
              Manage billing, inventory, and accounting from one dashboard. Join 1 Cr+ SMEs who trust
              JewelVault for GST-compliant invoicing and streamlined workflows.
            </p>
            <div className="hero__actions">
              <button type="button" className="btn primary">Download JewelVault Now!</button>
              <button type="button" className="btn ghost">Try demo workspace</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="device-mock">
              <div className="device-screen">
                <div className="device-header">
                  <span className="pill soft">Dashboard</span>
                  <span className="pill danger">₹ 2,53,500</span>
                </div>
                <div className="device-lines">
                  <span className="line wide" />
                  <span className="line mid" />
                  <span className="line thin" />
                  <span className="line wide" />
                  <span className="line mid" />
                </div>
              </div>
              <div className="device-shadow" />
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <div className="stat-icon" aria-hidden="true">
                {stat.icon}
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="feature-bullets">
        <div className="container">
          <div className="section-header center">
            <h2>Everything you need to bill, collect, and reconcile</h2>
            <p className="section-lead">Core workflows in JewelVault—preloaded with sample data so you can try them immediately.</p>
          </div>
          <div className="bullet-grid">
            {productFeatures.map((item) => (
              <div className="bullet-card" key={item}>
                <span className="bullet-dot" aria-hidden="true">•</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="feature-section">
        <div className="container">
          <div className="section-header center">
            <h2>Features of GST Billing and Accounting Software</h2>
            <p className="section-lead">
              See how JewelVault helps you invoice faster, manage inventory, and stay compliant with GST norms.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <div className="feature-card" key={feature.title}>
                <div className="feature-title">
                  <span className="feature-icon" aria-hidden="true">
                    {feature.icon}
                  </span>
                  {feature.title}
                </div>
                <p className="feature-copy">{feature.copy}</p>
                <button type="button" className="text-cta">Read more</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits-block">
        <div className="container">
          <div className="section-header center">
            <h2>Top benefits for showroom and retail teams</h2>
          </div>
          <div className="benefit-grid">
            {benefits.map((item) => (
              <div className="benefit-card light" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="highlights">
        <div className="container highlight-grid">
          {highlightRows.map((row) => (
            <div className="highlight-card" key={row.title}>
              <div className="highlight-visual" />
              <div className="highlight-copy">
                <h3>{row.title}</h3>
                <p>{row.body}</p>
                <button type="button" className="text-cta">+ {row.cta}</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-content">
          <div>
            <h3>Ready to try JewelVault?</h3>
            <p className="section-lead">
              Download the app, explore with dummy data, and go live when you’re ready.
            </p>
          </div>
          <div className="cta-actions">
            <button type="button" className="btn primary">Download JewelVault Now</button>
            <button type="button" className="btn ghost">Schedule onboarding</button>
          </div>
        </div>
      </section>
    </div>
  )
}
