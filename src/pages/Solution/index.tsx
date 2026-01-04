import './style.css'

const modules = [
  {
    title: 'Billing & invoicing',
    bullets: [
      'GST/non-GST invoices, estimates, drafts, delivery challans',
      'Showroom-style billing with gold/diamond/silver/labour/stone',
      'PDF + WhatsApp/email sharing; round-offs and tax slabs handled',
    ],
  },
  {
    title: 'Inventory & stock',
    bullets: [
      'Items with purity, weight, size, images, categories/subcategories',
      'Batches, ageing, low-stock alerts; QR/barcode search and scan',
      'Imports from Excel; exports for audit and stock checks',
    ],
  },
  {
    title: 'Customers & khata',
    bullets: [
      'Customer master with history and credit limits',
      'Khata books with outstanding/paid tracking and reminders',
      'Party-level ledgers for receivables and payables',
    ],
  },
  {
    title: 'Purchases & vendors',
    bullets: [
      'Purchase orders with items and exchanges',
      'Firm/seller master, bill-date filters, and vendor history',
      'Exports for reconciliation with suppliers',
    ],
  },
  {
    title: 'Labels & printing',
    bullets: [
      'Label templates/elements and print job management',
      'ESC/POS, ZPL, TSPL, CPCL printers; 100/80/58 mm sizes',
      'Receipts and jewellery labels with QR/barcode',
    ],
  },
  {
    title: 'Audit, backup & security',
    bullets: [
      'Item/invoice exports for auditors with clean foldering',
      'Cloud + local backups; restore points to avoid data loss',
      'Roles, PIN/biometric, Firestore rules per user/store',
    ],
  },
  {
    title: 'Multi-user, multi-device',
    bullets: [
      'Owner/manager/staff/accountant roles mapped to permissions',
      'Mobile + desktop companion views sharing the same store',
      'Offline-friendly with sync when connected',
    ],
  },
]

export function SolutionPage() {
  return (
    <div className="page solution-page">
      <div className="container solution-hero">
        <div>
          <div className="kicker">Solution</div>
          <h2>One system for billing, inventory, khata, and audit</h2>
          <p className="lead">
            JewelVault connects counter billing, inventory, customer khata, labels, and audit-ready
            exports across mobile and desktop—online or offline.
          </p>
          <div className="pill soft">Multi-user · Cloud sync · Offline friendly</div>
        </div>
      </div>

      <div className="container module-grid">
        {modules.map((mod) => (
          <div className="module-card" key={mod.title}>
            <div className="module-title">{mod.title}</div>
            <ul className="module-list">
              {mod.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container solution-cta">
        <div>
          <h3>See it tailored to your showroom</h3>
          <p>We can preload your items, categories, and customer ledgers into a demo workspace.</p>
        </div>
        <div className="cta-actions">
          <button type="button" className="btn primary">Book a walkthrough</button>
          <button type="button" className="btn ghost">Download desktop build</button>
        </div>
      </div>
    </div>
  )
}
