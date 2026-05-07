// Tipos para las respuestas de la API
export interface User {
  id: number
  user_id?: number
  username: string
  email: string
}

export interface LoginResponse {
  success: boolean
  user?: User
  error?: string
}

export interface RegisterResponse {
  success: boolean
  user?: User
  error?: string
}

export interface MeResponse {
  success: boolean
  user?: User
  error?: string
}

export interface LogoutResponse {
  success: boolean
  message?: string
}

// Tipos para los datos que enviamos
export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterCredentials {
  username: string
  email: string
  password: string
  password_repeat: string
}
