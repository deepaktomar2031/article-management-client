import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ArticleNav from './ArticleNav'
import ArticleList from './ArticleList'

const ArticleModule: React.FC = () => {
  return (
    <div>
      <ArticleNav />
      <Routes>
        <Route path="list" element={<ArticleList />} />
      </Routes>
    </div>
  )
}

export default ArticleModule
