import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router'
import { FaChevronLeft, FaCalendarAlt, FaShareAlt } from 'react-icons/fa'
import { getUpdate } from '../api/updatesApi.ts'
import type { Update } from '../api/types.ts'

const UpdateDetail = () => {
  const { id } = useParams()
  const [update, setUpdate] = useState<Update | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUpdate = async () => {
      if (!id) return
      setLoading(true)
      const response = await getUpdate(parseInt(id))
      if (response.success) {
        setUpdate(response.update)
      } else {
        setError(response.error || 'No se pudo encontrar la actualización')
      }
      setLoading(false)
    }

    fetchUpdate()
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface-dark">
        <div className="w-12 h-12 border-4 border-primary-500/20 border-t-primary-500 rounded-full animate-spin"></div>
      </div>
    )
  }

  if (error || !update) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-surface-dark p-6 text-center">
        <h1 className="text-4xl font-black mb-4 uppercase italic">Error 404</h1>
        <p className="text-gray-500 mb-8 font-medium">{error || 'La actualización que buscas no existe.'}</p>
        <Link to="/updates" className="btn-primary">Volver a noticias</Link>
      </div>
    )
  }

  return (
    <div className="animate-fade-in pb-32">
      <section className="py-20 bg-surface-dark border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-600/5 -z-10 blur-[120px] rounded-full -translate-y-1/2"></div>
        
        <div className="container mx-auto px-6">
          <Link 
            to="/updates" 
            className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-primary-500 hover:text-white transition-colors mb-12 uppercase"
          >
            <FaChevronLeft /> VOLVER A ACTUALIZACIONES
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center gap-2 text-[10px] font-black tracking-widest text-gray-500 uppercase">
              <FaCalendarAlt /> {new Date(update.created_at).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/10"></span>
            <span className="px-3 py-1 bg-primary-500/10 text-primary-500 text-[9px] font-black tracking-widest rounded-full uppercase">
              GENERAL
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter italic uppercase mb-8 leading-[0.9]">
            {update.title}
          </h1>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="bg-surface-card border border-white/5 p-10 md:p-16 rounded-2xl">
              <div className="prose prose-invert max-w-none text-gray-400 text-lg leading-relaxed whitespace-pre-wrap font-medium">
                {update.content}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-8">
            <div className="card-solid p-8">
              <h4 className="text-xs font-black tracking-widest mb-6 uppercase text-gray-500">COMPARTIR</h4>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href)
                  alert('¡Enlace copiado!')
                }}
                className="w-full py-4 bg-white/5 hover:bg-white text-white hover:text-surface-dark font-black tracking-widest text-[10px] transition-all uppercase flex items-center justify-center gap-3 rounded-xl"
              >
                <FaShareAlt /> COPIAR ENLACE
              </button>
            </div>

            <div className="card-solid p-8">
              <h4 className="text-xs font-black tracking-widest mb-6 uppercase text-gray-500">AUTOR</h4>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 relative">
                  <img 
                    src={`https://mc-heads.net/avatar/${update.author?.username || 'Steve'}/64`} 
                    alt={update.author?.username}
                    className="w-full h-full rounded-xl object-contain bg-primary-600/10 border border-primary-500/20 p-1"
                  />
                </div>
                <div>
                  <p className="text-sm font-black italic uppercase text-white">{update.author?.username || 'Administración'}</p>
                  <p className="text-[10px] text-gray-600 font-bold uppercase">Equipo de FungameMC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UpdateDetail
