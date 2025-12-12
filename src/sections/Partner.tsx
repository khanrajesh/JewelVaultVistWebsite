import type { FormEvent } from 'react'
import { partnerBullets } from '../content'

export function Partner() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section id="partners" className="section">
      <div className="section-head">
        <div>
          <div className="section-kicker">Partner with us</div>
          <h2 className="section-title">Resellers, consultants and associations welcome</h2>
          <p className="section-subtitle">
            Work with jewellery shops or accounting clients? Bring JewelVault to them and grow
            together.
          </p>
        </div>
        <div className="pill soft">Channel partners • IT vendors • Advisors</div>
      </div>

      <div className="card-grid card-grid-2">
        <div className="card">
          <div className="card-title">Who can partner</div>
          <ul className="card-list">
            {partnerBullets.map((item) => (
              <li key={item}>
                <span className="check">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <div className="card-title">Partner enquiry</div>
          <form className="form-grid" onSubmit={handleSubmit}>
            <input className="input" placeholder="Your name" required />
            <input className="input" placeholder="Mobile / WhatsApp" required />
            <textarea
              className="input textarea"
              placeholder="City, client type, and how you work with them"
              required
            />
            <button className="btn btn-primary" type="submit">
              Submit enquiry
            </button>
            <div className="form-note">
              Wire this to your email / CRM / WhatsApp endpoint when ready.
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
