import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { getAuthorById } from 'src/services'
import { IAuthor } from 'src/types'

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

    if (!id) {
      setError('Please enter an author ID.')
      return
    }

    try {
      const data = await getAuthorById(Number(id))
      if (data) {
        setAuthor(data)
      } else {
        setError('No author found with this ID.')
      }
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        toast.error('No author found with this ID.')
      } else {
        setError('Error fetching author details.')
      }
    }
  }

  return (
    <div>
      <h2>Find Author by ID</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="authorId">Author ID:</label>
          <input
            type="text"
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
            <tbody>
              <tr>
                <td style={{ border: '3px solid black', padding: '8px', fontWeight: 'bold' }}>
                  Name:
                </td>
                <td style={{ border: '3px solid black', padding: '8px' }}>{author.name}</td>
              </tr>
              <tr>
                <td style={{ border: '3px solid black', padding: '8px', fontWeight: 'bold' }}>
                  Email:
                </td>
                <td style={{ border: '3px solid black', padding: '8px' }}>{author.email}</td>
              </tr>
              <tr>
                <td style={{ border: '3px solid black', padding: '8px', fontWeight: 'bold' }}>
                  Admin:
                </td>
                <td style={{ border: '3px solid black', padding: '8px' }}>
                  {author.isAdmin ? 'Yes' : 'No'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default AuthorDetails
