import React from 'react'
import { 
  HiOutlineViewGrid, 
  HiOutlineUser, 
  HiOutlineChartBar, 
  HiOutlineCog,
  HiOutlineLogout,
  HiOutlinePencilAlt
} from 'react-icons/hi'
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, }) => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  }

  const menuItems = [
    { id: 'overview', label: 'Resumen', icon: HiOutlineViewGrid },
    { id: 'profile', label: 'Mi Perfil', icon: HiOutlineUser },
    { id: 'updates', label: 'Updates', icon: HiOutlinePencilAlt, hidden: !user?.permissions?.can_create_updates },
    { id: 'stats', label: 'Estadísticas', icon: HiOutlineChartBar },
    { id: 'settings', label: 'Ajustes', icon: HiOutlineCog },
  ].filter(item => !item.hidden)

  return (
    <div className="w-64 glass h-[calc(100vh-4rem)] rounded-3xl p-6 flex flex-col gap-8">
      <div className="flex items-center gap-3 px-2">
        <div className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center border border-primary-500/30">
          <span className="text-primary-500 font-black text-xl">F</span>
        </div>
        <span className="font-heading font-black text-xl tracking-tight">DASHBOARD</span>
      </div>

      <nav className="flex flex-col gap-2 flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`
                flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300
                ${isActive 
                  ? 'bg-primary-500 text-surface-dark font-bold shadow-lg shadow-primary-500/20' 
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'}
              `}
            >
              <Icon size={24} />
              <span>{item.label}</span>
            </button>
          )
        })}
      </nav>

      <button
        onClick={handleLogout}
        className="flex items-center gap-4 px-4 py-3 rounded-2xl text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all duration-300 mt-auto"
      >
        <HiOutlineLogout size={24} />
        <span className="font-bold cursor-pointer">Cerrar Sesión</span>
      </button>
    </div>
  )
}

export default Sidebar
