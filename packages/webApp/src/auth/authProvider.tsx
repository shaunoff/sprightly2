import React, { useReducer } from 'react'
import jwt from 'jsonwebtoken'
import AuthContext from './authContext'
import { initialAuthState } from './authState'
import { authReducer } from './authReducer'
import { User, LoginInput, Auth } from '@sprightly/types'

//TODO centralize env config
const uri = process.env.NODE_ENV !== 'production' ? 'http://localhost:4000' : 'https://api.shaun-hutch.com/'

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
  data?: Record<'signIn' | 'getAccessToken', Auth>
  errors?: Array<{ message: string }>
}

const AuthProvider = ({ children }: AuthProviderOptions): JSX.Element => {
  const [authState, dispatch] = useReducer(authReducer, initialAuthState)

  /**
   * Get access accessToken from refreshToken. If it is an initial
   * request, we need a loading state before the user is authenticated.
   * Subseuqent queries are triggered silently and skip the loading phase.
   */
  const getAccessToken = async (silently = false) => {
    try {
      if (!silently) {
        dispatch({ type: 'GET_ACCESS_TOKEN' })
      }

      const refreshToken = localStorage.getItem('refreshToken')

      /**
       * If there is no refresh token stored,  return  due to a logged out state.
       */
      if (!refreshToken) {
        return dispatch({
          type: 'NO_REFRESH_TOKEN',
        })
      }

      const query = `mutation getAccessToken($refreshToken: String!){
        getAccessToken(refreshToken: $refreshToken){
          accessToken
          refreshToken
          user {
            id
            profile {
              firstName,
              lastName
            }
          }
        } 
      }`
      const response = await fetch(uri, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          variables: {
            refreshToken,
          },
        }),
      })

      const { data, errors }: JSONResponse = await response.json()

      /**
       * If successful, store refreshToken in localStorage, and accessToken in auth state.
       */
      if (response.ok && data) {
        localStorage.setItem('refreshToken', data.getAccessToken.refreshToken)
        refreshTokenCounter()
        dispatch({
          type: 'LOGIN_COMPLETE',
          payload: {
            accessToken: data.getAccessToken.accessToken,
            user: data.getAccessToken.user,
          },
        })
      } else {
        console.log('shgfjhsdgfjhsdgfjhsdgfjhsdgfjhsdgfjhgsdfjh')
        const error = new Error(errors?.map((e) => e.message).join('\n') ?? 'unknown')
        dispatch({
          type: 'LOGIN_ERROR',
          error,
        })
      }
    } catch (error) {
      dispatch({
        type: 'GET_TOKEN_ERROR',
        error,
      })
    }
  }

  /**
   * Get user information from token
   */
  const getAccessTokenClaims = (accessToken: string): User | null => {
    const decoded = jwt.decode(accessToken)
    if (!decoded || typeof decoded === 'string') return null
    const { id, email, profile } = decoded
    return {
      id,
      email,
      profile,
    }
  }

  /**
   * Login to return token and basic user information
   */
  const login = async ({ email, password }: LoginInput) => {
    dispatch({ type: 'LOGIN_STARTED' })

    const query = `mutation login($email: String!, $password: String!){
      signIn(data: {email: $email, password: $password}){
        accessToken
        refreshToken
        user {
          id
          profile {
            firstName,
            lastName
          }
        }
      } 
    }`

    const response = await fetch(uri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: {
          email,
          password,
        },
      }),
    })

    const { data, errors }: JSONResponse = await response.json()

    /**
     * If successful, store refreshToken in localStorage, and accessToken in auth state.
     */
    if (response.ok && data) {
      localStorage.setItem('refreshToken', data.signIn.refreshToken)
      refreshTokenCounter()
      dispatch({
        type: 'LOGIN_COMPLETE',
        payload: {
          accessToken: data.signIn.accessToken,
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
    localStorage.removeItem('refreshToken')
    dispatch({
      type: 'LOGOUT',
    })
  }
  /**
   * When successfully logged in or refreshed accesToken initiate
   * timer to get another accesss token before it expires
   */
  const refreshTokenCounter = () => {
    setTimeout(() => {
      getAccessToken(true)
    }, 5000)
  }

  return (
    <AuthContext.Provider value={{ ...authState, getAccessToken, getAccessTokenClaims, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
