import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { getAuthorById } from 'src/services'
import { IAuthor } from 'src/types'
import { LogErrorMessage } from 'src/utils'

const AuthorDetails: React.FC = () => {
  const [id, setId] = useState<string>('')
  const [author, setAuthor] = useState<IAuthor | null>(null)
  const [error, setError] = useState<string>('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setAuthor(null)

    if (!/^\d+$/.test(id)) {
      toast.error('Author ID must be a valid number.')
      return
    }

    try {
      const data = await getAuthorById(Number(id))
      if (data) setAuthor(data)
    } catch (error: unknown) {
      LogErrorMessage(error)
    }
  }

  const renderAuthorDetails = (author: IAuthor) => {
    const authorData = [
      { label: 'Name', value: author.name },
      { label: 'Email', value: author.email },
      { label: 'Admin', value: author.isAdmin ? 'Yes' : 'No' },
    ]

    return authorData.map((item, index) => (
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
      <h2>Find Author by ID</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="authorId">Author ID:</label>
          <input
            type="number"
            id="authorId"
            value={id}
            onChange={handleInputChange}
            placeholder="Enter author ID"
          />
        </div>
        <button type="submit">Find Author</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {author && (
        <div>
          <h3>Author Details</h3>
          <table style={{ border: '3px solid black', width: '100%', borderCollapse: 'collapse' }}>
            <tbody>{renderAuthorDetails(author)}</tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default AuthorDetails
