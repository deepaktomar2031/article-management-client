import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { getAllAuthors } from 'src/services'
import { IAuthor } from 'src/types'
import { LogErrorMessage } from 'src/utils'

const AuthorList: React.FC = () => {
  const [authors, setAuthors] = useState<IAuthor[]>([])

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const data = await getAllAuthors()
        if (data) {
          setAuthors(data)
        } else {
          toast.error('No author found with this ID.')
        }
      } catch (error: unknown) {
        LogErrorMessage(error)
      }
    }

    fetchAuthors()
  }, [])

  const renderAuthorRows = (author: IAuthor) => {
    const authorData = [
      { label: 'ID', value: author.id },
      { label: 'Name', value: author.name },
      { label: 'Email', value: author.email },
      { label: 'Role', value: author.isAdmin ? 'Admin' : 'User' },
    ]

    return authorData.map((item, index) => (
      <td key={index} style={{ border: '3px solid black', padding: '8px' }}>
        {item.value}
      </td>
    ))
  }

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
            <tr key={author.id}>{renderAuthorRows(author)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AuthorList
