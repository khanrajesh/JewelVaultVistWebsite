import { pricingPlans } from '../content'

export function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="section-head">
        <div>
          <div className="section-kicker">Pricing</div>
          <h2 className="section-title">Simple plans that grow with your showroom</h2>
          <p className="section-subtitle">
            Start with mobile-only billing and add desktop and advanced roles as you expand. Pick a
            tier similar to jewellery-focused plans you see on Vyapar-style pages.
          </p>
        </div>
        <div className="pill soft">Contact us for exact amounts</div>
      </div>

      <div className="card-grid card-grid-3">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={plan.tag ? 'card plan-card plan-card-highlight' : 'card plan-card'}
          >
            {plan.tag && <div className="plan-tag">{plan.tag}</div>}
            <div className="card-title">{plan.name}</div>
            <div className="card-text">{plan.blurb}</div>
            <ul className="card-list">
              {plan.bullets.map((item) => (
                <li key={item}>
                  <span className="check">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
