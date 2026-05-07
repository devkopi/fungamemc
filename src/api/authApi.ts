import apiClient from './axiosConfig'
import type { 
  LoginCredentials,
  LoginResponse,
  RegisterCredentials,
  RegisterResponse,
  MeResponse,
  LogoutResponse
} from './types'

export const login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  const response = await apiClient.post<any>('/auth/login.php', {
    email: credentials.email.trim(),
    password: credentials.password
  })
  
  const responseData = response.data
  console.log('[API Login Response]', responseData)
  let user = responseData.user || responseData.data
  
  if (!user && (responseData.user_id || responseData.id)) {
    user = responseData
  }

  if (user) {
    if (!user.id && user.user_id) {
      user.id = user.user_id
    }
  }
  
  return {
    ...responseData,
    user,
    error: responseData.error || responseData.message
  }
}

export const register = async (data: RegisterCredentials): Promise<RegisterResponse> => {
  const response = await apiClient.post<any>('/auth/register.php', {
    username: data.username.trim(),
    email: data.email.trim(),
    password: data.password,
    password_repeat: data.password_repeat
  })

  const responseData = response.data
  console.log('[API Register Response]', responseData)
  let user = responseData.user || responseData.data
  
  if (!user && (responseData.user_id || responseData.id)) {
    user = responseData
  }

  if (user) {
    if (!user.id && user.user_id) {
      user.id = user.user_id
    }
  }

  return {
    ...responseData,
    user,
    error: responseData.error || responseData.message
  }
}

export const getMe = async (): Promise<MeResponse> => {
  const response = await apiClient.get<any>('/auth/me.php')
  const responseData = response.data
  let user = responseData.user || responseData.data
  
  if (!user && (responseData.user_id || responseData.id)) {
    user = responseData
  }

  if (user) {
    if (!user.id && user.user_id) {
      user.id = user.user_id
    }
  }
  
  return {
    ...responseData,
    user,
    error: responseData.error || responseData.message
  }
}

export const logout = async (): Promise<LogoutResponse> => {
  const response = await apiClient.post<LogoutResponse>('/auth/logout.php')
  return response.data
}