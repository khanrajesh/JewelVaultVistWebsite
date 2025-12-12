import './style.css'
import { mobileFeatureCards } from '../../content'

export function MobileAppPage() {
  return (
    <div className="page mobile-page">
      <div className="section-head">
        <div>
          <div className="kicker">Try our Mobile App</div>
          <h2>JewelVault Mobile – billing from your phone</h2>
          <p className="lead">
            Android-first billing, inventory, QR/Barcode scanning, PDF invoices and Bluetooth
            printing (ESC/POS, ZPL, TSPL, CPCL) powered by the JewelVault mobile project.
          </p>
        </div>
        <div className="pill soft">Android • Bluetooth printing • Firebase</div>
      </div>
      <div className="card-grid card-grid-3">
        {mobileFeatureCards.map((card) => (
          <div className="card" key={card.title}>
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
    </div>
  )
}
