import { useState, useEffect } from 'react'
import { HiOutlinePlus, HiOutlinePencil, HiOutlineTrash, HiOutlineRefresh } from 'react-icons/hi'
import { getUpdates, deleteUpdate } from '../../api/updatesApi.ts'
import type { Update } from '../../api/types.ts'
import { UpdateForm } from './UpdateForm.tsx'
import { useAuth } from '../../hooks/useAuth.ts'

const UpdatesManager = () => {
  const { user } = useAuth()
  const [updates, setUpdates] = useState<Update[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingUpdate, setEditingUpdate] = useState<Update | null>(null)

  const fetchUpdates = async () => {
    setLoading(true)
    const response = await getUpdates(true)
    if (response.success) {
      setUpdates(response.updates)
      setError(null)
    } else {
      setError(response.error || 'Error al cargar actualizaciones')
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchUpdates()
  }, [])

  const handleDelete = async (id: number) => {
    if (!window.confirm('¿Estás seguro de que quieres eliminar esta actualización?')) return

    const response = await deleteUpdate(id)
    if (response.success) {
      setUpdates(updates.filter(u => u.id !== id))
    } else {
      alert(response.error || 'Error al eliminar')
    }
  }

  const handleEdit = (update: Update) => {
    setEditingUpdate(update)
    setIsFormOpen(true)
  }

  const handleCreate = () => {
    setEditingUpdate(null)
    setIsFormOpen(true)
  }

  const handleFormClose = () => {
    setIsFormOpen(false)
    setEditingUpdate(null)
  }

  const handleFormSuccess = () => {
    handleFormClose()
    fetchUpdates()
  }

  if (loading && updates.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12">
        <div className="w-10 h-10 border-4 border-primary-500/20 border-t-primary-500 rounded-full animate-spin mb-4"></div>
        <p className="text-gray-400 font-bold">Cargando actualizaciones...</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-black mb-1">Gestión de Actualizaciones</h2>
          <p className="text-gray-400 text-sm">Crea y administra las noticias del servidor.</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={fetchUpdates}
            className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all text-gray-400 hover:text-white"
            title="Refrescar"
          >
            <HiOutlineRefresh size={20} />
          </button>
          {user?.permissions?.can_create_updates && (
            <button
              onClick={handleCreate}
              className="btn-primary flex items-center gap-2"
            >
              <HiOutlinePlus size={20} />
              <span>Nueva Update</span>
            </button>
          )}
        </div>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-2xl text-sm font-bold">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 gap-4">
        {updates.length === 0 ? (
          <div className="card-solid p-12 text-center border-dashed border-2 border-white/5 bg-transparent">
            <p className="text-gray-500 font-medium">No hay actualizaciones registradas.</p>
          </div>
        ) : (
          updates.map((update) => (
            <div key={update.id} className="card-solid p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider ${update.status === 'published'
                    ? 'bg-green-500/10 text-green-500 border border-green-500/20'
                    : 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'
                    }`}>
                    {update.status === 'published' ? 'Publicado' : 'Borrador'}
                  </span>
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                    {new Date(update.created_at).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                </div>
                <h3 className="text-lg font-black text-white group-hover:text-primary-500 transition-colors">
                  {update.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                {user?.permissions?.can_edit_updates && (
                  <button
                    onClick={() => handleEdit(update)}
                    className="p-2.5 bg-white/5 hover:bg-primary-500/10 text-gray-400 hover:text-primary-500 rounded-xl transition-all border border-transparent hover:border-primary-500/20"
                    title="Editar"
                  >
                    <HiOutlinePencil size={18} />
                  </button>
                )}
                {user?.permissions?.can_delete_updates && (
                  <button
                    onClick={() => handleDelete(update.id)}
                    className="p-2.5 bg-white/5 hover:bg-red-500/10 text-gray-400 hover:text-red-500 rounded-xl transition-all border border-transparent hover:border-red-500/20"
                    title="Eliminar"
                  >
                    <HiOutlineTrash size={18} />
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {isFormOpen && (
        <UpdateForm
          update={editingUpdate}
          onClose={handleFormClose}
          onSuccess={handleFormSuccess}
        />
      )}
    </div>
  )
}

export default UpdatesManager
