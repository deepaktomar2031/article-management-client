import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from 'src/services'
import { AuthBody } from 'src/types'

const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      const authBody: AuthBody = { email, password }
      const token = await loginUser(authBody)

      if (token) {
        localStorage.setItem('access_token', token)
        navigate('/home')
      }

      setError('Invalid email or password. Please try again.')
    } catch (error) {
      setError('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="author-form">
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-input"
            placeholder="Enter your password"
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="submit-btn">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
