import apiClient from './apiClient'
import { ICreateAuthor } from 'src/types'

// Create new author
export const createAuthor = async (author: ICreateAuthor) => {
  const response = await apiClient().post(`/author`, author)
  return response.data
}

// Fetch all authors
export const getAllAuthors = async () => {
  const response = await apiClient().get(`/authors`)
  return response.data
}

// Fetch author by ID
export const getAuthorById = async (id: number) => {
  const response = await apiClient().get(`/author/${id}`)
  return response.data
}
