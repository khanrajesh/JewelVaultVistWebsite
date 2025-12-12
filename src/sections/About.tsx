export function About() {
  return (
    <section id="about" className="section">
      <div className="section-head">
        <div>
          <div className="section-kicker">About</div>
          <h2 className="section-title">Built around jewellery workflows</h2>
          <p className="section-subtitle">
            JewelVault is engineered for purity, stones, making charges, label formats and backups
            — not a generic POS. It mirrors the same priorities found in the JewelVault mobile
            project.
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
              <span>Inventory screens tuned for categories, purity and tags</span>
            </li>
            <li>
              <span className="check">✓</span>
              <span>Backup and export live inside the app</span>
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
    </section>
  )
}
