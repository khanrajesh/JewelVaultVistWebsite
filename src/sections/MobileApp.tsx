import { mobileFeatureCards } from '../content'

export function MobileApp() {
  return (
    <section id="mobile-app" className="section">
      <div className="section-head">
        <div>
          <div className="section-kicker">Try our Mobile App</div>
          <h2 className="section-title">JewelVault Mobile – billing from your phone</h2>
          <p className="section-subtitle">
            Android-first experience with billing, inventory, QR/Barcode scanning, PDF invoices
            and powerful Bluetooth printing — built on the JewelVault mobile project.
          </p>
        </div>
        <div className="pill soft">Android • Bluetooth printing • Firebase</div>
      </div>

      <div className="card-grid card-grid-3">
        {mobileFeatureCards.map((card) => (
          <div key={card.title} className="card">
            <div className="card-title">{card.title}</div>
            <div className="card-text">{card.description}</div>
            <ul className="card-list">
              {card.bullets.map((item) => (
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
