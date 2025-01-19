import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { getCommentById } from 'src/services'
import { IComment } from 'src/types'
import { LogErrorMessage } from 'src/utils'

const CommentDetails: React.FC = () => {
  const [id, setId] = useState<string>('')
  const [comment, setComment] = useState<IComment | null>(null)
  const [error, setError] = useState<string>('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setComment(null)

    if (!/^\d+$/.test(id)) {
      toast.error('Comment ID must be a valid number.')
      return
    }

    try {
      const data = await getCommentById(Number(id))
      if (data) {
        setComment(data)
      } else {
        setError('No comment found with this ID.')
      }
    } catch (error: unknown) {
      LogErrorMessage(error)
    }
  }

  const renderCommentDetails = (comment: IComment) => {
    const commentData = [
      { label: 'Id', value: comment.id },
      { label: 'Author ID', value: comment.authorId },
      { label: 'Article ID', value: comment.articleId },
      { label: 'Content', value: comment.content },
      { label: 'Created At', value: new Date(comment.createdAt).toLocaleString() },
    ]

    return commentData.map((item, index) => (
      <tr key={index}>
        <td style={{ border: '3px solid black', padding: '8px', fontWeight: 'bold' }}>
          {item.label}:
        </td>
        <td style={{ border: '3px solid black', padding: '8px' }}>{item.value}</td>
      </tr>
    ))
  }

  return (
    <div>
      <h2>Find Comment by ID</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="commentId">Comment ID:</label>
          <input
            type="number"
            id="commentId"
            value={id}
            onChange={handleInputChange}
            placeholder="Enter comment ID"
            required
          />
        </div>
        <button type="submit">Find Comment</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {comment && (
        <div>
          <h3>Comment Details</h3>
          <table style={{ border: '3px solid black', width: '100%', borderCollapse: 'collapse' }}>
            <tbody>{renderCommentDetails(comment)}</tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default CommentDetails
