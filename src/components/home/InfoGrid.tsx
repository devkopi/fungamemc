import { FaShoppingCart, FaDiscord, FaVoteYea, FaBook } from 'react-icons/fa';

export const InfoGrid = () => {
  const cards = [
    {
      title: "TIENDA",
      description: "Adquiere rangos, cosméticos y llaves para mejorar tu experiencia.",
      cta: "COMPRAR AHORA",
      link: "/tienda",
      color: "bg-teal-600",
      icon: <FaShoppingCart className="w-10 h-10" />
    },
    {
      title: "DISCORD",
      description: "Únete a nuestra comunidad de más de 10,000 miembros.",
      cta: "UNIRSE AL DISCORD",
      link: "https://discord.gg/XVXdHBk5pu",
      color: "bg-blue-600",
      icon: <FaDiscord className="w-10 h-10" />
    },
    {
      title: "VOTAR",
      description: "Vota por el servidor diariamente y recibe recompensas increíbles.",
      cta: "VOTAR AHORA",
      link: "/votar",
      color: "bg-orange-600",
      icon: <FaVoteYea className="w-10 h-10" />
    }
  ];

  return (
    <section className="py-24 bg-surface-dark relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 ">
          {cards.map((card, index) => (
            <div key={index} className="group relative bg-surface-card border border-white/5 p-10 flex flex-col items-center text-center hover:border-primary-500/30 transition-all duration-500 overflow-hidden">
              <div className={`w-20 h-20 rounded-full ${card.color} flex items-center justify-center mb-8 shadow-lg transform group-hover:scale-110 transition-transform duration-500 text-white`}>
                {card.icon}
              </div>
              
              <h3 className="text-2xl font-black mb-4 tracking-tighter italic">{card.title}</h3>
              <p className="text-gray-500 text-sm mb-10 leading-relaxed font-medium">
                {card.description}
              </p>
              
              <a 
                href={card.link}
                target={card.link.startsWith('http') ? '_blank' : '_self'}
                rel="noreferrer"
                className="w-full py-4 border-2 border-white/5 font-black text-xs tracking-[0.2em] hover:bg-white hover:text-surface-dark transition-all cursor-pointer text-center"
              >
                {card.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="bg-surface-card border border-white/5 p-12 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="text-4xl font-black mb-6 tracking-tighter italic flex items-center gap-4">
              <FaBook className="text-primary-500" />
              ¿NECESITAS AYUDA?
            </h2>
            <p className="text-gray-500 leading-relaxed font-medium">
              Consulta nuestra base de conocimientos completa. Guías de inicio, reglas detalladas, información técnica y mucho más para que tu experiencia sea perfecta.
            </p>
          </div>
          <a 
            href="/wiki" 
            className="px-12 py-5 bg-primary-600 text-surface-dark font-black tracking-[0.2em] rounded-sm hover:bg-primary-500 transition-all flex items-center gap-4"
          >
            IR A LA WIKI
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
