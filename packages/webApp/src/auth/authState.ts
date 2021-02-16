import { User } from '@sprightly/types'

/**
 * The auth state which, when combined with the auth methods, make up the return object of the `useAuth` hook.
 */
export interface AuthState {
  error?: Error
  isAuthenticated: boolean
  isLoading: boolean
  user: User | null
  accessToken: string | null
}

/**
 * Initial auth state.
 */
export const initialAuthState: AuthState = {
  isAuthenticated: false,
  isLoading: true,
  accessToken: null,
  user: null,
}
