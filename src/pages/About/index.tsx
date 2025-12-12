import './style.css'

export function AboutPage() {
  return (
    <div className="page about-page">
      <div className="section-head">
        <div>
          <div className="kicker">About</div>
          <h2>Built around jewellery workflows</h2>
          <p className="lead">
            JewelVault is engineered for purity, stones, making charges, label formats and backups —
            not a generic POS. It mirrors the priorities in the JewelVault mobile app.
          </p>
        </div>
        <div className="pill soft">Gold • Diamonds • Silver • Making charges</div>
      </div>

      <div className="card-grid card-grid-2">
        <div className="card">
          <div className="card-title">Why it fits jewellers</div>
          <ul className="card-list">
            <li>
              <span className="check">✓</span>
              <span>Supports estimates, invoices, tax invoices and drafts</span>
            </li>
            <li>
              <span className="check">✓</span>
              <span>Inventory tuned for categories, purity and tags</span>
            </li>
            <li>
              <span className="check">✓</span>
              <span>Backup and export built into the app</span>
            </li>
          </ul>
        </div>

        <div className="card">
          <div className="card-title">Tech foundation</div>
          <ul className="card-list">
            <li>
              <span className="check">✓</span>
              <span>Modern Android (Compose) front-end</span>
            </li>
            <li>
              <span className="check">✓</span>
              <span>Firebase Firestore + Storage backend</span>
            </li>
            <li>
              <span className="check">✓</span>
              <span>Robust backup &amp; export utilities</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
