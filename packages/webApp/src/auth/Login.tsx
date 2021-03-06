import React, { useState, useEffect } from 'react'
import useAuth from './useAuth'
import { Navigate } from 'react-router'
import { useForm } from 'react-hook-form'
import Input from '../ui/Input'
import Button from '../ui/Button'

type Inputs = {
  email: string
  password: string
}

const Login: React.FC = () => {
  const { login, isAuthenticated, error, isLoading } = useAuth()
  const { register, handleSubmit, watch, errors } = useForm<Inputs>()
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
          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-red-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">{error.message}</h3>
                </div>
              </div>
            </div>
          )}
          <Button type="submit" block>
            Sign In
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Login
