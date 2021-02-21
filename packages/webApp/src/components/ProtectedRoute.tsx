import React, { ReactElement } from 'react'
import { Route, Navigate } from 'react-router'
import useAuth from '../auth/useAuth'
interface Props {
  element: ReactElement
  path: string
  children?: ReactElement
}

const ProtectedRoute: React.FC<Props> = ({ element, path, children }: Props) => {
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? (
    <Route path={path} element={element}>
      {children}
    </Route>
  ) : (
    <Navigate to={'/auth/login'} replace={true} />
  )
}

export default ProtectedRoute
