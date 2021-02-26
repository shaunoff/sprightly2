import React, { useEffect } from 'react'
import ProtectedRoute from './components/ProtectedRoute'
import { Routes, Route } from 'react-router-dom'
import Login from './auth/Login'
import { useAuth } from './auth'
import Date from './components/Date'

const App: React.FC = () => {
  const { logout, isAuthenticated, getAccessToken, isLoading } = useAuth()
  useEffect(() => {
    getAccessToken()
  }, [])
  if (isLoading) return <h1>isLoading</h1>
  return (
    <>
      {isAuthenticated && <button onClick={logout}>logout</button>}
      <Routes>
        <Route path="/auth/*" element={<Login />} />
        <ProtectedRoute path="/*" element={<Date />} />
      </Routes>
    </>
  )
}

export default App
