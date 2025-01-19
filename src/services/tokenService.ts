import { toast } from 'react-toastify'
import { jwtDecode } from 'jwt-decode'
import { JwtPayload } from 'src/types'
import { ACCESS_TOKEN } from 'src/utils'

export const getToken = (): string | null => {
  try {
    return localStorage.getItem(ACCESS_TOKEN)
  } catch (error) {
    throw new Error('Something went wrong in getting token')
  }
}

export const checkTokenValidity = (): boolean => {
  const token: string | null = getToken()
  if (!token) {
    toast.info('Please log in to access this page.')
    return false
  }

  try {
    const decodedToken = jwtDecode<JwtPayload>(token)
    const currentTimeInSeconds = Math.floor(Date.now() / 1000)

    if (decodedToken.exp > currentTimeInSeconds) return true

    // Token has expired
    removeToken()
    toast.error('Your session has expired. Please log in again.')
    return false
  } catch (error) {
    toast.error('Something went wrong.')
    console.error('Something went wrong:', error)
    return false
  }
}

export const setToken = (token: string): void => {
  try {
    localStorage.setItem(ACCESS_TOKEN, token)
  } catch (error) {
    throw new Error('Something went wrong in setting token')
  }
}

export const removeToken = (): void => {
  try {
    localStorage.removeItem(ACCESS_TOKEN)
  } catch (error) {
    throw new Error('Something went wrong in removing token')
  }
}
