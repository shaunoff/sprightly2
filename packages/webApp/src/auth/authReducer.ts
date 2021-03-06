import { AuthState } from './authState'
import { User } from '@sprightly/types'

type Action =
  | { type: 'LOGIN_STARTED' }
  | {
      type: 'LOGIN_COMPLETE'
      payload: { user: User; accessToken: string }
    }
  | { type: 'LOGOUT' }
  | { type: 'LOGIN_ERROR'; error: Error }
  | { type: 'GET_ACCESS_TOKEN'; payload: { silently: boolean } }
  | { type: 'NO_REFRESH_TOKEN' }
  | {
      type: 'GET_TOKEN_COMPLETE'
      payload: { accessToken: string | null; user: User | null }
    }
  | { type: 'GET_TOKEN_ERROR'; error: Error }

/**
 * Handles how the state changes in the `useAuth` hook.
 */
export const authReducer = (state: AuthState, action: Action): AuthState => {
  switch (action.type) {
    case 'GET_ACCESS_TOKEN':
      const { silently } = action.payload
      return {
        ...state,
        isLoading: true,
        initialLoad: silently ? false : true,
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
        accessToken: action.payload.accessToken,
        isLoading: false,
        initialLoad: false,
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
        accessToken: null,
      }
    case 'NO_REFRESH_TOKEN':
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        user: null,
        accessToken: null,
        initialLoad: false,
      }
    case 'LOGIN_ERROR':
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        user: null,
        accessToken: null,
        error: action.error,
      }
    default:
      return {
        ...state,
      }
  }
}
