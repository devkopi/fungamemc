import { FaChevronRight, FaTag, FaCalendarAlt } from 'react-icons/fa'

interface UpdateCardProps {
  date: string
  category: string
  title: string
  description: string
  link: string
}

export const UpdateCard = ({ date, category, title, description, link }: UpdateCardProps) => {
  return (
    <a 
      href={link}
      className="group card-solid p-8 hover:border-primary-500/30 transition-all duration-500 flex flex-col h-full"
    >
      <div className="flex items-center justify-between mb-6">
        <span className="flex items-center gap-2 text-[10px] font-black tracking-widest text-primary-500 uppercase">
          <FaCalendarAlt className="text-xs" />
          {date}
        </span>
        <span className="px-3 py-1 bg-white/5 border border-white/5 text-[9px] font-black tracking-widest text-gray-400 rounded-full flex items-center gap-2">
          <FaTag />
          {category}
        </span>
      </div>

      <h3 className="text-2xl font-black mb-4 group-hover:text-primary-500 transition-colors italic uppercase leading-tight">
        {title}
      </h3>
      
      <p className="text-gray-500 font-medium leading-relaxed mb-10 grow text-sm">
        {description}
      </p>

      <div className="flex items-center gap-3 text-xs font-black text-white/40 group-hover:text-white transition-all transform group-hover:translate-x-2 italic uppercase">
        LEER ARTÍCULO COMPLETO <FaChevronRight className="text-[10px]" />
      </div>
    </a>
  )
}
