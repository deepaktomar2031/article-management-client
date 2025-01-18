import axios from 'axios'
import { getToken } from 'src/services'
import { API_BASE_URL } from 'src/utils'
import { ICreateAuthor } from 'src/types'

// Create new author
export const createAuthor = async (author: ICreateAuthor) => {
  const response = await axios.post(`${API_BASE_URL}/author`, author)
  return response.data
}

// Fetch all authors
export const getAllAuthors = async () => {
  const token = getToken()
  const response = await axios.get(`${API_BASE_URL}/authors`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response.data
}

// Fetch author by ID
export const getAuthorById = async (id: number) => {
  const token = getToken()
  const response = await axios.get(`${API_BASE_URL}/author/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response.data
}
