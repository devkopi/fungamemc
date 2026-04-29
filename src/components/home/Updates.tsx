import { FaSyncAlt, FaChevronRight } from 'react-icons/fa'

export const Updates = () => {
  const news = [
    {
      date: "27 ABRIL, 2026",
      title: "NUEVA MODALIDAD: SKYBLOCK RPG",
      description: "Hemos lanzado oficialmente nuestra versión más ambiciosa de Skyblock. Nuevas misiones, jefes personalizados y un sistema de economía renovado.",
      link: "/updates/skyblock-rpg"
    },
    {
      date: "25 ABRIL, 2026",
      title: "OPTIMIZACIÓN DE RED EUROPA",
      description: "Mejoramos nuestra infraestructura en Europa para reducir el ping en un 30%. Conexión más estable para todos nuestros jugadores internacionales.",
      link: "/updates/red-europa"
    }
  ];

  return (
    <section className="py-32 bg-surface-dark border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-5xl font-black tracking-tighter italic flex items-center gap-6">
            <FaSyncAlt className="text-primary-500 animate-spin-slow" />
            ULTIMAS ACTUALIZACIONES
          </h2>
          <a href="/updates" className="hidden md:flex items-center gap-2 text-xs font-black tracking-[0.3em] text-primary-500 hover:text-white transition-colors group">
            VER TODO <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.map((item, index) => (
            <a 
              key={index} 
              href={item.link}
              className="card-solid p-8 hover:border-primary-500/30 transition-all cursor-pointer group flex flex-col"
            >
              <span className="text-[10px] font-black tracking-widest text-primary-500 mb-4 block">{item.date}</span>
              <h3 className="text-2xl font-black mb-4 group-hover:text-primary-500 transition-colors italic uppercase">{item.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed mb-8 grow">
                {item.description}
              </p>
              <div className="flex items-center gap-2 text-xs font-black text-white/40 group-hover:text-white transition-colors">LEER MÁS →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
