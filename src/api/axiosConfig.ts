import axios from 'axios'
import type { AxiosInstance } from 'axios'

// Configuración base de la API
const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/fungamemc-backend/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  withCredentials: true
})

// Interceptor para agregar token
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

apiClient.interceptors.response.use(
  (response) => {
    console.log(`[API Response] ${response.config.url}`, response.data)
    return response
  },
  (error) => {
    console.error(`[API Error] ${error.config?.url}`, error.message)
    return Promise.reject(error)
  }
)

export default apiClient