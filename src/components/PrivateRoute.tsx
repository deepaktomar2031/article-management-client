import React, { memo, useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import { toast } from 'react-toastify'
import { JwtPayload } from 'src/types'
import { getToken, removeToken } from 'src/services'

interface PrivateRouteProps {
  element: React.ReactNode
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const [isValid, setIsValid] = useState<boolean | null>(null)

  useEffect(() => {
    const tokenValidity = checkTokenValidity()
    setIsValid(tokenValidity)
  }, [])

  if (isValid === null) {
    return <div>Loading...</div>
  }

  return isValid ? <>{element}</> : <Navigate to="/dashboard" replace />
}

const checkTokenValidity = (): boolean => {
  const token = getToken()
  if (!token) {
    toast.info('Please log in to access this page.')
    return false
  }

  try {
    const decodedToken = jwtDecode<JwtPayload>(token)
    const currentTimeInSeconds = Math.floor(Date.now() / 1000)

    if (decodedToken.exp > currentTimeInSeconds) {
      return true
    }

    // Token has expired
    removeToken()
    toast.error('Your session has expired. Please log in again.')
    return false
  } catch (error) {
    toast.error('Something went wrong. Please log in again.')
    console.error('Something went wrong:', error)
    return false
  }
}

export default memo(PrivateRoute)
