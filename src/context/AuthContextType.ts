import { createContext } from 'react'
import type { User, LoginCredentials, RegisterCredentials } from '../api/types'

export interface AuthContextType {
  user: User | null
  loading: boolean
  error: string | null
  login: (credentials: LoginCredentials) => Promise<boolean>
  register: (credentials: RegisterCredentials) => Promise<boolean>
  logout: () => Promise<void>
  checkAuth: () => Promise<void>
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)
