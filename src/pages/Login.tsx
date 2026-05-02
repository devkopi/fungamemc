import { Link, useNavigate } from 'react-router'
import { useState } from 'react'
import axios from 'axios'
import { FaUser, FaLock, FaChevronRight, FaArrowLeft } from 'react-icons/fa'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email.trim() || !password.trim()) {
      setError('Por favor completa todos los campos')
      return
    }

    setLoading(true)
    setError('')

    try {
      // Crear FormData para enviar como x-www-form-urlencoded
      const formData = new URLSearchParams()
      formData.append('email', email.trim())
      formData.append('password', password)

      const response = await axios.post('http://localhost/api/login.php', formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })

      if (response.data.success) {
        console.log('Usuario logueado:', response.data.user)
        navigate('/dashboard')
      } else {
        setError(response.data.error || 'Credenciales incorrectas')
      }
    } catch (err) {
      console.error('Error de conexion:', err)
      if (err.response) {
        setError(err.response.data?.error || 'Error del servidor')
      } else if (err.request) {
        setError('No se pudo conectar al servidor')
      } else {
        setError('Error al procesar la solicitud')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden px-6 py-20">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-600/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary-900/20 blur-[120px] rounded-full -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="w-full max-w-md animate-fade-in">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-gray-500 hover:text-white transition-colors mb-8 uppercase"
        >
          <FaArrowLeft /> VOLVER AL INICIO
        </Link>

        <div className="card-solid p-10 md:p-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary-500/5 -mr-12 -mt-12 rounded-full blur-2xl group-hover:bg-primary-500/10 transition-colors"></div>

          <div className="mb-10 text-center">
            <h1 className="text-4xl font-black italic uppercase tracking-tighter mb-3 leading-none">
              BIENVENIDO <span className="text-primary-500 underline decoration-primary-500/30 underline-offset-8">DE NUEVO</span>
            </h1>
            <p className="text-gray-500 text-xs font-bold tracking-widest uppercase">
              Ingresa tus credenciales para continuar
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
              <p className="text-red-400 text-xs font-bold text-center">{error}</p>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-[10px] font-black tracking-widest text-gray-400 uppercase ml-1">
                USUARIO O EMAIL
              </label>
              <div className="relative group/input">
                <div className="absolute inset-y-0 left-5 flex items-center text-gray-500 group-focus-within/input:text-primary-500 transition-colors">
                  <FaUser className="text-sm" />
                </div>
                <input 
                  type="text" 
                  placeholder="Steve27"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/5 rounded-xl py-4 pl-14 pr-6 text-sm font-medium focus:outline-none focus:border-primary-500/50 focus:bg-white/[0.08] transition-all placeholder:text-gray-700"
                  disabled={loading}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-black tracking-widest text-gray-400 uppercase">
                  CONTRASENA
                </label>
                <a href="#" className="text-[10px] font-black tracking-widest text-primary-500/60 hover:text-primary-500 transition-colors uppercase">
                  OLVIDASTE TU CLAVE?
                </a>
              </div>
              <div className="relative group/input">
                <div className="absolute inset-y-0 left-5 flex items-center text-gray-500 group-focus-within/input:text-primary-500 transition-colors">
                  <FaLock className="text-sm" />
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/5 rounded-xl py-4 pl-14 pr-6 text-sm font-medium focus:outline-none focus:border-primary-500/50 focus:bg-white/[0.08] transition-all placeholder:text-gray-700"
                  disabled={loading}
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full py-5 cursor-pointer bg-primary-600 hover:bg-primary-500 text-surface-dark font-black tracking-[0.2em] text-[11px] rounded-xl transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-600/20 uppercase flex items-center justify-center gap-3 mt-4 disabled:opacity-50 disabled:translate-y-0 disabled:cursor-not-allowed"
            >
              {loading ? 'INICIANDO SESION...' : 'INICIAR SESION'}
              <FaChevronRight className="text-[10px]" />
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-white/5 text-center">
            <p className="text-[10px] font-black tracking-widest text-gray-600 uppercase">
              AUN NO TIENES CUENTA?{' '}
              <Link to="/register" className="text-primary-500 hover:text-white transition-colors ml-2">
                REGISTRATE AQUI
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login