import axios from 'axios'
import { getToken } from 'src/services'
import { API_BASE_URL } from 'src/utils'
import { ICreateComment } from 'src/types'

// Create new comment
export const createComment = async (comment: ICreateComment) => {
  const token = getToken()
  const response = await axios.post(`${API_BASE_URL}/comment`, comment, {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response.data
}

// Fetch all comments
export const getAllComments = async () => {
  const token = getToken()
  const response = await axios.get(`${API_BASE_URL}/comments`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response.data
}

// Fetch comment by ID
export const getCommentById = async (id: number) => {
  const token = getToken()
  const response = await axios.get(`${API_BASE_URL}/comment/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response.data
}
