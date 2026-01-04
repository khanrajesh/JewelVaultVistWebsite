import './style.css'

const plans = [
  {
    name: 'Starter (Mobile)',
    tag: 'Best for new stores',
    blurb: 'Mobile-only billing and inventory for single counters.',
    bullets: [
      'GST/non-GST invoices, estimates, challans',
      'Inventory with QR/barcode search',
      'Customer/khata tracking and reminders',
      'Basic Excel/PDF export',
    ],
  },
  {
    name: 'Professional (Mobile + Desktop)',
    tag: 'Most popular',
    blurb: 'Counter + back office with advanced labels and roles.',
    bullets: [
      'Mobile + desktop companion views',
      'Advanced label profiles; ESC/POS, ZPL, TSPL, CPCL',
      'Multi-user roles (owner/manager/staff/accountant)',
      'Cloud + local backups and restores',
    ],
  },
  {
    name: 'Enterprise (Chains/Wholesale)',
    blurb: 'Multi-branch dashboards and custom workflows.',
    bullets: [
      'Multi-branch and consolidated reporting',
      'Custom reports, integrations, and onboarding',
      'Vendor/purchase workflows with exports',
      'Dedicated success manager',
    ],
  },
]

export function PricingPage() {
  return (
    <div className="page pricing-page">
      <div className="section-head">
        <div>
          <div className="kicker">Pricing</div>
          <h2>Simple plans that grow with your showroom</h2>
          <p className="lead">
            Start with mobile-only billing and add desktop, labels, and roles as you expand. Choose a
            plan that matches your store size; exact prices can be shared on request.
          </p>
        </div>
        <div className="pill soft">Talk to us for pricing</div>
      </div>
      <div className="card-grid card-grid-3">
        {plans.map((plan) => (
          <div
            className={plan.tag ? 'card plan-card plan-card-highlight' : 'card plan-card'}
            key={plan.name}
          >
            {plan.tag && <div className="plan-tag">{plan.tag}</div>}
            <div className="card-title">{plan.name}</div>
            <div className="card-text">{plan.blurb}</div>
            <ul className="card-list">
              {plan.bullets.map((item) => (
                <li key={item}>
                  <span className="check">v</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

