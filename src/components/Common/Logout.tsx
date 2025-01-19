import React from 'react'
import { useNavigate } from 'react-router-dom'
import { removeToken } from 'src/services'

const Logout: React.FC = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    removeToken()
    navigate('/dashboard')
  }

  return <button onClick={handleLogout}>Logout</button>
}

export default Logout
