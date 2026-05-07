// Tipos para las respuestas de la API
export interface Role {
  id: number
  name: string
  slug: string
}

export interface Permissions {
  can_create_updates: boolean
  can_edit_updates: boolean
  can_delete_updates: boolean
  can_manage_users: boolean
  can_manage_roles: boolean
}

export interface User {
  id: number
  user_id?: number
  username: string
  email: string
  role?: Role
  permissions?: Permissions
}

export interface Update {
  id: number
  title: string
  content: string
  author_id: number
  status: 'draft' | 'published'
  published_at: string | null
  created_at: string
  updated_at: string
  author?: User
}

export interface LoginResponse {
  success: boolean
  user?: User
  token?: string
  error?: string
}

export interface RegisterResponse {
  success: boolean
  user?: User
  token?: string
  error?: string
}

export interface MeResponse {
  success: boolean
  user?: User
  error?: string
}

export interface UpdatesResponse {
  success: boolean
  updates: Update[]
  error?: string
}

export interface UpdateResponse {
  success: boolean
  update: Update
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

export interface UpdateData {
  title: string
  content: string
  status: 'draft' | 'published'
}
