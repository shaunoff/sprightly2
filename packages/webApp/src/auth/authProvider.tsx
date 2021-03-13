import React, { useReducer, useEffect } from 'react'
import { gql, useMutation } from '@apollo/client'
import jwt from 'jsonwebtoken'
import AuthContext from './authContext'
import { initialAuthState } from './authState'
import { authReducer } from './authReducer'
import { User, LoginInput, Auth, SignInMutation, GetAccessTokenMutation } from '@sprightly/types'
import { accessTokenRef } from '../config/apolloClient'

/**
 * The main configuration to instantiate the `AuthProvider`.
 */
export interface AuthProviderOptions {
  /**
   * The child nodes your Provider has wrapped
   */
  children?: React.ReactNode
}

const GET_ACCESS_TOKEN = gql`
  mutation GetAccessToken($refreshToken: String!) {
    getAccessToken(refreshToken: $refreshToken) {
      accessToken
      refreshToken
      user {
        id
        profile {
          firstName
          lastName
        }
      }
    }
  }
`
const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(data: { email: $email, password: $password }) {
      accessToken
      refreshToken
      user {
        id
        profile {
          firstName
          lastName
        }
      }
    }
  }
`

const AuthProvider = ({ children }: AuthProviderOptions): JSX.Element => {
  const [authState, dispatch] = useReducer(authReducer, initialAuthState)
  const [newAccessToken] = useMutation<GetAccessTokenMutation>(GET_ACCESS_TOKEN)
  const [signIn] = useMutation<SignInMutation>(SIGN_IN)

  /**
   * Add  listener for local storage. If using on multiple tabs, this will trigger login/logout on all tabs.
   */
  useEffect(() => {
    const syncAuthState = () => {
      const refreshToken = localStorage.getItem('refreshToken')

      /**
       * If there  is  no refresh token it means that it's been removed elsewhere and will need to change to a logged out state.
       */
      if (!refreshToken) {
        logout()
      } else {
        getAccessToken()
      }
    }

    window.addEventListener('storage', syncAuthState)

    return () => {
      window.removeEventListener('storage', syncAuthState)
    }
  }, [])

  /**
   * Logout
   */
  const logout = () => {
    localStorage.removeItem('refreshToken')
    accessTokenRef.current = ''
    dispatch({
      type: 'LOGOUT',
    })
  }

  /**
   * Get access accessToken from refreshToken. If it is an initial
   * request, we need a loading state before the user is authenticated.
   * Subseuqent queries are triggered silently and skip the loading phase.
   */
  const getAccessToken = async (silently = false) => {
    if (!silently) {
      dispatch({ type: 'GET_ACCESS_TOKEN', payload: { silently } })
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

    /**
     * Use refreshToken to get a new accessToken. The api will check if the reresh token is valid.
     */
    try {
      const { data } = await newAccessToken({
        variables: {
          refreshToken,
        },
      })

      if (!data) {
        return dispatch({
          type: 'NO_REFRESH_TOKEN',
        })
      }
      /**
       * If valid, a new accessToken will be obtained and can be store
       * in authState and added to the apollo client to be used in the
       * header of subsequent api requests
       */
      localStorage.setItem('refreshToken', data.getAccessToken.refreshToken)
      accessTokenRef.current = data.getAccessToken.accessToken
      /**
       * Start timer to get new access token before it expires
       */
      refreshTokenCounter()
      return dispatch({
        type: 'LOGIN_COMPLETE',
        payload: {
          accessToken: data.getAccessToken.accessToken,
          user: data.getAccessToken.user,
        },
      })
    } catch (e) {
      /**
       * Invalid refresh token or it has been revoked. Return to unauth state
       */
      return dispatch({
        type: 'NO_REFRESH_TOKEN',
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

    try {
      const { data } = await signIn({
        variables: {
          email,
          password,
        },
      })
      if (!data) {
        return dispatch({
          type: 'LOGIN_ERROR',
          error: new Error('No Data returned'),
        })
      }
      /**
       * If valid, a new accessToken will be obtained and can be store
       * in authState and added to the apollo client to be used in the
       * header of subsequent api requests
       */
      localStorage.setItem('refreshToken', data.signIn.refreshToken)
      accessTokenRef.current = data.signIn.accessToken
      /**
       * Start timer to get new access token before it expires
       */
      refreshTokenCounter()
      return dispatch({
        type: 'LOGIN_COMPLETE',
        payload: {
          accessToken: data.signIn.accessToken,
          user: data.signIn.user,
        },
      })
    } catch (error) {
      /**
       * Invalid refresh token or it has been revoked. Return to unauth state
       */
      return dispatch({
        type: 'LOGIN_ERROR',
        error,
      })
    }
  }

  /**
   * When successfully logged in or refreshed accesToken initiate
   * timer to get another accesss token before it expires
   */
  const refreshTokenCounter = () => {
    setTimeout(() => {
      getAccessToken(true)
    }, 1750000)
  }

  return (
    <AuthContext.Provider value={{ ...authState, getAccessToken, getAccessTokenClaims, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
