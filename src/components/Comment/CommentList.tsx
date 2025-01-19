import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { getAllComments } from 'src/services'
import { IComment } from 'src/types'
import { LogErrorMessage } from 'src/utils'

const CommentList: React.FC = () => {
  const [Comments, setComments] = useState<IComment[]>([])

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await getAllComments()
        if (data) {
          setComments(data)
        } else {
          toast.error('No comment found.')
        }
      } catch (error: unknown) {
        LogErrorMessage(error)
      }
    }

    fetchComments()
  }, [])

  const renderCommentRows = (comment: IComment) => {
    const CommentData = [
      { label: 'ID', value: comment.id },
      { label: 'Author ID', value: comment.authorId },
      { label: 'Article ID', value: comment.articleId },
      { label: 'Content', value: comment.content },
      { label: 'Created At', value: new Date(comment.createdAt).toLocaleString() },
    ]

    return CommentData.map((item, index) => (
      <td key={index} style={{ border: '3px solid black', padding: '8px' }}>
        {item.value}
      </td>
    ))
  }

  return (
    <div>
      <h2>Comment List</h2>
      <table style={{ border: '3px solid black', width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '3px solid black', padding: '8px' }}>ID</th>
            <th style={{ border: '3px solid black', padding: '8px' }}>Author ID</th>
            <th style={{ border: '3px solid black', padding: '8px' }}>Article ID</th>
            <th style={{ border: '3px solid black', padding: '8px' }}>Content</th>
            <th style={{ border: '3px solid black', padding: '8px' }}>Created At</th>
          </tr>
        </thead>
        <tbody>
          {Comments.map((comment) => (
            <tr key={comment.id}>{renderCommentRows(comment)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CommentList
