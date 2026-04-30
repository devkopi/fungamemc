import { HiOutlineLightningBolt, HiOutlineCube, HiOutlineClock, HiOutlineCurrencyDollar } from 'react-icons/hi'

const StatCards = () => {
  const stats = [
    {
      label: 'Monedas',
      value: '25,430',
      change: '+12%',
      icon: HiOutlineCurrencyDollar,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      label: 'Nivel',
      value: '42',
      change: 'XP: 85%',
      icon: HiOutlineLightningBolt,
      color: 'from-primary-400 to-primary-600'
    },
    {
      label: 'Partidas',
      value: '1,204',
      change: '+5 hoy',
      icon: HiOutlineCube,
      color: 'from-blue-400 to-indigo-500'
    },
    {
      label: 'Tiempo Jugado',
      value: '156h',
      change: 'Récord: 8h/día',
      icon: HiOutlineClock,
      color: 'from-purple-400 to-pink-500'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <div key={index} className="card-interactive p-6 relative overflow-hidden group">
            <div className={`absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />
            
            <div className="flex flex-col gap-4">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-surface-dark shadow-lg`}>
                <Icon size={24} />
              </div>
              
              <div>
                <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl font-black">{stat.value}</h3>
                  <span className="text-xs font-bold text-primary-400">{stat.change}</span>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default StatCards
