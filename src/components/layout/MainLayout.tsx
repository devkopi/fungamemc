import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

const MainLayout = () => {
  const location = useLocation()

  useEffect(() => {
    const routeTitles: Record<string, string> = {
      '/': 'Inicio',
      '/tienda': 'Tienda',
      '/updates': 'Actualizaciones',
      '/wiki': 'Wiki',
      '/team': 'Equipo',
      '/login': 'Ingresar',
      '/register': 'Registro',
      '/votar': 'Votar'
    }

    const currentPage = routeTitles[location.pathname] || 'Página'
    document.title = `${currentPage} | FungameMC`
  }, [location])

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary-500 selection:text-surface-dark">
      <Navbar />
      <main className="grow pt-20">
        <Outlet />
      </main>
      {location.pathname !== '/dashboard' && <Footer />}
    </div>
  )
}

export default MainLayout
