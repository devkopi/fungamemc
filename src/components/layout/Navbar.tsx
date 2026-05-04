import { NavLink } from 'react-router'
import { FaHome, FaSyncAlt, FaBook, FaUsers, FaShoppingCart, FaUser } from 'react-icons/fa'
import logo from '../../assets/img/logo fungame.png'

export const Navbar = () => {
  const navLinks = [
    { name: 'INICIO', to: '/', icon: <FaHome /> },
    { name: 'ACTUALIZACIONES', to: '/updates', icon: <FaSyncAlt /> },
    { name: 'WIKI', to: '/wiki', icon: <FaBook /> },
    { name: 'EQUIPO', to: '/team', icon: <FaUsers /> },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-dark/80 backdrop-blur-xl border-b border-white/5 py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-4 group cursor-pointer shrink-0">
          <img src={logo} alt="Logo" className="w-14 h-12 object-contain group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-black tracking-tighter italic uppercase">
            FUN<span className="text-primary-500">GAME</span>
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((item) => (
            <NavLink 
              key={item.name}
              to={item.to} 
              className={({ isActive }) => `flex items-center gap-2 text-[13px] font-black tracking-[0.2em] transition-all hover:text-primary-500 ${isActive ? 'text-primary-500' : 'text-gray-400'}`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <NavLink 
            to="/tienda" 
            className="flex items-center gap-3 px-7 py-2.5 bg-gradient-to-r from-primary-600 to-primary-400 text-white text-[13px] font-black tracking-[0.2em] rounded-full hover:scale-105 transition-all shadow-lg shadow-primary-500/20 uppercase"
          >
            <FaShoppingCart className="text-lg" />
            TIENDA
          </NavLink>
          
          <NavLink 
            to="/login" 
            className="flex items-center gap-3 px-7 py-2.5 bg-white/5 border border-white/10 text-white text-[13px] font-black tracking-[0.2em] rounded-full hover:bg-white hover:text-surface-dark transition-all uppercase"
          >
            <FaUser className="text-lg" />
            INGRESAR
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
