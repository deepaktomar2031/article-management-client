import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const AuthorNav: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Author Management</h1>
      <nav style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <NavLink
          to="create"
          style={{ textDecoration: 'none' }}
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          Create Author
        </NavLink>
        <NavLink
          to="list"
          style={{ textDecoration: 'none' }}
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          Author List
        </NavLink>
        {/* <NavLink
          to="find"
          style={{ textDecoration: 'none' }}
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          Find Author
        </NavLink> */}
      </nav>

      {/* Nested Routes */}
      <Outlet />
    </div>
  )
}

export default AuthorNav
