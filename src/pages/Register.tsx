import { Link } from 'react-router'
import { FaUser, FaLock, FaEnvelope, FaChevronRight, FaArrowLeft, FaShieldAlt } from 'react-icons/fa'

const Register = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center relative overflow-hidden px-6 py-20">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary-600/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-primary-900/20 blur-[120px] rounded-full -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="w-full max-w-md animate-fade-in">
        <Link 
          to="/login" 
          className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-gray-500 hover:text-white transition-colors mb-8 uppercase"
        >
          <FaArrowLeft /> VOLVER AL LOGIN
        </Link>

        <div className="card-solid p-10 md:p-12 relative overflow-hidden group">
          {/* Decorative corner */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-primary-500/5 -ml-12 -mt-12 rounded-full blur-2xl group-hover:bg-primary-500/10 transition-colors"></div>

          <div className="mb-10 text-center">
            <h1 className="text-4xl font-black italic uppercase tracking-tighter mb-3 leading-none">
              ÚNETE A LA <span className="text-primary-500 underline decoration-primary-500/30 underline-offset-8">AVENTURA</span>
            </h1>
            <p className="text-gray-500 text-xs font-bold tracking-widest uppercase">
              Crea tu cuenta oficial de FungameMC
            </p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-[10px] font-black tracking-widest text-gray-400 uppercase ml-1">
                NOMBRE DE USUARIO
              </label>
              <div className="relative group/input">
                <div className="absolute inset-y-0 left-5 flex items-center text-gray-500 group-focus-within/input:text-primary-500 transition-colors">
                  <FaUser className="text-sm" />
                </div>
                <input 
                  type="text" 
                  placeholder="Steve27"
                  className="w-full bg-white/5 border border-white/5 rounded-xl py-4 pl-14 pr-6 text-sm font-medium focus:outline-none focus:border-primary-500/50 focus:bg-white/[0.08] transition-all placeholder:text-gray-700"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black tracking-widest text-gray-400 uppercase ml-1">
                CORREO ELECTRÓNICO
              </label>
              <div className="relative group/input">
                <div className="absolute inset-y-0 left-5 flex items-center text-gray-500 group-focus-within/input:text-primary-500 transition-colors">
                  <FaEnvelope className="text-sm" />
                </div>
                <input 
                  type="email" 
                  placeholder="tu@correo.com"
                  className="w-full bg-white/5 border border-white/5 rounded-xl py-4 pl-14 pr-6 text-sm font-medium focus:outline-none focus:border-primary-500/50 focus:bg-white/[0.08] transition-all placeholder:text-gray-700"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black tracking-widest text-gray-400 uppercase ml-1">
                CONTRASEÑA
              </label>
              <div className="relative group/input">
                <div className="absolute inset-y-0 left-5 flex items-center text-gray-500 group-focus-within/input:text-primary-500 transition-colors">
                  <FaLock className="text-sm" />
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••••••"
                  className="w-full bg-white/5 border border-white/5 rounded-xl py-4 pl-14 pr-6 text-sm font-medium focus:outline-none focus:border-primary-500/50 focus:bg-white/[0.08] transition-all placeholder:text-gray-700"
                />
              </div>
            </div>

            <div className="flex items-start gap-3 px-1 py-2">
              <input 
                type="checkbox" 
                id="terms" 
                className="mt-1 w-4 h-4 rounded border-white/10 bg-white/5 text-primary-500 focus:ring-primary-500 focus:ring-offset-surface-dark transition-all cursor-pointer"
              />
              <label htmlFor="terms" className="text-[9px] font-black tracking-widest text-gray-500 leading-relaxed uppercase cursor-pointer select-none">
                ACEPTO LOS <a href="#" className="text-primary-500 hover:text-white transition-colors">TÉRMINOS Y CONDICIONES</a> Y LA <a href="#" className="text-primary-500 hover:text-white transition-colors">POLÍTICA DE PRIVACIDAD</a>
              </label>
            </div>

            <button className="w-full py-5 bg-primary-600 hover:bg-primary-500 text-surface-dark font-black tracking-[0.2em] text-[11px] rounded-xl transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-600/20 uppercase flex items-center justify-center gap-3 mt-4">
              CREAR CUENTA <FaChevronRight className="text-[10px]" />
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-white/5 text-center">
            <p className="text-[10px] font-black tracking-widest text-gray-600 uppercase">
              ¿YA TIENES CUENTA?{' '}
              <Link to="/login" className="text-primary-500 hover:text-white transition-colors ml-2">
                INICIA SESIÓN
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
