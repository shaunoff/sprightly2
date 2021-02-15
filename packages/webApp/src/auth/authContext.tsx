import { createContext } from 'react'
import { AuthState, initialAuthState } from './authState'
import { LoginInput, User } from '@sprightly/types'

export interface AuthContextInterface extends AuthState {
  /**
   * If there's a valid access token stored, return it.
   */
  getAccessToken: () => Promise<void>

  /**
   * Returns all claims from the id_token if available.
   */
  getIdTokenClaims: (token: string) => User | null

  /**
   * possibly  needed
   */
  login: (loginData: LoginInput) => Promise<void>

  /**
   * Clears the application session
   */
  logout: () => void
}

const stub = (): never => {
  throw new Error('You forgot to wrap your component in <AuthProvider>.')
}

const initialContext: AuthContextInterface = {
  ...initialAuthState,
  getAccessToken: stub,
  getIdTokenClaims: stub,
  login: stub,
  logout: stub,
}

/**
 * The Auth Context
 */
const AuthContext = createContext<AuthContextInterface>(initialContext)

export default AuthContext
