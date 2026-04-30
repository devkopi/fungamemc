import React from 'react'
import { GiSparkles } from 'react-icons/gi'
import {  HiOutlineShoppingBag, HiOutlineLogin } from 'react-icons/hi'

const RecentActivity = () => {
  const activities = [
    {
      type: 'achievement',
      title: '¡Logro Desbloqueado!',
      description: 'Has ganado 10 partidas de SkyWars seguidas.',
      time: 'Hace 2 horas',
      icon: GiSparkles,
      color: 'text-yellow-500'
    },
    {
      type: 'purchase',
      title: 'Compra Exitosa',
      description: 'Has adquirido el Rango VIP+ por 30 días.',
      time: 'Hace 5 horas',
      icon: HiOutlineShoppingBag,
      color: 'text-primary-500'
    },
    {
      type: 'login',
      title: 'Sesión Iniciada',
      description: 'Conectado desde IP: 192.168.1.XXX',
      time: 'Hace 12 horas',
      icon: HiOutlineLogin,
      color: 'text-blue-500'
    }
  ]

  return (
    <div className="card-solid p-8 h-full">
      <h3 className="text-xl font-black mb-6">Actividad Reciente</h3>
      
      <div className="flex flex-col gap-6">
        {activities.map((activity, index) => {
          const Icon = activity.icon
          return (
            <div key={index} className="flex gap-4 group cursor-pointer">
              <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${activity.color} group-hover:scale-110 transition-transform`}>
                <Icon size={24} />
              </div>
              
              <div className="flex-1 border-b border-white/5 pb-4 group-last:border-0">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-white">{activity.title}</h4>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
                <p className="text-sm text-gray-400">{activity.description}</p>
              </div>
            </div>
          )
        })}
      </div>
      
      <button className="w-full mt-6 py-3 rounded-xl border border-white/5 text-gray-400 font-bold hover:bg-white/5 transition-all">
        Ver todo el historial
      </button>
    </div>
  )
}

export default RecentActivity
