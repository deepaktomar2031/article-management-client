import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { NavigateButton, Logout } from 'src/components/Common'

const navLinks = [
  { to: 'list', label: 'Author List' },
  { to: 'find', label: 'Find Author' },
]

const AuthorNav: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Author Management</h1>
      <nav style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            style={{ textDecoration: 'none' }}
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            {label}
          </NavLink>
        ))}
      </nav>
      <Outlet />
      <NavigateButton />
      <Logout />
    </div>
  )
}

export default AuthorNav
