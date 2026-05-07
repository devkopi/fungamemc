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

/**
 * Solicita un enlace de recuperación de contraseña
 */
export const requestPasswordReset = async (email: string): Promise<{ success: boolean; message?: string }> => {
  try {
    const response = await apiClient.post('/auth/request_reset.php', { email })
    return response.data
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.message || 'Error al solicitar la recuperación'
    }
  }
}

/**
 * Verifica si un token de recuperación es válido
 */
export const verifyResetToken = async (token: string): Promise<{ success: boolean; message?: string; email?: string }> => {
  try {
    const response = await apiClient.get(`/auth/verify_token.php?token=${token}`)
    return response.data
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.message || 'Token inválido o expirado'
    }
  }
}

/**
 * Restablece la contraseña usando un token
 */
export const resetPassword = async (token: string, password: string): Promise<{ success: boolean; message?: string }> => {
  try {
    const response = await apiClient.post('/auth/reset_password.php', { 
      token, 
      password,
      password_repeat: password
    })
    return response.data
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.message || 'Error al restablecer la contraseña'
    }
  }
}