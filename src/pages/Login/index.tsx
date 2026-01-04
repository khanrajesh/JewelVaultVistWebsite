import './style.css'
import type { FormEvent } from 'react'
import { loginBullets } from '../../content'

export function LoginPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <div className="page login-page">
      <div className="container">
        <section className="login-hero section-head">
          <div>
            <div className="kicker">Login</div>
            <h2>Sign in with the same data as your app</h2>
            <p className="lead">
              Web/desktop login that respects the stores, users and roles defined in JewelVault
              Mobile. OTP or PIN based, ready to wire into your auth backend.
            </p>
            <div className="pill-row">
              <div className="pill soft">Shared Firestore store</div>
              <div className="pill soft">OTP / PIN</div>
              <div className="pill soft">Roles applied</div>
            </div>
          </div>
          <div className="card">
            <div className="card-title">How it connects to your data</div>
            <ul className="card-list">
              {loginBullets.map((item) => (
                <li key={item}>
                  <span className="check">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="card-grid card-grid-2 login-grid">
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
                Biometric login stays in the Android app; web supports OTP or secure store PIN.
              </div>
            </form>
          </div>

          <div className="card">
            <div className="card-title">Security & visibility</div>
            <ul className="card-list">
              <li>
                <span className="check">✔</span>
                <span>Respects user roles (owner / manager / staff)</span>
              </li>
              <li>
                <span className="check">✔</span>
                <span>Runs with the same Firestore security rules as mobile</span>
              </li>
              <li>
                <span className="check">✔</span>
                <span>Logs activity for audit and approvals</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
