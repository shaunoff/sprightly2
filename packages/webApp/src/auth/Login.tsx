import React, { useState, useEffect } from 'react'
import useAuth from './useAuth'
import { Navigate } from 'react-router'
import { useForm } from 'react-hook-form'
import Input from '../ui/Input'
import Button from '../ui/Button'
import Alert from '../ui/Alert'

type Inputs = {
  email: string
  password: string
}

const Login: React.FC = () => {
  const { login, isAuthenticated, error } = useAuth()
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit = handleSubmit(({ email, password }) => {
    login({ email, password })
  })
  if (isAuthenticated) {
    return <Navigate to={'/'} />
  }
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Sign in to your account</h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <form onSubmit={onSubmit} className="space-y-6">
          <Input label="Email" ref={register} name="email" type="email" />
          <Input label="Password" ref={register} name="password" type="password" />
          {error && <Alert type="error" title={error.message} />}
          <Button type="submit" block>
            Sign In
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Login
