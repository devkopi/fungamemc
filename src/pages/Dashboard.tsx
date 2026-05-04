import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import Sidebar from '../components/dashboard/Sidebar'
import StatCards from '../components/dashboard/StatCards'
import ProfileSummary from '../components/dashboard/ProfileSummary'
import RecentActivity from '../components/dashboard/RecentActivity'
import { HiOutlineLightningBolt } from 'react-icons/hi'

const Dashboard = () => {
  const { user, loading } = useAuth()
  const [activeTab, setActiveTab] = useState('overview')

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface-dark">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary-500/20 border-t-primary-500 rounded-full animate-spin"></div>
          <p className="text-gray-400 font-bold animate-pulse">Cargando tu panel...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface-dark">
        <div className="card-solid p-8 text-center max-w-md">
          <h2 className="text-2xl font-black mb-4">No autenticado</h2>
          <p className="text-gray-400 mb-6">Debes iniciar sesión para acceder a esta sección.</p>
          <a href="/login" className="btn-primary inline-block">Ir al Login</a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-surface-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10"></div>

      <div className="p-4 md:p-8 flex gap-8 relative z-10">
        <aside className="hidden lg:block sticky top-28 h-fit">
          <Sidebar 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
          />
        </aside>

        <main className="flex-1 flex flex-col gap-8 max-w-7xl mx-auto w-full">
          <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {['overview', 'profile', 'stats', 'settings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl font-bold whitespace-nowrap transition-all ${
                  activeTab === tab 
                    ? 'bg-primary-500 text-surface-dark' 
                    : 'bg-white/5 text-gray-400'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">
                Hola, <span className="text-gradient">{user.username}</span>
              </h1>
              <p className="text-gray-400 font-medium text-lg">Bienvenido de vuelta a tu panel de control.</p>
            </div>
            
            <div className="flex items-center gap-4 bg-white/5 p-2 pr-6 rounded-2xl border border-white/5 backdrop-blur-md">
              <div className="w-14 h-14 rounded-xl border-2 border-primary-500/20 overflow-hidden shadow-2xl bg-surface-card">
                 <img src={`https://mc-heads.net/avatar/${user.username}/64`} alt="Avatar" className="w-full h-full object-cover" />
              </div>
              <div className="text-left">
                <p className="font-black text-white leading-none mb-1">{user.username}</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <p className="text-[10px] text-primary-500 font-black uppercase tracking-widest">En Línea</p>
                </div>
              </div>
            </div>
          </header>

          {activeTab === 'overview' && (
            <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <StatCards />

              <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                <div className="xl:col-span-2 flex flex-col gap-8">
                  <ProfileSummary user={user} />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="card-interactive p-6 border-l-4 border-l-primary-500 bg-gradient-to-br from-white/[0.02] to-transparent">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="font-black uppercase text-xs text-gray-500 tracking-widest">Estado del Servidor</h4>
                        <span className="px-2 py-1 rounded bg-green-500/10 text-green-500 text-[10px] font-black">ESTABLE</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="w-12 h-12 rounded-full border-4 border-white/5 flex items-center justify-center text-primary-500 font-bold text-xs">
                            94%
                          </div>
                          <svg className="absolute inset-0 w-12 h-12 -rotate-90">
                            <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="4" className="text-primary-500" strokeDasharray="125.6" strokeDashoffset="7.5" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-black text-lg">Online</p>
                          <p className="text-gray-400 text-sm">1,240 / 2,000 jugadores</p>
                        </div>
                      </div>
                    </div>

                    <div className="card-interactive p-6 border-l-4 border-l-blue-500 bg-gradient-to-br from-white/[0.02] to-transparent">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="font-black uppercase text-xs text-gray-500 tracking-widest">Siguiente Recompensa</h4>
                        <HiOutlineLightningBolt className="text-blue-500" />
                      </div>
                      <p className="font-black text-lg">Cofre Legendario</p>
                      <div className="mt-2 w-full bg-white/5 h-2 rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full w-[65%] shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                      </div>
                      <p className="text-gray-500 text-xs mt-2 font-bold">DISPONIBLE EN 04:20:15</p>
                    </div>
                  </div>
                </div>

                <div className="xl:col-span-1">
                  <RecentActivity />
                </div>
              </div>
            </div>
          )}

        {activeTab !== 'overview' && (
          <div className="card-solid p-12 text-center">
            <h2 className="text-3xl font-black mb-4">Sección en construcción</h2>
            <p className="text-gray-400 mb-8">Estamos trabajando para traerte esta funcionalidad muy pronto.</p>
            <button 
              onClick={() => setActiveTab('overview')}
              className="btn-primary"
            >
              Volver al Resumen
            </button>
          </div>
        )}
      </main>
    </div>
  </div>
  )
}

export default Dashboard