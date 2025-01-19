import axios from 'axios'
import { getToken } from 'src/services'
import { API_BASE_URL } from 'src/utils'
import { ICreateArticle } from 'src/types'

// Create new article
export const createArticle = async (article: ICreateArticle) => {
  const token = getToken()
  const response = await axios.post(`${API_BASE_URL}/article`, article, {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response.data
}

// Fetch all articles
export const getAllArticles = async () => {
  const token = getToken()
  const response = await axios.get(`${API_BASE_URL}/articles`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response.data
}

// Fetch article by ID
export const getArticleById = async (id: number) => {
  const token = getToken()
  const response = await axios.get(`${API_BASE_URL}/article/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response.data
}
