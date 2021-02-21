import React, { useState, useEffect } from 'react'
import useAuth from './useAuth'
import { Navigate } from 'react-router'

const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, isAuthenticated } = useAuth()
  if (isAuthenticated) {
    return <Navigate to={'/'} />
  }
  return (
    <div>
      Login mun
      <input id="login" onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor="login">Login</label>
      <input id="password" onChange={(e) => setPassword(e.target.value)} />
      <label htmlFor="password">Login</label>
      <button
        onClick={(e) => {
          e.preventDefault()
          login({ email, password })
        }}
      >
        Login
      </button>
    </div>
  )
}

export default Login
