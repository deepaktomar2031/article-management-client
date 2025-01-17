import React from 'react'
import { Link } from 'react-router-dom'
import 'src/assets/styles/dashboard.css'

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <h1>Welcome to the Dashboard</h1>
      <p>Select an option to navigate:</p>
      <ul className="dashboard-links">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/authors">View Authors</Link>
        </li>
        <li>
          <Link to="/articles">View Articles</Link>
        </li>
        <li>
          <Link to="/comments">View Comments</Link>
        </li>
      </ul>
    </div>
  )
}

export default Dashboard
