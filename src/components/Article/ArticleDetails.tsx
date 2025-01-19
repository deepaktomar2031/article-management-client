import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { getArticleById } from 'src/services'
import { IArticle } from 'src/types'
import { LogErrorMessage } from 'src/utils'

const ArticleDetails: React.FC = () => {
  const [id, setId] = useState<string>('')
  const [article, setArticle] = useState<IArticle | null>(null)
  const [error, setError] = useState<string>('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setArticle(null)

    if (!/^\d+$/.test(id)) {
      toast.error('Article ID must be a valid number.')
      return
    }

    try {
      const data = await getArticleById(Number(id))
      if (data) {
        setArticle(data)
      } else {
        toast.error('No article found with this ID.')
      }
    } catch (error: unknown) {
      LogErrorMessage(error)
    }
  }

  const renderArticleDetails = (article: IArticle) => {
    const articleData = [
      { label: 'Id', value: article.id },
      { label: 'Title', value: article.title },
      { label: 'Content', value: article.content },
      { label: 'Author ID', value: article.authorId },
      { label: 'Created At', value: new Date(article.createdAt).toLocaleString() },
    ]

    return articleData.map((item, index) => (
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
      <h2>Find Article by ID</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="articleId">Article ID:</label>
          <input
            type="number"
            id="articleId"
            value={id}
            onChange={handleInputChange}
            placeholder="Enter article ID"
          />
        </div>
        <button type="submit">Find Article</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {article && (
        <div>
          <h3>Article Details</h3>
          <table style={{ border: '3px solid black', width: '100%', borderCollapse: 'collapse' }}>
            <tbody>{renderArticleDetails(article)}</tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default ArticleDetails
