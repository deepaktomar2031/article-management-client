import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AuthorList, AuthorDetails, CreateAuthor } from 'src/components/Author'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/author/create" element={<CreateAuthor />} />
        <Route path="/authors" element={<AuthorList />} />
        <Route path="/author/:id" element={<AuthorDetails />} />
      </Routes>
    </Router>
  )
}

export default App
