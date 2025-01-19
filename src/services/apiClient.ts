import axios from 'axios'
import { checkTokenValidity, getToken, removeToken } from 'src/services'
import { API_BASE_URL } from 'src/utils'

const createApiClient = () => {
  const authtoken: string | null = getToken()

  const instance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 5000,
    headers: { Authorization: `Bearer ${authtoken}` },
  })

  instance.interceptors.request.use(
    (config) => {
      const isValid: boolean = checkTokenValidity()

      if (!isValid) {
        removeToken()
        window.location.href = '/dashboard'
        return Promise.reject(new Error('Token is invalid'))
      }

      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  return instance
}

const getApiClient = () => {
  return createApiClient()
}

export default getApiClient
