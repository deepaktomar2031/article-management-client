import React, { useEffect, useState } from 'react'
import { getAllArticles } from 'src/services'
import { IArticle } from 'src/types'

const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<IArticle[]>([])

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await getAllArticles()
        setArticles(data)
      } catch (error) {
        console.error('Error fetching articles:', error)
      }
    }

    fetchArticles()
  }, [])

  const renderArticleRows = (article: IArticle) => {
    const articleData = [
      { label: 'ID', value: article.id },
      { label: 'Title', value: article.title },
      { label: 'Content', value: article.content },
      { label: 'Author ID', value: article.authorId },
      { label: 'Created At', value: article.createdAt.toString() },
    ]

    return articleData.map((item, index) => (
      <td key={index} style={{ border: '3px solid black', padding: '8px' }}>
        {item.value}
      </td>
    ))
  }

  return (
    <div>
      <h2>Article List</h2>
      <table style={{ border: '3px solid black', width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '3px solid black', padding: '8px' }}>ID</th>
            <th style={{ border: '3px solid black', padding: '8px' }}>Title</th>
            <th style={{ border: '3px solid black', padding: '8px' }}>Content</th>
            <th style={{ border: '3px solid black', padding: '8px' }}>Author ID</th>
            <th style={{ border: '3px solid black', padding: '8px' }}>Created At</th>
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
