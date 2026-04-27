import { MemberCard } from '../components/team/MemberCard'

const Team = () => {
  const staff = {
    administration: [
      { username: 'Notch', rank: 'OWNER', rankColor: 'bg-red-500', discord: 'user#0000' },
      { username: 'Notch', rank: 'CO-OWNER', rankColor: 'bg-orange-500', discord: 'user#0000' }
    ],
    development: [
      { username: 'jeb_', rank: 'LEAD DEVELOPER', rankColor: 'bg-purple-600', discord: 'user#0000' },
      { username: 'Dinnerbone', rank: 'DEVELOPER', rankColor: 'bg-teal-500', discord: 'user#0000' },
      { username: 'Grumm', rank: 'DEVELOPER', rankColor: 'bg-blue-400', discord: 'user#0000' }
    ],
    moderation: [
      { username: 'Alex', rank: 'MODERADOR', rankColor: 'bg-blue-500', discord: 'user#0000' },
      { username: 'Grumpy', rank: 'MODERADOR', rankColor: 'bg-blue-500', discord: 'user#0000' }
    ],
    support: [
      { username: 'Dream', rank: 'HELPER', rankColor: 'bg-green-500', discord: 'user#0000' },
      { username: 'Technoblade', rank: 'BUILDER', rankColor: 'bg-yellow-500', discord: 'user#0000' }
    ]
  }

  return (
    <div className="animate-fade-in pb-32">
      <section className="relative py-24 bg-surface-dark overflow-hidden">
        <div className="absolute inset-0 bg-primary-600/5 -z-10 blur-[120px] rounded-full -translate-y-1/2"></div>

        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl font-black tracking-tighter italic uppercase mb-6 leading-tight">
            NUESTRO <span className="text-primary-500">EQUIPO</span>
          </h1>
          <p className="text-gray-500 font-medium text-lg leading-relaxed max-w-xl mx-auto">
            Conoce a las personas que hacen posible FunGameMC todos los días.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 space-y-24">
        {/* Administración */}
        <div>
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-xs font-black tracking-[0.4em] text-primary-500 uppercase">ADMINISTRACIÓN</h2>
            <div className="h-px bg-white/5 grow"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {staff.administration.map((member, index) => (
              <MemberCard key={index} {...member} />
            ))}
          </div>
        </div>

        {/* Desarrollo */}
        <div>
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-xs font-black tracking-[0.4em] text-purple-500 uppercase">DESARROLLO</h2>
            <div className="h-px bg-white/5 grow"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {staff.development.map((member, index) => (
              <MemberCard key={index} {...member} />
            ))}
          </div>
        </div>

        {/* Moderación */}
        <div>
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-xs font-black tracking-[0.4em] text-blue-500 uppercase">MODERACIÓN</h2>
            <div className="h-px bg-white/5 grow"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {staff.moderation.map((member, index) => (
              <MemberCard key={index} {...member} />
            ))}
          </div>
        </div>

        {/* Soporte */}
        <div>
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-xs font-black tracking-[0.4em] text-green-500 uppercase">SOPORTE & CONSTRUCCIÓN</h2>
            <div className="h-px bg-white/5 grow"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {staff.support.map((member, index) => (
              <MemberCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Team
