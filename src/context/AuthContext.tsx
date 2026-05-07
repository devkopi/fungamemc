import React, { useState, useEffect } from 'react'
import { type ReactNode } from 'react'
import { login as loginApi, getMe, logout as logoutApi, register as registerApi } from '../api/authApi'
import type { User, LoginCredentials, RegisterCredentials } from '../api/types'
import { AuthContext } from './AuthContextType'

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const checkAuth = async (): Promise<void> => {
    setLoading(true)
    try {
      const response = await getMe()
      if (response.success && response.user) {
        setUser(response.user)
      } else {
        setUser(null)
      }
    } catch (err) {
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  const login = async (credentials: LoginCredentials): Promise<boolean> => {
    setLoading(true)
    setError(null)
    try {
      const response = await loginApi(credentials)
      if (response.success && response.user) {
        setUser(response.user)
        return true
      } else {
        setError(response.error || 'Credenciales incorrectas')
        return false
      }
    } catch (err) {
      setError('Error de conexión con el servidor')
      return false
    } finally {
      setLoading(false)
    }
  }

  const register = async (credentials: RegisterCredentials): Promise<boolean> => {
    setLoading(true)
    setError(null)
    try {
      const response = await registerApi(credentials)
      if (response.success && response.user) {
        setUser(response.user)
        return true
      } else {
        setError(response.error || 'Error al registrar el usuario')
        return false
      }
    } catch (err) {
      setError('Error de conexión con el servidor')
      return false
    } finally {
      setLoading(false)
    }
  }

  const logout = async (): Promise<void> => {
    setLoading(true)
    try {
      await logoutApi()
      setUser(null)
    } catch (err) {
      console.error('Error al cerrar sesión', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    checkAuth()
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading, error, login, register, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  )
}
