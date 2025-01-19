import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { getAllComments } from 'src/services'
import { IComment } from 'src/types'
import { LogErrorMessage } from 'src/utils'

const CommentList: React.FC = () => {
  const [comments, setComments] = useState<IComment[]>([])

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

  const commentHeaders = ['ID', 'Author ID', 'Article ID', 'Content', 'Created At']

  const renderCommentRows = (comment: IComment) => {
    const commentValues = [
      comment.id,
      comment.authorId,
      comment.articleId,
      comment.content,
      new Date(comment.createdAt).toLocaleString(),
    ]

    return commentValues.map((value, index) => (
      <td key={index} style={{ border: '3px solid black', padding: '8px' }}>
        {value}
      </td>
    ))
  }

  return (
    <div>
      <h2>Comment List</h2>
      <table style={{ border: '3px solid black', width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            {commentHeaders.map((header, index) => (
              <th key={index} style={{ border: '3px solid black', padding: '8px' }}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => (
            <tr key={comment.id}>{renderCommentRows(comment)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CommentList
