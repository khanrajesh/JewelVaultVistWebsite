import './style.css'
import { desktopBullets } from '../../content'

export function DesktopPage() {
  return (
    <div className="page desktop-page">
      <div className="section-head">
        <div>
          <div className="kicker">Desktop</div>
          <h2>Desktop view for counters and back office</h2>
          <p className="lead">
            Browser-based companion sharing the same Firestore data as mobile. Great for sales
            counters and owners/accountants who prefer larger reports.
          </p>
        </div>
        <div className="pill soft">Same data as mobile • Big screen friendly</div>
      </div>
      <div className="card">
        <div className="card-title">What it enables</div>
        <ul className="card-list">
          {desktopBullets.map((item) => (
            <li key={item}>
              <span className="check">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
