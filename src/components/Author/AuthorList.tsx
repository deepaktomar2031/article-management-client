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

  const authorHeaders = ['ID', 'Name', 'Email', 'Role']

  const renderAuthorRows = (author: IAuthor) => {
    const authorValues = [author.id, author.name, author.email, author.isAdmin ? 'Admin' : 'User']

    return authorValues.map((value, index) => (
      <td key={index} style={{ border: '3px solid black', padding: '8px' }}>
        {value}
      </td>
    ))
  }

  return (
    <div>
      <h2>Author List</h2>
      <table style={{ border: '3px solid black', width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            {authorHeaders.map((header, index) => (
              <th key={index} style={{ border: '3px solid black', padding: '8px' }}>
                {header}
              </th>
            ))}
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
