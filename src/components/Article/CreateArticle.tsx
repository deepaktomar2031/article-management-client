import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { createArticle } from 'src/services'
import 'src/assets/styles/common.css'

const CreateArticle: React.FC = () => {
  const [formData, setFormData] = useState({ title: '', content: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      await createArticle(formData)
      toast.success('Article created successfully!')
      setFormData({ title: '', content: '' })
    } catch (error) {
      console.error('Error creating article:', error)
    }
  }

  const formFields = [
    {
      id: 'title',
      label: 'Title',
      type: 'text',
      value: formData.title,
      placeholder: "Enter article's title",
    },
    {
      id: 'content',
      label: 'Content',
      type: 'text',
      value: formData.content,
      placeholder: "Enter article's content",
    },
  ]

  return (
    <div className="form-container">
      <h2>Create New Article</h2>
      <form onSubmit={handleSubmit} className="article-form">
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
          Create Article
        </button>
      </form>
    </div>
  )
}

export default CreateArticle
