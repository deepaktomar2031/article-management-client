import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthorNav from './AuthorNav'
import AuthorList from './AuthorList'

const AuthorModule: React.FC = () => {
  return (
    <div>
      <AuthorNav />
      <Routes>
        <Route path="list" element={<AuthorList />} />
      </Routes>
    </div>
  )
}

export default AuthorModule
