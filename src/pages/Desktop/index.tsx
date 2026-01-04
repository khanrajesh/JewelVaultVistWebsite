import './style.css'
import { desktopBullets } from '../../content'

export function DesktopPage() {
  return (
    <div className="page desktop-page">
      <div className="container">
        <section className="desktop-hero section-head">
          <div className="desktop-hero-copy">
            <div className="kicker">Desktop</div>
            <h2>Desktop console for counters & back office</h2>
            <p className="lead">
              Same Firestore store as mobile with large tables, exports, label printing and
              approvals. Perfect for counter billing, inventory teams and accountants who want the
              bigger screen.
            </p>
            <div className="pill-row">
              <div className="pill soft">Shared with mobile</div>
              <div className="pill soft">Bulk Excel / PDF</div>
              <div className="pill soft">Roles & approvals</div>
            </div>
            <div className="desktop-actions">
              <button className="btn btn-primary">Download desktop</button>
              <button className="btn btn-ghost">Book a walkthrough</button>
            </div>
          </div>
          <div className="desktop-panel card">
            <div className="card-title">Built for</div>
            <ul className="card-list">
              <li>
                <span className="check">✔</span>
                <span>Counter billing with keyboard + QR/barcode scanning</span>
              </li>
              <li>
                <span className="check">✔</span>
                <span>Inventory audits with multi-column grids and filters</span>
              </li>
              <li>
                <span className="check">✔</span>
                <span>Label/barcode printing straight from stock tables</span>
              </li>
              <li>
                <span className="check">✔</span>
                <span>Backup archives, Excel exports, audit foldering</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="card-grid card-grid-3">
          <div className="card">
            <div className="card-title">Counter & sales</div>
            <div className="card-text">
              Fast billing with shortcut keys, QR/Barcode search, draft/final invoices and PDF/print
              for customers.
            </div>
            <ul className="card-list">
              <li>
                <span className="check">✔</span>
                <span>Tax invoices, estimates, job cards and drafts</span>
              </li>
              <li>
                <span className="check">✔</span>
                <span>WhatsApp/email share directly from desktop</span>
              </li>
              <li>
                <span className="check">✔</span>
                <span>Supports gold/diamond/silver pricing & labour</span>
              </li>
            </ul>
          </div>

          <div className="card">
            <div className="card-title">Inventory, labels & purchasing</div>
            <div className="card-text">
              Manage items, categories and vendors; print labels; reconcile purchase orders and
              returns.
            </div>
            <ul className="card-list">
              <li>
                <span className="check">✔</span>
                <span>Bulk Excel import/export with templates</span>
              </li>
              <li>
                <span className="check">✔</span>
                <span>Label profiles for ZPL/TSPL/ESC/POS printers</span>
              </li>
              <li>
                <span className="check">✔</span>
                <span>Vendor purchase, GRN and returns tracking</span>
              </li>
            </ul>
          </div>

          <div className="card">
            <div className="card-title">Back office, audit & backups</div>
            <div className="card-text">
              Owner and accountant view with roles, approvals, audit trails and secure backups.
            </div>
            <ul className="card-list">
              <li>
                <span className="check">✔</span>
                <span>User roles with store-wise permissions</span>
              </li>
              <li>
                <span className="check">✔</span>
                <span>Download audit-ready folders (PDF + Excel)</span>
              </li>
              <li>
                <span className="check">✔</span>
                <span>Cloud + local backups and easy restore</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="card desktop-sync">
          <div className="card-title">Everything stays in sync</div>
          <ul className="card-list">
            {desktopBullets.map((item) => (
              <li key={item}>
                <span className="check">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
