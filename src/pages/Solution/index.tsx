import './style.css'
import { solutionColumns } from '../../content'

export function SolutionPage() {
  return (
    <div className="page solution-page">
      <div className="section-head">
        <div>
          <div className="kicker">Solution</div>
          <h2>One system for owners, staff &amp; accountants</h2>
          <p className="lead">
            Firestore-backed roles, encrypted backups, and export tools keep your team aligned on
            the floor and in the back office.
          </p>
        </div>
        <div className="pill soft">Multi-user • Cloud sync • Offline friendly</div>
      </div>
      <div className="card-grid card-grid-2">
        {solutionColumns.map((col) => (
          <div className="card" key={col.title}>
            <div className="card-title">{col.title}</div>
            <ul className="card-list">
              {col.bullets.map((item) => (
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
