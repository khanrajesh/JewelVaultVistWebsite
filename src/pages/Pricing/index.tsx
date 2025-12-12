import './style.css'
import { pricingPlans } from '../../content'

export function PricingPage() {
  return (
    <div className="page pricing-page">
      <div className="section-head">
        <div>
          <div className="kicker">Pricing</div>
          <h2>Simple plans that grow with your showroom</h2>
          <p className="lead">
            Start with mobile-only billing and add desktop and advanced roles as you expand. Styled
            like jewellery-focused plans — fill in exact pricing later.
          </p>
        </div>
        <div className="pill soft">Contact us for exact amounts</div>
      </div>
      <div className="card-grid card-grid-3">
        {pricingPlans.map((plan) => (
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
                  <span className="check">✓</span>
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
