import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Logout } from 'src/components/Logout'

const navLinks = [
  { to: 'create', label: 'Create Comment' },
  { to: 'list', label: 'List Comments' },
  { to: 'find', label: 'Find Comment' },
]

const CommentNav: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Comment Management System</h1>
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
      <Logout />
    </div>
  )
}

export default CommentNav
