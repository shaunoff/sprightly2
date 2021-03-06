import React, { useEffect, lazy } from 'react'
import ProtectedRoute from './components/ProtectedRoute'
import { Routes, Route } from 'react-router-dom'
import { useAuth } from './auth'

const Login = lazy(() => import('./auth/Login'))
const Main = lazy(() => import('./layouts/Main'))

const App: React.FC = () => {
  const { getAccessToken, initialLoad } = useAuth()
  useEffect(() => {
    getAccessToken()
  }, [])
  if (initialLoad) return <h1>isLoading</h1>
  return (
    <Routes>
      <Route path="/auth/*" element={<Login />} />
      <ProtectedRoute path="/*" element={<Main />} />
    </Routes>
  )
}

export default App
