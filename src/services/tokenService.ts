import { ACCESS_TOKEN } from 'src/utils'

export const getToken = () => {
  try {
    const token = localStorage.getItem(ACCESS_TOKEN)
    return token
  } catch (error) {
    throw new Error('Something went wrong in getting token')
  }
}

export const setToken = (token: string) => {
  try {
    localStorage.setItem(ACCESS_TOKEN, token)
  } catch (error) {
    throw new Error('Something went wrong in setting token')
  }
}

export const removeToken = () => {
  try {
    localStorage.removeItem(ACCESS_TOKEN)
  } catch (error) {
    throw new Error('Something went wrong in removing token')
  }
}
