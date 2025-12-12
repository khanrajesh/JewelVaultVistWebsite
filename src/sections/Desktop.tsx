import { desktopBullets } from '../content'

export function Desktop() {
  return (
    <section id="desktop" className="section">
      <div className="section-head">
        <div>
          <div className="section-kicker">Desktop</div>
          <h2 className="section-title">Desktop view for counters and back office</h2>
          <p className="section-subtitle">
            A browser-based companion that shares the same Firestore data as your mobile app, so
            owners and accountants can work comfortably with detailed tables and exports.
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
    </section>
  )
}
