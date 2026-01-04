import './style.css'

const pillars = [
  {
    title: 'Jewellery-first workflows',
    bullets: [
      'Purity, stones, making charges, and labour built into billing',
      'Inventory tuned for categories, subcategories, sizes, and images',
      'Labels, QR/barcodes, and receipts designed for jewellery counters',
    ],
  },
  {
    title: 'Data safety & audit',
    bullets: [
      'Cloud + local backups with restore points',
      'Item/invoice exports for auditors with clean foldering',
      'Roles, PIN/biometric, Firestore rules per user/store',
    ],
  },
  {
    title: 'Speed on the floor',
    bullets: [
      'Fast billing with QR/barcode scan and draft/final invoices',
      'Bluetooth printing for labels/receipts; multiple printer languages',
      'Offline-friendly with sync when connected',
    ],
  },
  {
    title: 'Built for teams',
    bullets: [
      'Owner/manager/staff/accountant roles mapped to permissions',
      'Mobile + desktop companion views for counter and back office',
      'Customer khata with reminders, ledgers, and histories',
    ],
  },
]

export function AboutPage() {
  return (
    <div className="page about-page">
      <div className="section-head">
        <div>
          <div className="kicker">About</div>
          <h2>Built around jewellery workflows</h2>
          <p className="lead">
            JewelVault is engineered for purity, stones, making charges, labels, backups, and
            khata—far beyond a generic POS. It mirrors the priorities in the JewelVault mobile and
            desktop apps.
          </p>
        </div>
        <div className="pill soft">Gold · Diamonds · Silver · Making charges</div>
      </div>

      <div className="card-grid card-grid-2">
        {pillars.map((pillar) => (
          <div className="card" key={pillar.title}>
            <div className="card-title">{pillar.title}</div>
            <ul className="card-list">
              {pillar.bullets.map((item) => (
                <li key={item}>
                  <span className="check">•</span>
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
