import React from 'react'
import { useNavigate } from 'react-router-dom'
import { removeToken } from 'src/services'

const Logout: React.FC = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    removeToken()
    navigate('/dashboard')
  }

  return (
    <div>
      <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
