import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import 'src/assets/styles/dashboard.css'

const Dashboard: React.FC = () => {
  const token = localStorage.getItem('access_token')

  if (token) {
    return <Navigate to="/home" />
  }

  return (
    <div className="dashboard-container">
      <h1>Welcome to Article Management System</h1>
      <p>Please log in or sign up to continue.</p>
      <div>
        <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
      </div>
    </div>
  )
}

export default Dashboard
