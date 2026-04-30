import { Link, useNavigate } from 'react-router'
import { useState } from 'react'
import { FaUser, FaEnvelope, FaLock, FaChevronRight, FaArrowLeft } from 'react-icons/fa'
import { useAuth } from '../hooks/useAuth'

const Register = () => {
  // Estados para cada campo del formulario
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordRepeat, setPasswordRepeat] = useState<string>('')
  
  // Estados para errores específicos por campo
  const [usernameError, setUsernameError] = useState<string>('')
  const [emailError, setEmailError] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')
  const [generalError, setGeneralError] = useState<string>('')
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  
  const navigate = useNavigate()
  const { register, loading: authLoading } = useAuth()

  // Validar el formulario antes de enviar
  const validateForm = (): boolean => {
    let isValid = true
    
    // Validar username (mínimo 3 caracteres)
    if (!username.trim()) {
      setUsernameError('El nombre de usuario es requerido')
      isValid = false
    } else if (username.length < 3) {
      setUsernameError('El nombre de usuario debe tener al menos 3 caracteres')
      isValid = false
    } else {
      setUsernameError('')
    }
    
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.trim()) {
      setEmailError('El email es requerido')
      isValid = false
    } else if (!emailRegex.test(email)) {
      setEmailError('Ingresa un email válido (ejemplo: usuario@dominio.com)')
      isValid = false
    } else {
      setEmailError('')
    }
    
    // Validar contraseña
    if (!password) {
      setPasswordError('La contraseña es requerida')
      isValid = false
    } else if (password.length < 8) {
      setPasswordError('La contraseña debe tener al menos 8 caracteres')
      isValid = false
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError('La contraseña debe tener al menos una mayúscula')
      isValid = false
    } else if (!/[0-9]/.test(password)) {
      setPasswordError('La contraseña debe tener al menos un número')
      isValid = false
    } else if (password !== passwordRepeat) {
      setPasswordError('Las contraseñas no coinciden')
      isValid = false
    } else {
      setPasswordError('')
    }
    
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setGeneralError('')
    
    // Validar antes de enviar
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    const success = await register({
      username: username.trim(),
      email: email.trim(),
      password: password,
      password_repeat: passwordRepeat
    })
    
    if (success) {
      // Registro exitoso, redirigir al dashboard
      navigate('/dashboard')
    } else {
      // Mostrar error general (ej: "email ya existe")
      setGeneralError('No se pudo crear la cuenta. El email o usuario puede estar en uso.')
    }
    
    setIsSubmitting(false)
  }

  const isLoading = isSubmitting || authLoading

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
              CREAR <span className="text-primary-500 underline decoration-primary-500/30 underline-offset-8">CUENTA</span>
            </h1>
            <p className="text-gray-500 text-xs font-bold tracking-widest uppercase">
              Completa los datos para registrarte
            </p>
          </div>

          {/* Error general (del servidor) */}
          {generalError && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
              <p className="text-red-400 text-xs font-bold text-center">{generalError}</p>
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Campo: Usuario */}
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
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={isLoading}
                  className={`w-full bg-white/5 border rounded-xl py-4 pl-14 pr-6 text-sm font-medium focus:outline-none focus:bg-white/[0.08] transition-all placeholder:text-gray-700 disabled:opacity-50 ${
                    usernameError ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-primary-500/50'
                  }`}
                />
              </div>
              {usernameError && (
                <p className="text-red-400 text-[10px] font-bold ml-1">{usernameError}</p>
              )}
            </div>

            {/* Campo: Email */}
            <div className="space-y-2">
              <label className="text-[10px] font-black tracking-widest text-gray-400 uppercase ml-1">
                CORREO ELECTRONICO
              </label>
              <div className="relative group/input">
                <div className="absolute inset-y-0 left-5 flex items-center text-gray-500 group-focus-within/input:text-primary-500 transition-colors">
                  <FaEnvelope className="text-sm" />
                </div>
                <input 
                  type="email" 
                  placeholder="steve@fungamemc.net"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  className={`w-full bg-white/5 border rounded-xl py-4 pl-14 pr-6 text-sm font-medium focus:outline-none focus:bg-white/[0.08] transition-all placeholder:text-gray-700 disabled:opacity-50 ${
                    emailError ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-primary-500/50'
                  }`}
                />
              </div>
              {emailError && (
                <p className="text-red-400 text-[10px] font-bold ml-1">{emailError}</p>
              )}
            </div>

            {/* Campo: Contraseña */}
            <div className="space-y-2">
              <label className="text-[10px] font-black tracking-widest text-gray-400 uppercase ml-1">
                CONTRASENA
              </label>
              <div className="relative group/input">
                <div className="absolute inset-y-0 left-5 flex items-center text-gray-500 group-focus-within/input:text-primary-500 transition-colors">
                  <FaLock className="text-sm" />
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  className={`w-full bg-white/5 border rounded-xl py-4 pl-14 pr-6 text-sm font-medium focus:outline-none focus:bg-white/[0.08] transition-all placeholder:text-gray-700 disabled:opacity-50 ${
                    passwordError ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-primary-500/50'
                  }`}
                />
              </div>
            </div>

            {/* Campo: Repetir Contraseña */}
            <div className="space-y-2">
              <label className="text-[10px] font-black tracking-widest text-gray-400 uppercase ml-1">
                REPETIR CONTRASENA
              </label>
              <div className="relative group/input">
                <div className="absolute inset-y-0 left-5 flex items-center text-gray-500 group-focus-within/input:text-primary-500 transition-colors">
                  <FaLock className="text-sm" />
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••••••"
                  value={passwordRepeat}
                  onChange={(e) => setPasswordRepeat(e.target.value)}
                  disabled={isLoading}
                  className={`w-full bg-white/5 border rounded-xl py-4 pl-14 pr-6 text-sm font-medium focus:outline-none focus:bg-white/[0.08] transition-all placeholder:text-gray-700 disabled:opacity-50 ${
                    passwordError ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-primary-500/50'
                  }`}
                />
              </div>
              {passwordError && (
                <p className="text-red-400 text-[10px] font-bold ml-1">{passwordError}</p>
              )}
            </div>

            {/* Requisitos de contraseña (ayuda visual) */}
            <div className="text-[12px] text-gray-600 space-y-1 ml-1">
              <p className="font-bold uppercase tracking-wider">La contraseña debe tener:</p>
              <ul className="list-disc list-inside space-y-0.5">
                <li className={password.length >= 8 ? 'text-green-500' : ''}>Al menos 8 caracteres</li>
                <li className={/[A-Z]/.test(password) ? 'text-green-500' : ''}>Al menos una mayúscula</li>
                <li className={/[0-9]/.test(password) ? 'text-green-500' : ''}>Al menos un número</li>
                <li className={password === passwordRepeat && password !== '' ? 'text-green-500' : ''}>Las contraseñas deben coincidir</li>
              </ul>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full py-5 bg-primary-600 cursor-pointer hover:bg-primary-500 text-surface-dark font-black tracking-[0.2em] text-[11px] rounded-xl transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-600/20 uppercase flex items-center justify-center gap-3 mt-4 disabled:opacity-50 disabled:translate-y-0 disabled:cursor-not-allowed"
            >
              {isLoading ? 'REGISTRANDO...' : 'REGISTRARME'}
              <FaChevronRight className="text-[10px]" />
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-white/5 text-center">
            <p className="text-[10px] font-black tracking-widest text-gray-600 uppercase">
              ¿YA TIENES CUENTA?{' '}
              <Link to="/login" className="text-primary-500 hover:text-white transition-colors ml-2">
                INICIA SESION AQUI
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register