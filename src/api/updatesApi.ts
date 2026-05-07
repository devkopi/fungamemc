import apiClient from './axiosConfig.ts'
import type { Update, UpdateData, UpdatesResponse, UpdateResponse } from './types.ts'

/**
 * Obtiene todas las actualizaciones
 */
export const getUpdates = async (all: boolean = false): Promise<UpdatesResponse> => {
  try {
    const url = all ? '/updates/get_updates.php?status=all' : '/updates/get_updates.php'
    const response = await apiClient.get<any>(url)
    const data = response.data

    if (data.success && data.data?.updates) {
      // Mapear los campos del PHP a nuestra interfaz de TS
      const updates = data.data.updates.map((u: any) => ({
        ...u,
        author: {
          id: u.author_id,
          username: u.author_name
        }
      }))
      return { success: true, updates }
    }

    return {
      success: false,
      updates: [],
      error: data.message || 'Error al obtener las actualizaciones'
    }
  } catch (error: any) {
    return {
      success: false,
      updates: [],
      error: error.response?.data?.message || 'Error de conexión'
    }
  }
}

/**
 * Obtiene una actualización por su ID
 */
export const getUpdate = async (id: number): Promise<UpdateResponse> => {
  try {
    const response = await apiClient.get<any>(`/updates/get_update.php?id=${id}`)
    const data = response.data

    if (data.success && data.data) {
      const u = data.data
      const update = {
        ...u,
        author: {
          id: u.author_id,
          username: u.author_name
        }
      }
      return { success: true, update }
    }

    return {
      success: false,
      update: {} as Update,
      error: data.message || 'Error al obtener la actualización'
    }
  } catch (error: any) {
    return {
      success: false,
      update: {} as Update,
      error: error.response?.data?.message || 'Error de conexión'
    }
  }
}

/**
 * Crea una nueva actualización
 */
export const createUpdate = async (data: UpdateData): Promise<UpdateResponse> => {
  try {
    const response = await apiClient.post<UpdateResponse>('/updates/create_updates.php', data)
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
    // Nota: Usamos POST o PUT dependiendo de cómo lo maneje tu PHP, 
    // pero incluimos el ID en el body o query
    const response = await apiClient.post<UpdateResponse>(`/updates/edit_updates.php?id=${id}`, data)
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
export const deleteUpdate = async (id: number): Promise<{ success: boolean; message?: string; error?: string }> => {
  try {
    // Tu PHP exige el método DELETE y el ID por la URL (?id=X)
    const response = await apiClient.delete(`/updates/delete_updates.php?id=${id}`)
    return response.data
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.message || 'Error al eliminar la actualización',
      error: error.response?.data?.error
    }
  }
}
