import { useState } from 'react'
import logo from '../../assets/img/logo fungame.png'

export const Hero = () => {
  const [copied, setCopied] = useState(false)

  const copyIP = () => {
    navigator.clipboard.writeText('play.fungamesmc.net')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-600/10 via-transparent to-surface-dark -z-10"></div>
      
      <div className="container mx-auto px-6 pt-20">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-12 group">
            <div className="absolute inset-0 bg-primary-500/20 blur-[100px] rounded-full group-hover:bg-primary-500/30 transition-all duration-700"></div>
            <img 
              src={logo} 
              alt="FunGame MC Logo" 
              className="relative z-10 w-64 md:w-[450px] drop-shadow-[0_0_50px_rgba(0,0,0,0.8)] animate-float"
            />
          </div>

          <div className="max-w-2xl mb-12">
            <h2 className="text-xl md:text-3xl font-black tracking-[0.3em] uppercase text-white/90 mb-4 italic">
              UNA EXPERIENCIA <span className="text-primary-500">ÚNICA</span>
            </h2>
            <p className="text-gray-400 font-medium tracking-wide">
              Únete a la comunidad más grande y competitiva de habla hispana.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <button 
              onClick={copyIP}
              className="group relative flex items-center bg-surface-card border border-white/10 p-1 rounded-full pl-6 pr-2 hover:border-primary-500/50 transition-all cursor-pointer overflow-hidden"
            >
              <span className={`text-sm font-black tracking-widest mr-4 transition-all duration-300 ${copied ? 'text-primary-500 scale-105' : 'text-gray-300'}`}>
                {copied ? '¡IP COPIADA!' : 'PLAY.FUNGAMESMC.NET'}
              </span>
              <div className={`p-3 rounded-full transition-colors duration-300 ${copied ? 'bg-white text-surface-dark' : 'bg-primary-600 text-surface-dark group-hover:bg-primary-500'}`}>
                {copied ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                )}
              </div>
            </button>

            <a href="/tienda" className="px-10 py-4 bg-white text-surface-dark font-black tracking-[0.2em] rounded-full hover:bg-primary-500 transition-all transform hover:scale-105 shadow-xl">
              VISITAR TIENDA
            </a>
          </div>

          <div className="mt-24 flex items-center gap-10 opacity-50">
            <div className="text-center">
              <div className="text-2xl font-black text-white">+ 1.21</div>
              <div className="text-[10px] font-bold tracking-widest uppercase">Versiones</div>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div className="text-center">
              <div className="text-2xl font-black text-white">+500</div>
              <div className="text-[10px] font-bold tracking-widest uppercase">Online</div>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div className="text-center">
              <div className="text-2xl font-black text-white">EUROPA</div>
              <div className="text-[10px] font-bold tracking-widest uppercase">Host</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
