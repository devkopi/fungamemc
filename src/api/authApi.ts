import apiClient from './axiosConfig'
import type { 
  LoginCredentials,
  LoginResponse,
  RegisterCredentials,
  RegisterResponse,
  MeResponse,
  LogoutResponse 
} from './types'

const toFormData = (data: Record<string, string>): URLSearchParams => {
  const formData = new URLSearchParams()
  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value)
  })
  return formData
}

export const login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  const formData = toFormData({
    email: credentials.email.trim(),
    password: credentials.password
  })

  const response = await apiClient.post<LoginResponse>('/login.php', formData)
  return response.data
}

export const register = async (data: RegisterCredentials): Promise<RegisterResponse> => {
  const formData = toFormData({
    username: data.username.trim(),
    email: data.email.trim(),
    password: data.password,
    password_repeat: data.password_repeat
  })


  // Petición POST a register.php
  const response = await apiClient.post<RegisterResponse>('/register.php', formData)
  return response.data
}

export const getMe = async (): Promise<MeResponse> => {
  const response = await apiClient.get<MeResponse>('/me.php')
  return response.data
}

export const logout = async (): Promise<LogoutResponse> => {
  const response = await apiClient.post<LogoutResponse>('/logout.php')
  return response.data
}