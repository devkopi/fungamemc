import React from 'react'
import type { User } from '../../api/types'
import { HiOutlineBadgeCheck, HiOutlineExternalLink } from 'react-icons/hi'

interface ProfileSummaryProps {
  user: User
}

const ProfileSummary: React.FC<ProfileSummaryProps> = ({ user }) => {
  return (
    <div className="card-solid p-8 flex flex-col md:flex-row items-center gap-8">
      <div className="relative">
        <div className="w-32 h-32 rounded-3xl overflow-hidden border-4 border-primary-500/20 shadow-2xl">
          <img 
            src={`https://mc-heads.net/avatar/${user.username}/128`} 
            alt={user.username}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-primary-500 flex items-center justify-center border-4 border-surface-card text-surface-dark shadow-xl">
          <HiOutlineBadgeCheck size={24} />
        </div>
      </div>

      <div className="flex-1 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
          <h2 className="text-3xl font-black">{user.username}</h2>
          <span className="px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-xs font-bold border border-primary-500/20 w-fit mx-auto md:mx-0">
            USUARIO VERIFICADO
          </span>
        </div>
        <p className="text-gray-400 mb-6">{user.email}</p>
        
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          <button className="px-5 py-2 bg-white/5 hover:bg-white/10 rounded-xl font-bold transition-all flex items-center gap-2 border border-white/5">
            Editar Perfil
          </button>
          <button className="px-5 py-2 bg-primary-500/10 hover:bg-primary-500/20 text-primary-400 rounded-xl font-bold transition-all flex items-center gap-2 border border-primary-500/20">
            Ver en el juego <HiOutlineExternalLink />
          </button>
        </div>
      </div>

      <div className=" gap-8 border-l border-white/5 pl-8 hidden lg:flex">
        <div className="text-center">
          <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Rango</p>
          <p className="text-primary-500 font-black text-xl">VIP+</p>
        </div>
        <div className="text-center">
          <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Karma</p>
          <p className="text-white font-black text-xl">12.5k</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileSummary
