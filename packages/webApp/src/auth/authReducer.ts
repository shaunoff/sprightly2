import { AuthState } from './authState'
import { User } from '@sprightly/types'

type Action =
  | { type: 'LOGIN_STARTED' }
  | {
      type: 'LOGIN_COMPLETE'
      payload: { user: User; token: string }
    }
  | { type: 'LOGOUT' }
  | { type: 'LOGIN_ERROR'; error: Error }
  | { type: 'GET_TOKEN' }
  | {
      type: 'GET_TOKEN_COMPLETE'
      payload: { token: string | null; user: User | null }
    }
  | { type: 'GET_TOKEN_ERROR'; error: Error }

/**
 * Handles how the state changes in the `useAuth` hook.
 */
export const authReducer = (state: AuthState, action: Action): AuthState => {
  switch (action.type) {
    case 'GET_TOKEN':
      return {
        ...state,
        isLoading: true,
      }
    case 'GET_TOKEN_COMPLETE':
      return {
        ...state,
        isAuthenticated: !!action.payload.token,
        token: action.payload.token,
        user: action.payload.user,
        isLoading: false,
        error: undefined,
      }
    case 'LOGIN_STARTED':
      return {
        ...state,
        isLoading: true,
      }
    case 'LOGIN_COMPLETE':
      return {
        ...state,
        isAuthenticated: !!action.payload.user,
        user: action.payload.user,
        token: action.payload.token,
        isLoading: false,
        error: undefined,
      }
    // case 'USER_UPDATED':
    //   return {
    //     ...state,
    //     isAuthenticated: !!action.user,
    //     user: action.user,
    //   }
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
      }
    case 'LOGIN_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    default:
      return {
        ...state,
      }
  }
}
