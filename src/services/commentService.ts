import apiClient from './apiClient'
import { ICreateComment } from 'src/types'

// Create new comment
export const createComment = async (comment: ICreateComment) => {
  const response = await apiClient().post(`comment`, comment)
  return response.data
}

// Fetch all comments
export const getAllComments = async () => {
  const response = await apiClient().get(`/comments`)
  return response.data
}

// Fetch comment by ID
export const getCommentById = async (id: number) => {
  const response = await apiClient().get(`/comment/${id}`)
  return response.data
}
