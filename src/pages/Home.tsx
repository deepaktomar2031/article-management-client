import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to the Author Management Module</h1>
      <p>This module allows you to manage authors effectively.</p>

      <h2>Navigation</h2>
      <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
        <Link to="/home/author" style={{ textDecoration: 'none', color: 'blue' }}>
          Go to Author Management
        </Link>
      </div>
    </div>
  )
}

export default Home
