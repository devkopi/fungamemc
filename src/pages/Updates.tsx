import { useState } from 'react'
import { UpdateCard } from '../components/updates/UpdateCard'
import { FaFilter } from 'react-icons/fa'

const Updates = () => {
  const [activeCategory, setActiveCategory] = useState('TODAS')
  
  const categories = ['TODAS', 'GENERAL', 'SERVIDOR', 'TIENDA', 'EVENTOS']

  const updatesData = [
    {
      date: "27 ABRIL, 2026",
      category: "SERVIDOR",
      title: "NUEVA MODALIDAD: SKYBLOCK RPG",
      description: "Hemos lanzado oficialmente nuestra versión más ambiciosa de Skyblock. Nuevas misiones, jefes personalizados y un sistema de economía renovado con más de 100 nuevos ítems únicos.",
      link: "/updates/skyblock-rpg"
    },
    {
      date: "25 ABRIL, 2026",
      category: "GENERAL",
      title: "OPTIMIZACIÓN DE RED EUROPA",
      description: "Mejoramos nuestra infraestructura en Europa para reducir el ping en un 30%. Conexión más estable para todos nuestros jugadores internacionales gracias a nuestros nuevos nodos en Madrid.",
      link: "/updates/red-europa"
    },
    {
      date: "20 ABRIL, 2026",
      category: "TIENDA",
      title: "REBAJAS DE PRIMAVERA: -25%",
      description: "Aprovecha descuentos exclusivos en todos los rangos y llaves de la tienda. Solo por tiempo limitado, ¡mejora tu equipo ahora!",
      link: "/tienda"
    },
    {
      date: "15 ABRIL, 2026",
      category: "EVENTOS",
      title: "TORNEO PVP: LA GRAN BATALLA",
      description: "Inscríbete en el torneo mensual de Box PvP. Premios en metálico y rangos exclusivos para los 3 mejores guerreros de la red.",
      link: "/updates/torneo-pvp"
    }
  ]

  const filteredUpdates = activeCategory === 'TODAS' 
    ? updatesData 
    : updatesData.filter(u => u.category === activeCategory)

  return (
    <div className="animate-fade-in pb-32">
      <section className="relative py-24 bg-surface-dark overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-primary-600/5 -z-10 blur-[120px] rounded-full -translate-y-1/2"></div>
        
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h1 className="text-6xl font-black tracking-tighter italic uppercase mb-6 leading-tight">
              CENTRO DE <span className="text-primary-500">ACTUALIZACIONES</span>
            </h1>
            <p className="text-gray-500 font-medium text-lg leading-relaxed max-w-xl">
              Mantente al día con todas las novedades, cambios y eventos que ocurren en la red de FungameMC.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3 text-primary-500 mr-4">
              <FaFilter className="text-xs" />
              <span className="text-[10px] font-black tracking-widest uppercase">FILTRAR</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[11px] font-black tracking-[0.2em] px-6 py-2.5 rounded-full transition-all ${
                  activeCategory === cat 
                  ? 'bg-primary-600 text-surface-dark' 
                  : 'text-gray-500 hover:text-white bg-white/5 border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-xs font-black tracking-[0.3em] text-gray-700 uppercase">
            ÚLTIMAS PUBLICACIONES
          </h2>
          <span className="text-[10px] font-black tracking-widest text-gray-700 uppercase">
            {filteredUpdates.length} ARTÍCULOS ENCONTRADOS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredUpdates.map((update, index) => (
            <UpdateCard key={index} {...update} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Updates
