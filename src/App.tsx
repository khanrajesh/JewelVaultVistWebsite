import './App.css'
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import { navItems } from './content'
import { NavBar } from './sections/NavBar'
import { HomePage } from './pages/Home'
import { MobileAppPage } from './pages/MobileApp'
import { SolutionPage } from './pages/Solution'
import { PricingPage } from './pages/Pricing'
import { AboutPage } from './pages/About'
import { DesktopPage } from './pages/Desktop'
import { PartnerPage } from './pages/Partner'
import { LoginPage } from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <div className="page-shell">
        <NavBar items={navItems} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mobile-app" element={<MobileAppPage />} />
            <Route path="/solution" element={<SolutionPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/desktop" element={<DesktopPage />} />
            <Route path="/partners" element={<PartnerPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="footer-inner">
            <div>© {new Date().getFullYear()} JewelVault. All rights reserved.</div>
            <div className="footer-links">
              <Link to="/pricing">Pricing</Link>
              <Link to="/partners">Partner</Link>
              <Link to="/login">Login</Link>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
