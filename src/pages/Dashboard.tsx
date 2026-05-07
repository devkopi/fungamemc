import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import Sidebar from '../components/dashboard/Sidebar'
import ProfileSummary from '../components/dashboard/ProfileSummary'
import UpdatesManager from '../components/dashboard/UpdatesManager'

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

      <div className="p-4 md:p-8 flex flex-col lg:flex-row gap-8 relative z-10 max-w-[1600px] mx-auto">
        <aside className="hidden lg:block sticky top-28 h-fit">
          <Sidebar 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
          />
        </aside>

        <main className="flex-1 flex flex-col gap-8 w-full">
          {/* Mobile Tabs */}
          <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {[
              { id: 'overview', label: 'Resumen' },
              { id: 'profile', label: 'Mi Perfil' },
              { id: 'updates', label: 'Updates', hidden: !user.permissions?.can_create_updates },
              { id: 'settings', label: 'Ajustes' }
            ].filter(t => !t.hidden).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl font-bold whitespace-nowrap transition-all ${
                  activeTab === tab.id 
                    ? 'bg-primary-500 text-surface-dark' 
                    : 'bg-white/5 text-gray-400'
                }`}
              >
                {tab.label}
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
                  {(user.role || (user as any).role_name || (user as any).rank) ? (
                    <span className="px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest bg-gradient-to-r from-primary-500/20 to-primary-600/10 text-primary-400 border border-primary-500/20 shadow-[0_0_15px_rgba(var(--color-primary-500),0.1)] flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse"></div>
                      {typeof user.role === 'object' ? user.role.name : (user.role || (user as any).role_name || (user as any).rank)}
                    </span>
                  ) : (
                    <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-green-500/10 border border-green-500/20">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                      <p className="text-[10px] text-green-500 font-black uppercase tracking-widest">En Línea</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </header>

          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 gap-8">
                <ProfileSummary user={user} />
                <div className="card-solid p-8 border-l-4 border-l-primary-500">
                  <h3 className="text-xl font-black mb-4">¡Bienvenido a FungameMC!</h3>
                  <p className="text-gray-400">
                    Este es tu centro de control personal. Desde aquí podrás gestionar tu cuenta, 
                    ver tus estadísticas y estar al tanto de las últimas novedades.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'updates' && user.permissions?.can_create_updates && (
              <UpdatesManager />
            )}

            {(activeTab !== 'overview' && activeTab !== 'updates') && (
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
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard