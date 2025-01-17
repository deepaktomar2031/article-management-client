import React from 'react'
import { Navigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import { JwtPayload } from 'src/types'

interface PrivateRouteProps {
  element: React.ReactNode
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const isExpired = checkTokenExpiry()

  return isExpired ? <Navigate to="/dashboard" /> : <>{element}</>
}

const checkTokenExpiry = () => {
  const token = localStorage.getItem('access_token')
  if (token) {
    const decodedToken = jwtDecode<JwtPayload>(token)
    const currentTimeInSeconds = Math.floor(Date.now() / 1000)

    if (decodedToken.exp < currentTimeInSeconds) {
      // Token has expired
      localStorage.removeItem('access_token')
      return true
    }
    return false
  }
}

export default PrivateRoute
