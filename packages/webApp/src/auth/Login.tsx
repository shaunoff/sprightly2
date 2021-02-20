import React, { useState } from 'react'
import useAuth from './useAuth'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  return (
    <div>
      Login mun
      <input onChange={(e) => setEmail(e.target.value)} />
      <input onChange={(e) => setPassword(e.target.value)} />
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
