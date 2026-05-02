import { useParams, Link } from 'react-router'
import { FaChevronLeft, FaCalendarAlt, FaShareAlt } from 'react-icons/fa'

const UpdateDetail = () => {
  const { slug } = useParams()

  return (
    <div className="animate-fade-in pb-32">
      <section className="py-20 bg-surface-dark border-b border-white/5">
        <div className="container mx-auto px-6">
          <Link 
            to="/updates" 
            className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-primary-500 hover:text-white transition-colors mb-12 uppercase"
          >
            <FaChevronLeft /> VOLVER A ACTUALIZACIONES
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center gap-2 text-[10px] font-black tracking-widest text-gray-500 uppercase">
              <FaCalendarAlt /> 27 ABRIL, 2026
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/10"></span>
            <span className="px-3 py-1 bg-primary-500/10 text-primary-500 text-[9px] font-black tracking-widest rounded-full uppercase">
              SERVIDOR
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter italic uppercase mb-8 leading-[0.9]">
            {slug?.replace(/-/g, ' ')}
          </h1>
          
          <p className="text-xl text-gray-400 font-medium max-w-3xl leading-relaxed italic">
            Descubre todos los detalles técnicos y novedades de nuestra última gran actualización.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 prose prose-invert max-w-none">
            <div className="bg-surface-card border border-white/5 p-10 md:p-16 rounded-2xl">
              <h2 className="text-3xl font-black italic uppercase mb-8">INTRODUCCIÓN</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Esta es una maqueta de cómo se verá el contenido extendido de una actualización. Aquí podrás incluir imágenes, listas de cambios (changelogs), y explicaciones detalladas de las nuevas mecánicas.
              </p>
              
              <h2 className="text-3xl font-black italic uppercase mb-8">CAMBIOS PRINCIPALES</h2>
              <ul className="space-y-6 list-none p-0">
                {[
                  "Optimización del motor de economía.",
                  "Nuevos jefes mundiales en la zona RPG.",
                  "Sistema de clanes mejorado con base propia.",
                  "Corrección de errores menores en el chat global."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-400 text-lg">
                    <span className="w-2 h-2 rounded-full bg-primary-500 mt-2.5 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-8">
            <div className="card-solid p-8">
              <h4 className="text-xs font-black tracking-widest mb-6 uppercase">COMPARTIR</h4>
              <button className="w-full py-4 bg-white/5 hover:bg-white text-white hover:text-surface-dark font-black tracking-widest text-[10px] transition-all uppercase flex items-center justify-center gap-3">
                <FaShareAlt /> COPIAR ENLACE
              </button>
            </div>

            <div className="card-solid p-8">
              <h4 className="text-xs font-black tracking-widest mb-6 uppercase">AUTOR</h4>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center font-black text-surface-dark">A</div>
                <div>
                  <p className="text-sm font-black italic uppercase">Administración</p>
                  <p className="text-[10px] text-gray-600 font-bold uppercase">Equipo de Desarrollo</p>
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
