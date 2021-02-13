import React, { useReducer } from 'react'
import AuthContext from './authContext'
import { initialAuthState } from './authState'
import { authReducer } from './authReducer'
import { User } from '@sprightly/types'

/**
 * The main configuration to instantiate the `AuthProvider`.
 */
export interface AuthProviderOptions {
  /**
   * The child nodes your Provider has wrapped
   */
  children?: React.ReactNode
}

type JSONResponse = {
  data?: {
    signIn: {
      token: string
      user: User
    }
  }
  errors?: Array<{ message: string }>
}

const AuthProvider = ({ children }: AuthProviderOptions): JSX.Element => {
  const [authState, dispatch] = useReducer(authReducer, initialAuthState)

  /**
   * Attempt to get access token from local storage
   */
  const getAccessToken = async () => {
    try {
      dispatch({ type: 'GET_TOKEN' })
      const token = localStorage.getItem('userToken')
      dispatch({
        type: 'GET_TOKEN_COMPLETE',
        payload: {
          token,
        },
      })
    } catch (error) {
      dispatch({
        type: 'GET_TOKEN_ERROR',
        error,
      })
    }
  }

  /**
   * TODO: Get custom claims from the token
   */
  const getIdTokenClaims = async () => 'claims'

  /**
   * Login to return token and basic user information
   */
  const login = async () => {
    dispatch({ type: 'LOGIN_STARTED' })
    const response = await fetch('https://api.shaun-hutch.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `mutation {
          signIn(data: {email: "shaunoff@gmail.com", password: "password"}){
            token
            user {
              name
            }
          } 
        }`,
      }),
    })

    const { data, errors }: JSONResponse = await response.json()

    if (response.ok && data) {
      localStorage.setItem('userToken', data.signIn.token)
      dispatch({
        type: 'LOGIN_COMPLETE',
        payload: {
          token: data.signIn.token,
          user: data.signIn.user,
        },
      })
    } else {
      const error = new Error(errors?.map((e) => e.message).join('\n') ?? 'unknown')
      dispatch({
        type: 'LOGIN_ERROR',
        error,
      })
    }
  }

  const logout = () => {
    localStorage.removeItem('userToken')
    dispatch({
      type: 'LOGOUT',
    })
  }

  return (
    <AuthContext.Provider value={{ ...authState, getAccessToken, getIdTokenClaims, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
