import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import { HiOutlineCheckCircle, HiOutlineExclamationCircle, HiOutlineX } from 'react-icons/hi'

type ToastType = 'success' | 'error' | 'info'

interface Toast {
  id: string
  message: string
  type: ToastType
}

interface NotificationContextType {
  showNotification: (message: string, type?: ToastType) => void
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const showNotification = useCallback((message: string, type: ToastType = 'success') => {
    const id = Math.random().toString(36).substring(2, 11)
    setToasts((prev) => [...prev, { id, message, type }])

    // Auto eliminar después de 4 segundos
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 4000)
  }, [])

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      
      {/* Contenedor de Toasts */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-3 pointer-events-none">
        {toasts.map((toast) => (
          <div 
            key={toast.id}
            className={`
              pointer-events-auto
              flex items-center gap-4 p-4 pr-6 rounded-2xl border backdrop-blur-xl shadow-2xl
              animate-in slide-in-from-right-10 fade-in duration-500
              ${toast.type === 'success' ? 'bg-green-500/10 border-green-500/20 text-green-400' : 
                toast.type === 'error' ? 'bg-red-500/10 border-red-500/20 text-red-400' : 
                'bg-primary-500/10 border-primary-500/20 text-primary-400'}
            `}
          >
            <div className="flex-shrink-0">
              {toast.type === 'success' && <HiOutlineCheckCircle size={24} />}
              {toast.type === 'error' && <HiOutlineExclamationCircle size={24} />}
              {toast.type === 'info' && <HiOutlineCheckCircle size={24} />}
            </div>
            
            <p className="text-sm font-black italic uppercase tracking-wider">
              {toast.message}
            </p>

            <button 
              onClick={() => removeToast(toast.id)}
              className="ml-2 p-1 hover:bg-white/10 rounded-lg transition-colors"
            >
              <HiOutlineX size={16} />
            </button>
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  )
}

export const useNotification = () => {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider')
  }
  return context
}
