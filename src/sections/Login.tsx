import type { FormEvent } from 'react'
import { loginBullets } from '../content'

export function Login() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section id="login" className="section">
      <div className="section-head">
        <div>
          <div className="section-kicker">Login</div>
          <h2 className="section-title">Login for existing JewelVault customers</h2>
          <p className="section-subtitle">
            Preview of the web/desktop login. Connect it to your backend using the same mobile
            number and store structure already present in JewelVault Mobile.
          </p>
        </div>
        <div className="pill soft">Secure PIN / OTP • Roles applied on web</div>
      </div>

      <div className="card-grid card-grid-2">
        <div className="card">
          <div className="card-title">Business login</div>
          <form className="form-grid" onSubmit={handleSubmit}>
            <input className="input" placeholder="Registered mobile number" required />
            <input className="input" placeholder="Store name" required />
            <div className="form-actions">
              <button className="btn btn-primary" type="submit">
                Send OTP
              </button>
              <button className="btn btn-ghost" type="button">
                Use store PIN
              </button>
            </div>
            <div className="form-note">
              Biometric login stays in the Android app via JewelVault biometric auth.
            </div>
          </form>
        </div>

        <div className="card">
          <div className="card-title">How it connects to your data</div>
          <ul className="card-list">
            {loginBullets.map((item) => (
              <li key={item}>
                <span className="check">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
