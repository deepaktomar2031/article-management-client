import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAuthorById } from '../../services/authorService'
import { IAuthor } from '../../types'

const AuthorDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [author, setAuthor] = useState<IAuthor | null>(null)

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const data = await getAuthorById(Number(id))
        setAuthor(data)
      } catch (error) {
        console.error('Error fetching author details:', error)
      }
    }

    fetchAuthor()
  }, [id])

  if (!author) {
    return <p>Loading author details...</p>
  }

  return (
    <div>
      <h2>Author Details</h2>
      <table style={{ border: '3px solid black', width: '100%', borderCollapse: 'collapse' }}>
        <tbody>
          <tr>
            <td style={{ border: '3px solid black', padding: '8px', fontWeight: 'bold' }}>Name:</td>
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
  )
}

export default AuthorDetails
