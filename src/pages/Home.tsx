import React from 'react'
import { Link } from 'react-router-dom'
import { Logout } from 'src/components/Common'

const Home: React.FC = () => {
  const links = [
    { to: '/home/author', label: 'Author Management' },
    { to: '/home/article', label: 'Article Management' },
    { to: '/home/comment', label: 'Comment Management' },
  ]

  return (
    <div style={{ padding: '20px' }}>
      <h2>Navigation</h2>
      <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
        {links.map(({ to, label }) => (
          <Link key={to} to={to} style={{ textDecoration: 'none', color: 'blue' }}>
            {label}
          </Link>
        ))}
      </div>
      <br />
      <Logout />
    </div>
  )
}

export default Home
