import React, { useState, useEffect } from 'react'
import { HiOutlineX, HiOutlineSave } from 'react-icons/hi'
import { createUpdate, updateUpdate } from '../../api/updatesApi.ts'
import type { Update, UpdateData } from '../../api/types.ts'

interface UpdateFormProps {
  update?: Update | null
  onClose: () => void
  onSuccess: () => void
}

export const UpdateForm: React.FC<UpdateFormProps> = ({ update, onClose, onSuccess }) => {
  const [formData, setFormData] = useState<UpdateData>({
    title: '',
    content: '',
    status: 'draft'
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (update) {
      setFormData({
        title: update.title,
        content: update.content,
        status: update.status
      })
    }
  }, [update])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      let response
      if (update) {
        response = await updateUpdate(update.id, formData)
      } else {
        response = await createUpdate(formData)
      }

      if (response.success) {
        onSuccess()
      } else {
        // Mostrar el error específico del servidor si existe
        setError(response.error || 'Error al guardar la actualización')
        console.error('[UpdateForm Error]', response)
      }
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || 'Error de conexión')
      console.error('[UpdateForm Connection Error]', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-surface-dark/80 backdrop-blur-sm" 
        onClick={onClose}
      ></div>
      
      <div className="card-solid w-full max-w-2xl relative z-10 animate-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center p-6 border-b border-white/5">
          <h2 className="text-2xl font-black">
            {update ? 'Editar Actualización' : 'Nueva Actualización'}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/5 rounded-full transition-colors"
          >
            <HiOutlineX size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-6">
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-xl text-sm font-bold">
              {error}
            </div>
          )}

          <div className="flex flex-col gap-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-500">Título</label>
            <input 
              type="text"
              required
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary-500 transition-all font-bold"
              placeholder="Ej: Nueva modalidad Skyblock"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-500">Estado</label>
            <select 
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary-500 transition-all font-bold appearance-none"
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value as 'draft' | 'published' })}
            >
              <option value="draft" className="bg-surface-card">Borrador</option>
              <option value="published" className="bg-surface-card">Publicado</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-500">Contenido</label>
            <textarea 
              required
              rows={8}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary-500 transition-all font-medium resize-none"
              placeholder="Escribe el contenido de la actualización aquí..."
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            ></textarea>
          </div>

          <div className="flex justify-end gap-3 mt-4">
            <button 
              type="button"
              onClick={onClose}
              className="px-6 py-3 font-bold text-gray-400 hover:text-white transition-colors"
            >
              Cancelar
            </button>
            <button 
              type="submit"
              disabled={loading}
              className="btn-primary flex items-center gap-2"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-surface-dark/20 border-t-surface-dark rounded-full animate-spin"></div>
              ) : (
                <HiOutlineSave size={20} />
              )}
              <span>{update ? 'Actualizar' : 'Publicar'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
