import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { createAuthor } from 'src/services'
import 'src/assets/styles/author.css'

const CreateAuthor: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      await createAuthor(formData)
      toast.success('Author created successfully!')
      setFormData({ name: '', email: '', password: '' })
    } catch (error) {
      console.error('Error creating author:', error)
    }
  }

  const formFields = [
    {
      id: 'name',
      label: 'Name',
      type: 'text',
      value: formData.name,
      placeholder: "Enter author's name",
    },
    {
      id: 'email',
      label: 'Email',
      type: 'email',
      value: formData.email,
      placeholder: "Enter author's email",
    },
    {
      id: 'password',
      label: 'Password',
      type: 'password',
      value: formData.password,
      placeholder: 'Enter password',
    },
  ]

  return (
    <div className="form-container">
      <h2>Create New Author</h2>
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
        <button type="submit" className="submit-btn">
          Create Author
        </button>
      </form>
    </div>
  )
}

export default CreateAuthor
