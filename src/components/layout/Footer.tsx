import { FaDiscord, FaTwitter, FaYoutube, FaTiktok } from 'react-icons/fa'
import logo from '../../assets/img/logo fungame.png'

export const Footer = () => {
  return (
    <footer className="bg-surface-dark border-t border-white/5 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="w-10 h-10 object-contain opacity-50" />
              <span className="text-xl font-black tracking-tighter italic uppercase text-white/50">
                FUN<span className="text-primary-500/50">GAME</span>
              </span>
            </div>
            
            <div className="flex items-center gap-5 border-l border-white/5 pl-8">
              {[
                { icon: <FaDiscord />, link: 'https://discord.gg/XVXdHBk5pu' },
                { icon: <FaTiktok />, link: 'https://tiktok.com/@fungamemc' },
                { icon: <FaYoutube />, link: 'https://youtube.com/fungamemc' },
                { icon: <FaTwitter />, link: '#' },
              ].map((social, index) => (
                <a 
                  key={index} 
                  href={social.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-lg text-gray-600 hover:text-white transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:items-end gap-4">
            <div className="flex gap-8">
              {['REGLAMENTO', 'TÉRMINOS', 'PRIVACIDAD'].map((link) => (
                <a 
                  key={link} 
                  href="#" 
                  className="text-[10px] font-black tracking-[0.2em] text-gray-600 hover:text-primary-500 transition-colors uppercase"
                >
                  {link}
                </a>
              ))}
            </div>
            <p className="text-[9px] font-black text-gray-700 tracking-[0.2em] uppercase">
              © 2026 FUNGAME NETWORK. NO AFILIADO CON MOJANG AB.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
