type Props = {
  highlights: string[]
}

export function Hero({ highlights }: Props) {
  return (
    <section id="home" className="section hero">
      <div className="hero-copy">
        <div className="section-kicker">Jewellery shop billing made simple</div>
        <h1 className="hero-title">
          Billing, inventory &amp; labels built for jewellery businesses.
        </h1>
        <p className="hero-lead">
          JewelVault combines your mobile-first billing, inventory, QR labels,
          Bluetooth printing and secure backups into one experience. Desktop
          view keeps counters and back office in sync.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#mobile-app">
            Try our Mobile App
          </a>
          <a className="btn btn-ghost" href="#solution">
            Explore solution
          </a>
        </div>
        <ul className="hero-highlights">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="hero-panel" aria-hidden="true">
        <div className="hero-card">
          <div className="hero-card-head">
            <div>
              <div className="pill">Live store</div>
              <div className="hero-card-title">JewelVault Counter</div>
            </div>
            <div className="hero-chip">Backup on</div>
          </div>
          <div className="hero-grid">
            <div className="hero-stat">
              <div className="hero-stat-label">Invoices today</div>
              <div className="hero-stat-value">27</div>
              <div className="hero-stat-note">GST, estimate &amp; drafts</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-label">Items in stock</div>
              <div className="hero-stat-value">4,382</div>
              <div className="hero-stat-note">Synced with cloud</div>
            </div>
          </div>
          <div className="hero-checklist">
            <div className="hero-check">✓</div>
            <div>QR / barcode add-to-bill from mobile camera</div>
          </div>
          <div className="hero-checklist">
            <div className="hero-check">✓</div>
            <div>
              Bluetooth printing for labels &amp; receipts (ESC/POS, ZPL, TSPL, CPCL)
            </div>
          </div>
          <div className="hero-checklist">
            <div className="hero-check">✓</div>
            <div>Exports to Excel + Google Sheets via built-in tools</div>
          </div>
          <div className="hero-ribbon">Offline friendly • Cloud backups when online</div>
        </div>
      </div>
    </section>
  )
}
