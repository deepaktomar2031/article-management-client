import React, { memo, useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { checkTokenValidity } from 'src/services'

interface PrivateRouteProps {
  element: React.ReactNode
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const [isValid, setIsValid] = useState<boolean | null>(null)

  useEffect(() => {
    const tokenValidity: boolean = checkTokenValidity()
    setIsValid(tokenValidity)
  }, [])

  if (isValid === null) {
    return <div>Loading...</div>
  }

  return isValid ? <>{element}</> : <Navigate to="/dashboard" replace />
}

export default memo(PrivateRoute)
