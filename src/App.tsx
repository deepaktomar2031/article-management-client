import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Dashboard, Login, Home } from 'src/pages'
import { CreateAuthor, AuthorList, AuthorDetails, AuthorNav } from 'src/components/Author'
import { CreateArticle, ArticleList, ArticleDetails, ArticleNav } from 'src/components/Article'
import { CreateComment, CommentList, CommentDetails, CommentNav } from 'src/components/Comment'
import PrivateRoute from 'src/components/PrivateRoute'
import { ToastWrapper } from 'src/components/Toast'

const App: React.FC = () => {
  return (
    <Router>
      <ToastWrapper />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />

        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
        <Route path="/home/author" element={<PrivateRoute element={<AuthorNav />} />}>
          <Route path="create" element={<CreateAuthor />} />
          <Route path="list" element={<AuthorList />} />
          <Route path="find" element={<AuthorDetails />} />
        </Route>

        <Route path="/home/article" element={<PrivateRoute element={<ArticleNav />} />}>
          <Route path="create" element={<CreateArticle />} />
          <Route path="list" element={<ArticleList />} />
          <Route path="find" element={<ArticleDetails />} />
        </Route>

        <Route path="/home/comment" element={<PrivateRoute element={<CommentNav />} />}>
          <Route path="create" element={<CreateComment />} />
          <Route path="list" element={<CommentList />} />
          <Route path="find" element={<CommentDetails />} />
        </Route>

        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  )
}

export default App
