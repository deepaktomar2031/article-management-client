import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavigateButton: React.FC = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/home')
  }

  return (
    <div>
      <br />
      <button onClick={handleClick}>Home</button>
    </div>
  )
}

export default NavigateButton
