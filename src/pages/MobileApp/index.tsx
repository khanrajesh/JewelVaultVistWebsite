import './style.css'
import { mobileFeatureCards } from '../../content'

export function MobileAppPage() {
  return (
    <div className="page mobile-page">
      <div className="container">
        <section className="mobile-hero section-head">
          <div className="mobile-hero-copy">
            <div className="kicker">Try our Mobile App</div>
            <h2>JewelVault Mobile — billing from your phone</h2>
            <p className="lead">
              Android-first companion with billing, inventory, khata, label printing and backups.
              Works offline-first with Firestore sync when you are back online.
            </p>
            <div className="pill-row">
              <div className="pill soft">QR / Barcode</div>
              <div className="pill soft">Bluetooth printing</div>
              <div className="pill soft">Cloud + local backups</div>
            </div>
          </div>
          <div className="mobile-cta card">
            <div className="card-title">Why teams love it</div>
            <ul className="card-list">
              <li>
                <span className="check">✔</span>
                <span>Counter billing, PDF share and WhatsApp in one tap</span>
              </li>
              <li>
                <span className="check">✔</span>
                <span>Inventory search by design, barcode, purity and category</span>
              </li>
              <li>
                <span className="check">✔</span>
                <span>Khata/ledger view with reminders and collection exports</span>
              </li>
              <li>
                <span className="check">✔</span>
                <span>Label printing to ZPL / TSPL / ESC / POS &amp; CPCL printers</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="card-grid card-grid-3">
          {mobileFeatureCards.map((card) => (
            <div className="card" key={card.title}>
              <div className="card-title">{card.title}</div>
              <div className="card-text">{card.description}</div>
              <ul className="card-list">
                {card.bullets.map((item) => (
                  <li key={item}>
                    <span className="check">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="card mobile-note">
          <div className="card-title">Built on the JewelVault Mobile project</div>
          <div className="card-text">
            Powered by Firestore, PdfUtils, ImportItems helpers, label profiles and DAO-backed
            modules for customers, khatabook, inventory, purchases, printers and backups. Works
            offline and syncs safely when connectivity returns.
          </div>
        </section>
      </div>
    </div>
  )
}
