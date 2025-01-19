import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { createComment } from 'src/services'
import 'src/assets/styles/comment.css'

const CreateComment: React.FC = () => {
  const [formData, setFormData] = useState({ articleId: '', content: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      await createComment(formData)
      toast.success('Comment created successfully!')
      setFormData({ articleId: '', content: '' })
    } catch (error) {
      console.error('Error creating comment:', error)
    }
  }

  const formFields = [
    {
      id: 'articleId',
      label: 'ArticleId',
      type: 'number',
      value: Number(formData.articleId),
      placeholder: "Enter comment's article ID",
    },
    {
      id: 'content',
      label: 'Content',
      type: 'text',
      value: formData.content,
      placeholder: "Enter comment's content",
    },
  ]

  return (
    <div className="form-container">
      <h2>Create New Comment</h2>
      <form onSubmit={handleSubmit} className="comment-form">
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
          Create Comment
        </button>
      </form>
    </div>
  )
}

export default CreateComment
