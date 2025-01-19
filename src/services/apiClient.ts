import axios, { AxiosInstance } from 'axios'
import { toast } from 'react-toastify'
import { checkTokenValidity, getToken, removeToken } from 'src/services'
import { API_BASE_URL } from 'src/utils'

let apiClient: AxiosInstance | null = null

const createApiClient = () => {
  const authtoken = getToken()

  const instance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 5000,
    headers: { Authorization: `Bearer ${authtoken}` },
  })

  instance.interceptors.request.use(
    (config) => {
      const isValid = checkTokenValidity()
      console.log('isValid', isValid)

      if (!isValid) {
        removeToken()
        toast.info('Please log in to access this page.')
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
  if (!apiClient) {
    apiClient = createApiClient()
  }
  return apiClient
}

export default getApiClient
