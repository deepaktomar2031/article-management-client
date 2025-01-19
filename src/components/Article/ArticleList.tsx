import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { getAllArticles, toggleFavorite } from 'src/services'
import { IArticle } from 'src/types'
import { LogErrorMessage } from 'src/utils'

const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<IArticle[]>([])

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await getAllArticles()
        if (data) {
          setArticles(data)
        } else {
          toast.error('No articles found.')
        }
      } catch (error: unknown) {
        LogErrorMessage(error)
      }
    }

    fetchArticles()
  }, [])

  const handleFavoriteToggle = async (articleId: number) => {
    try {
      const { message } = await toggleFavorite(articleId)
      toast.success(message)
      setArticles((prevArticles) =>
        prevArticles.map((article) =>
          article.id === articleId ? { ...article, favorite: !article.favorite } : article
        )
      )
    } catch (error: unknown) {
      LogErrorMessage(error)
    }
  }

  const articleHeaders = ['Favorite', 'ID', 'Title', 'Content', 'Author ID', 'Created At']

  const renderArticleRows = (article: IArticle) => {
    const articleValues = [
      <input
        type="checkbox"
        checked={article.favorite}
        onChange={() => handleFavoriteToggle(article.id)}
      />,
      article.id,
      article.title,
      article.content,
      article.authorId,
      new Date(article.createdAt).toLocaleString(),
    ]

    return articleValues.map((value, index) => (
      <td key={index} style={{ border: '3px solid black', padding: '8px' }}>
        {value}
      </td>
    ))
  }

  return (
    <div>
      <h2>Article List</h2>
      <table style={{ border: '3px solid black', width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            {articleHeaders.map((header, index) => (
              <th key={index} style={{ border: '3px solid black', padding: '8px' }}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.id}>{renderArticleRows(article)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ArticleList
