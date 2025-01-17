import axios from 'axios'
import { API_BASE_URL } from 'src/utils'
import { AuthBody } from 'src/types'

export const loginUser = async (credentials: AuthBody) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, credentials)
    return response.data.access_token
  } catch (error) {
    throw new Error('Login failed')
  }
}
