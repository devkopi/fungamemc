import { useState, useEffect } from 'react'
import { UpdateCard } from '../components/updates/UpdateCard'
import { getUpdates } from '../api/updatesApi'
import type { Update } from '../api/types'
import UpdateSkeleton from '../components/updates/UpdateSkeleton'

const Updates = () => {
  const [updates, setUpdates] = useState<Update[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUpdates = async () => {
      setLoading(true)
      const response = await getUpdates()
      if (response.success) {
        // Solo mostrar actualizaciones publicadas en la página global
        setUpdates(response.updates.filter(u => u.status === 'published'))
      } else {
        setError(response.error || 'Error al cargar las actualizaciones')
      }
      setLoading(false)
    }

    fetchUpdates()
  }, [])

  return (
    <div className="animate-fade-in pb-32">
      <section className="relative py-24 bg-surface-dark overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-primary-600/5 -z-10 blur-[120px] rounded-full -translate-y-1/2"></div>
        
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-black tracking-tighter italic uppercase mb-6 leading-tight">
              CENTRO DE <span className="text-primary-500">ACTUALIZACIONES</span>
            </h1>
            <p className="text-gray-500 font-medium text-lg leading-relaxed max-w-xl">
              Mantente al día con todas las novedades, cambios y eventos que ocurren en la red de FungameMC.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-xs font-black tracking-[0.3em] text-gray-700 uppercase">
            ÚLTIMAS PUBLICACIONES
          </h2>
          <span className="text-[10px] font-black tracking-widest text-gray-700 uppercase">
            {updates.length} ARTÍCULOS ENCONTRADOS
          </span>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <UpdateSkeleton key={i} />
            ))}
          </div>
        ) : error ? (
          <div className="card-solid p-12 text-center">
            <p className="text-red-500 font-bold">{error}</p>
          </div>
        ) : updates.length === 0 ? (
          <div className="card-solid p-12 text-center">
            <p className="text-gray-500 font-medium">No se encontraron actualizaciones publicadas.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {updates.map((update) => (
              <UpdateCard 
                key={update.id} 
                id={update.id}
                title={update.title}
                description={update.content}
                date={new Date(update.created_at).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
                author={update.author}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default Updates
