import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { NavigateButton, Logout } from 'src/components/Common'

const navLinks = [
  { to: 'create', label: 'Create Article' },
  { to: 'list', label: 'List Articles' },
  { to: 'find', label: 'Find Article' },
]

const ArticleNav: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Article Management System</h1>
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

export default ArticleNav
