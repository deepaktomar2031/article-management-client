import axios from 'axios'
import { toast } from 'react-toastify'

export const LogErrorMessage = (error: unknown): void => {
  if (error instanceof Error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      toast.error('No entry found.')
    } else {
      toast.error(`Error fetching author details: ${error.message}`)
    }
  } else {
    toast.error('An unexpected error occurred.')
  }
}
