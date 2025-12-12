import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import type { NavItem } from '../content'

type Props = {
  items: NavItem[]
}

export function NavBar({ items }: Props) {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="nav-shell">
      <div className="nav-bar">
        <Link className="nav-brand" to="/" onClick={() => setOpen(false)}>
          <div className="nav-logo">JV</div>
          <div>
            <div className="nav-title">JewelVault</div>
            <div className="nav-sub">Jewellery billing &amp; inventory</div>
          </div>
        </Link>

        <nav className="nav-links">
          {items.map((item) => {
            const isPrimary = item.id === 'login'
            const active = location.pathname === item.path
            return (
              <Link
                key={item.id}
                className={
                  isPrimary
                    ? 'nav-link nav-primary'
                    : active
                      ? 'nav-link nav-active'
                      : 'nav-link'
                }
                to={item.path}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <button
          type="button"
          className="nav-toggle"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <nav className="nav-links nav-links-mobile">
          {items.map((item) => {
            const isPrimary = item.id === 'login'
            return (
              <Link
                key={item.id}
                className={isPrimary ? 'nav-link nav-primary' : 'nav-link'}
                to={item.path}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      )}
    </header>
  )
}
