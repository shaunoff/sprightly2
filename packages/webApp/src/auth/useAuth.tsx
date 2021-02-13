import { useContext } from 'react'
import AuthContext, { AuthContextInterface } from './authContext'

const useAuth = (): AuthContextInterface => useContext(AuthContext)

export default useAuth
