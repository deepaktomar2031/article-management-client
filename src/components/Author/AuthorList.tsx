import React, { useEffect, useState } from 'react'
import { getAllAuthors } from '../../services/authorService'
import { IAuthor } from '../../types'

const AuthorList: React.FC = () => {
  const [authors, setAuthors] = useState<IAuthor[]>([])

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const data = await getAllAuthors()
        setAuthors(data)
      } catch (error) {
        console.error('Error fetching authors:', error)
      }
    }

    fetchAuthors()
  }, [])

  return (
    <div>
      <h2>Author List</h2>
      <table style={{ border: '3px solid black', width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '3px solid black', padding: '8px' }}>ID</th>
            <th style={{ border: '3px solid black', padding: '8px' }}>Name</th>
            <th style={{ border: '3px solid black', padding: '8px' }}>Email</th>
            <th style={{ border: '3px solid black', padding: '8px' }}>Role</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => (
            <tr key={author.id}>
              <td style={{ border: '3px solid black', padding: '8px' }}>{author.id}</td>
              <td style={{ border: '3px solid black', padding: '8px' }}>{author.name}</td>
              <td style={{ border: '3px solid black', padding: '8px' }}>{author.email}</td>
              <td style={{ border: '3px solid black', padding: '8px' }}>
                {author.isAdmin ? 'Admin' : 'User'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AuthorList
