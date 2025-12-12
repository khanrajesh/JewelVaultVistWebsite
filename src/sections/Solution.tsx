import { solutionColumns } from '../content'

export function Solution() {
  return (
    <section id="solution" className="section">
      <div className="section-head">
        <div>
          <div className="section-kicker">Solution</div>
          <h2 className="section-title">One system for owners, staff &amp; accountants</h2>
          <p className="section-subtitle">
            Firestore-backed roles, encrypted backups, and export tools keep your team aligned —
            whether they are on the showroom floor or in the back office.
          </p>
        </div>
        <div className="pill soft">Multi-user • Cloud sync • Offline friendly</div>
      </div>

      <div className="card-grid card-grid-2">
        {solutionColumns.map((col) => (
          <div key={col.title} className="card">
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
    </section>
  )
}
