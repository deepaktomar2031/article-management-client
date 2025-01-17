import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import { CreateAuthor, AuthorList, AuthorDetails } from 'src/components/Author'
// import ArticleList from './pages/ArticleList' // To be created
// import CommentList from './pages/CommentList' // To be created
import PrivateRoute from './components/PrivateRoute'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<CreateAuthor />} />

        {/* Private Routes */}
        <Route path="/authors" element={<PrivateRoute element={<AuthorList />} />} />
        <Route path="/author/:id" element={<PrivateRoute element={<AuthorDetails />} />} />
        {/* <Route path="/articles" element={<PrivateRoute element={<ArticleList />} />} />
        <Route path="/comments" element={<PrivateRoute element={<CommentList />} />} /> */}
      </Routes>
    </Router>
  )
}

export default App
