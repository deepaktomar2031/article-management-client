import React, { useState } from 'react'
import { createAuthor } from '../../services/authorService'
import '../../assets/styles/CreateAuthor.css'

const CreateAuthor: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      await createAuthor({ name, email, password })
      alert('Author created successfully!')
      setName('')
      setEmail('')
      setPassword('')
    } catch (error) {
      console.error('Error creating author:', error)
    }
  }

  return (
    <div className="form-container">
      <h2>Create New Author</h2>
      <form onSubmit={handleSubmit} className="author-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-input"
            placeholder="Enter author's name"
          />
        </div>
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
            placeholder="Enter author's email"
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
            placeholder="Enter password"
          />
        </div>
        <button type="submit" className="submit-btn">
          Create Author
        </button>
      </form>
    </div>
  )
}

export default CreateAuthor
