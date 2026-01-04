import './style.css'
import type { FormEvent } from 'react'
import { partnerBullets } from '../../content'

export function PartnerPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <div className="page partner-page">
      <div className="container">
        <section className="partner-hero section-head">
          <div>
            <div className="kicker">Partner with us</div>
            <h2>Bring JewelVault to your jewellery network</h2>
            <p className="lead">
              Resellers, auditors, IT vendors and associations can bundle JewelVault with their
              clients. Add software revenue, earn recurring commissions and deliver a proven billing
              stack.
            </p>
            <div className="pill-row">
              <div className="pill soft">Recurring commissions</div>
              <div className="pill soft">Co-branded onboarding</div>
              <div className="pill soft">Priority support</div>
            </div>
          </div>
          <div className="card">
            <div className="card-title">Who should partner</div>
            <ul className="card-list">
              {partnerBullets.map((item) => (
                <li key={item}>
                  <span className="check">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="card-grid card-grid-2 partner-grid">
          <div className="card">
            <div className="card-title">What you get</div>
            <ul className="card-list">
              <li>
                <span className="check">✔</span>
                <span>Demo kit, pricing sheets and proposal templates</span>
              </li>
              <li>
                <span className="check">✔</span>
                <span>Co-selling support for key accounts</span>
              </li>
              <li>
                <span className="check">✔</span>
                <span>Training on billing, inventory, khata and audit exports</span>
              </li>
              <li>
                <span className="check">✔</span>
                <span>Early access to new modules and label profiles</span>
              </li>
            </ul>
          </div>

          <div className="card">
            <div className="card-title">Partner enquiry</div>
            <form className="form-grid" onSubmit={handleSubmit}>
              <input className="input" placeholder="Your name" required />
              <input className="input" placeholder="Mobile / WhatsApp" required />
              <input className="input" placeholder="Company / firm" required />
              <textarea
                className="input textarea"
                placeholder="City, customer base, and how you plan to sell JewelVault"
                required
              />
              <button className="btn btn-primary" type="submit">
                Submit enquiry
              </button>
              <div className="form-note">
                We respond within one business day with the partner playbook and pricing.
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}
