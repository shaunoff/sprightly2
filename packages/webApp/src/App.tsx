import React, { useEffect, useState, memo } from 'react'
import Login from './auth/Login'
import { useAuth } from './auth'
import Date from './components/Date'

const App: React.FC = () => {
  const { logout, isAuthenticated, user, getAccessToken, isLoading } = useAuth()
  const [show, setShow] = useState(false)
  useEffect(() => {
    getAccessToken()
  }, [])
  if (isLoading) return <h1>isLoading</h1>
  if (!isAuthenticated)
    return (
      <div>
        <Login />
        {!show && <button onClick={() => setShow(true)}>showDate</button>}
        No Auth {show && <Date />}
      </div>
    )
  return (
    <div>
      Hello {user?.profile?.firstName}
      {!show && <button onClick={() => setShow(true)}>showDate</button>}
      {show && <Date />}
      <button onClick={logout}>logout</button>
    </div>
  )
}

export default App
