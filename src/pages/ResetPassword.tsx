import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router'
import { HiOutlineLockClosed, HiOutlineCheckCircle, HiOutlineKey } from 'react-icons/hi'
import { resetPassword, verifyResetToken } from '../api/authApi.ts'

const ResetPassword = () => {
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')
  
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [verifying, setVerifying] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const verify = async () => {
      if (!token) {
        setVerifying(false)
        return
      }
      const response = await verifyResetToken(token)
      if (!response.success) {
        setError(response.message || 'Token inválido o expirado')
      }
      setVerifying(false)
    }
    verify()
  }, [token])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden')
      return
    }
    
    setError(null)
    setLoading(true)
    
    const response = await resetPassword(token || '', password)
    
    if (response.success) {
      setIsSuccess(true)
    } else {
      setError(response.message || 'Error al restablecer la contraseña')
    }
    setLoading(false)
  }

  if (verifying) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface-dark">
        <div className="w-12 h-12 border-4 border-primary-500/20 border-t-primary-500 rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!token || (error && !isSuccess && !loading)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface-dark p-6">
        <div className="card-solid w-full max-w-md p-10 text-center animate-in zoom-in-95 duration-500">
          <h1 className="text-3xl font-black italic uppercase mb-4 text-red-500">Enlace Inválido</h1>
          <p className="text-gray-400 font-medium mb-10 leading-relaxed">
            {error || 'El enlace de recuperación es inválido o ha expirado.'}
          </p>
          <Link to="/forgot-password" className="btn-primary w-full block py-4 text-center">
            SOLICITAR OTRO ENLACE
          </Link>
        </div>
      </div>
    )
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface-dark p-6">
        <div className="card-solid w-full max-w-md p-10 text-center animate-in zoom-in-95 duration-500">
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/20">
            <HiOutlineCheckCircle className="text-green-500 text-4xl" />
          </div>
          <h1 className="text-3xl font-black italic uppercase mb-4 tracking-tight text-white">¡Contraseña Cambiada!</h1>
          <p className="text-gray-400 font-medium mb-10 leading-relaxed">
            Tu contraseña ha sido actualizada correctamente. Ya puedes iniciar sesión con tus nuevas credenciales.
          </p>
          <Link to="/login" className="btn-primary w-full block py-4 uppercase">
            Iniciar Sesión
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
        <div className="mb-10 text-center">
          <div className="w-16 h-16 bg-primary-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary-500/20 rotate-3">
            <HiOutlineKey className="text-primary-500 text-3xl" />
          </div>
          <h1 className="text-4xl font-black tracking-tighter italic uppercase mb-3 text-white">Nueva <span className="text-primary-500">Contraseña</span></h1>
          <p className="text-gray-500 font-medium leading-relaxed">
            Escribe tu nueva contraseña para recuperar el acceso a tu cuenta.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-xl text-xs font-bold uppercase tracking-wider">
              {error}
            </div>
          )}

          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 px-1">Nueva Contraseña</label>
            <div className="relative group">
              <HiOutlineLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary-500 transition-colors" size={20} />
              <input 
                type="password"
                required
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-primary-500/50 focus:bg-white/8 transition-all font-bold text-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 px-1">Confirmar Contraseña</label>
            <div className="relative group">
              <HiOutlineLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary-500 transition-colors" size={20} />
              <input 
                type="password"
                required
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-primary-500/50 focus:bg-white/8 transition-all font-bold text-white"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="btn-primary w-full py-5 text-sm tracking-widest mt-4 uppercase"
          >
            {loading ? (
              <div className="w-6 h-6 border-2 border-surface-dark/20 border-t-surface-dark rounded-full animate-spin mx-auto"></div>
            ) : (
              'Actualizar Contraseña'
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword
