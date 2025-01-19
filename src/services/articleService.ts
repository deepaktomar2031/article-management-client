import apiClient from './apiClient'
import { ICreateArticle } from 'src/types'

// Create new article
export const createArticle = async (article: ICreateArticle) => {
  const response = await apiClient().post(`/article`, article)
  return response.data
}

// Fetch all articles
export const getAllArticles = async () => {
  const response = await apiClient().get(`/articles`)
  return response.data
}

// Fetch article by ID
export const getArticleById = async (id: number) => {
  const response = await apiClient().get(`/article/${id}`)
  return response.data
}

// Mark/unmark an article as favorite
export const toggleFavorite = async (id: number) => {
  console.log('id', id)
  const response = await apiClient().put(`/article/${id}/favorite`)
  return response.data
}
