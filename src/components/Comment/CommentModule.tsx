import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CommentNav from './CommentNav'
import CommentList from './CommentList'

const CommentModule: React.FC = () => {
  return (
    <div>
      <CommentNav />
      <Routes>
        <Route path="list" element={<CommentList />} />
      </Routes>
    </div>
  )
}

export default CommentModule
