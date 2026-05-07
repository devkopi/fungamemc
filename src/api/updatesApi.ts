import apiClient from './axiosConfig'
import type { Update, UpdateData, UpdatesResponse, UpdateResponse } from './types'

/**
 * Obtiene todas las actualizaciones
 */
export const getUpdates = async (): Promise<UpdatesResponse> => {
  try {
    const response = await apiClient.get<UpdatesResponse>('/updates')
    return response.data
  } catch (error: any) {
    return {
      success: false,
      updates: [],
      error: error.response?.data?.error || 'Error al obtener las actualizaciones'
    }
  }
}

/**
 * Obtiene una actualización por su ID
 */
export const getUpdate = async (id: number): Promise<UpdateResponse> => {
  try {
    const response = await apiClient.get<UpdateResponse>(`/updates/${id}`)
    return response.data
  } catch (error: any) {
    return {
      success: false,
      update: {} as Update,
      error: error.response?.data?.error || 'Error al obtener la actualización'
    }
  }
}

/**
 * Crea una nueva actualización
 */
export const createUpdate = async (data: UpdateData): Promise<UpdateResponse> => {
  try {
    const response = await apiClient.post<UpdateResponse>('/updates', data)
    return response.data
  } catch (error: any) {
    return {
      success: false,
      update: {} as Update,
      error: error.response?.data?.error || 'Error al crear la actualización'
    }
  }
}

/**
 * Actualiza una actualización existente
 */
export const updateUpdate = async (id: number, data: UpdateData): Promise<UpdateResponse> => {
  try {
    const response = await apiClient.put<UpdateResponse>(`/updates/${id}`, data)
    return response.data
  } catch (error: any) {
    return {
      success: false,
      update: {} as Update,
      error: error.response?.data?.error || 'Error al actualizar la actualización'
    }
  }
}

/**
 * Elimina una actualización
 */
export const deleteUpdate = async (id: number): Promise<{ success: boolean; error?: string }> => {
  try {
    const response = await apiClient.delete(`/updates/${id}`)
    return response.data
  } catch (error: any) {
    return {
      success: false,
      error: error.response?.data?.error || 'Error al eliminar la actualización'
    }
  }
}
