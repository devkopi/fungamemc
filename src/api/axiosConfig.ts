import axios from 'axios'
import type { AxiosInstance } from 'axios'

// Configuración base de la API
const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  timeout: 10000
})

// Interceptor para logging
apiClient.interceptors.request.use((config) => {
  console.log(`[API Request] ${config.method?.toUpperCase()} ${config.url}`)
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