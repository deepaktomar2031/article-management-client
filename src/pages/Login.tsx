import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setToken, loginUser } from 'src/services'
import { AuthBody } from 'src/types'

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      const authBody: AuthBody = { email: formData.email, password: formData.password }
      const token = await loginUser(authBody)

      if (token) {
        setToken(token)
        navigate('/home')
      } else {
        setError('Invalid email or password. Please try again.')
      }
    } catch (error) {
      setError('Something went wrong. Please try again.')
    }
  }

  const formFields = [
    {
      id: 'email',
      label: 'Email',
      type: 'email',
      value: formData.email,
      placeholder: 'Enter your email',
    },
    {
      id: 'password',
      label: 'Password',
      type: 'password',
      value: formData.password,
      placeholder: 'Enter your password',
    },
  ]

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="author-form">
        {formFields.map(({ id, label, type, value, placeholder }) => (
          <div className="form-group" key={id}>
            <label htmlFor={id} className="form-label">
              {label}:
            </label>
            <input
              id={id}
              type={type}
              name={id}
              value={value}
              onChange={handleChange}
              required
              className="form-input"
              placeholder={placeholder}
            />
          </div>
        ))}
        {error && <p className="error">{error}</p>}
        <button type="submit" className="submit-btn">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
