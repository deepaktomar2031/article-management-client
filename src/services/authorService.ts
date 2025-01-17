import axios from 'axios'
import { ICreateAuthor } from 'src/types'

// Create new author
export const createAuthor = async (author: ICreateAuthor) => {
  const response = await axios.post(
    `${process.env.REACT_APP_ARTICLE_MANAGEMENT_API_BASE_URL}/author`,
    author
  )
  return response.data
}

// Fetch all authors
export const getAllAuthors = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_ARTICLE_MANAGEMENT_API_BASE_URL}/authors`
  )
  return response.data
}

// Fetch author by ID
export const getAuthorById = async (id: number) => {
  const response = await axios.get(
    `${process.env.REACT_APP_ARTICLE_MANAGEMENT_API_BASE_URL}/author/${id}`
  )
  return response.data
}
