import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Dashboard, Login, Home } from 'src/pages'
import { CreateAuthor, AuthorList, AuthorDetails, AuthorNav } from 'src/components/Author'
import { CreateArticle, ArticleList, ArticleDetails, ArticleNav } from 'src/components/Article'
import { CreateComment, CommentList, CommentDetails, CommentNav } from 'src/components/Comment'
import PrivateRoute from 'src/components/PrivateRoute'
import { ToastWrapper } from 'src/components/Toast'

const App: React.FC = () => {
  const moduleRoutes = [
    {
      path: 'author',
      nav: <AuthorNav />,
      routes: [
        { path: 'list', element: <AuthorList /> },
        { path: 'find', element: <AuthorDetails /> },
      ],
    },
    {
      path: 'article',
      nav: <ArticleNav />,
      routes: [
        { path: 'create', element: <CreateArticle /> },
        { path: 'list', element: <ArticleList /> },
        { path: 'find', element: <ArticleDetails /> },
      ],
    },
    {
      path: 'comment',
      nav: <CommentNav />,
      routes: [
        { path: 'create', element: <CreateComment /> },
        { path: 'list', element: <CommentList /> },
        { path: 'find', element: <CommentDetails /> },
      ],
    },
  ]

  return (
    <Router>
      <ToastWrapper />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<CreateAuthor />} />

        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
        {moduleRoutes.map(({ path, nav, routes }) => (
          <Route key={path} path={`/home/${path}`} element={<PrivateRoute element={nav} />}>
            {routes.map(({ path: subPath, element }) => (
              <Route key={subPath} path={subPath} element={element} />
            ))}
          </Route>
        ))}

        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  )
}

export default App
