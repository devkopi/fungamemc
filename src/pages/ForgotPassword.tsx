import { useState, type FormEvent } from 'react'
import { Link } from 'react-router'
import { HiOutlineMail, HiOutlineArrowLeft, HiOutlineCheckCircle } from 'react-icons/hi'
import { requestPasswordReset } from '../api/authApi.ts'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const response = await requestPasswordReset(email)
    
    if (response.success) {
      setIsSubmitted(true)
    } else {
      setError(response.message || 'No se pudo procesar la solicitud')
    }
    setLoading(false)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface-dark p-6">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-600/10 blur-[120px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary-900/10 blur-[120px] rounded-full animate-pulse delay-700"></div>
        </div>

        <div className="card-solid w-full max-w-md p-10 text-center animate-in zoom-in-95 duration-500">
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/20">
            <HiOutlineCheckCircle className="text-green-500 text-4xl" />
          </div>
          <h1 className="text-3xl font-black italic uppercase mb-4 tracking-tight text-white">¡Correo Enviado!</h1>
          <p className="text-gray-400 font-medium mb-10 leading-relaxed">
            Hemos enviado las instrucciones para restablecer tu contraseña a <span className="text-white font-bold">{email}</span>. Revisa tu bandeja de entrada.
          </p>
          <Link 
            to="/login" 
            className="btn-primary w-full block py-4"
          >
            VOLVER AL LOGIN
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-dark p-6">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary-900/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="card-solid w-full max-w-md p-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="mb-10">
          <Link 
            to="/login" 
            className="inline-flex items-center gap-2 text-[10px] font-black tracking-widest text-primary-500 hover:text-white transition-colors mb-8 uppercase"
          >
            <HiOutlineArrowLeft /> Volver al Login
          </Link>
          <h1 className="text-4xl font-black tracking-tighter italic uppercase mb-3 text-white">¿Olvidaste tu <span className="text-primary-500">Contraseña?</span></h1>
          <p className="text-gray-500 font-medium leading-relaxed">
            No te preocupes, introduce tu email y te enviaremos un enlace para recuperarla.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-xl text-xs font-bold uppercase tracking-wider text-center">
              {error}
            </div>
          )}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 px-1">Correo Electrónico</label>
            <div className="relative group">
              <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary-500 transition-colors" size={20} />
              <input 
                type="email"
                required
                placeholder="ejemplo@email.com"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-primary-500/50 focus:bg-white/[0.08] transition-all font-bold text-white placeholder:text-gray-700"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="btn-primary w-full py-5 text-sm tracking-[0.1em] mt-2 relative overflow-hidden"
          >
            {loading ? (
              <div className="w-6 h-6 border-2 border-surface-dark/20 border-t-surface-dark rounded-full animate-spin mx-auto"></div>
            ) : (
              'ENVIAR ENLACE DE RECUPERACIÓN'
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword
