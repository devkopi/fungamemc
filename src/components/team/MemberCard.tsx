import { FaDiscord, FaTwitter } from 'react-icons/fa'

interface MemberCardProps {
  username: string
  rank: string
  rankColor: string
  discord?: string
  twitter?: string
  customAvatar?: string
}

export const MemberCard = ({ username, rank, rankColor, discord, twitter, customAvatar }: MemberCardProps) => {
  const avatarSource = customAvatar || `https://mc-heads.net/body/${username}/120`

  return (
    <div className="group card-solid p-8 flex flex-col items-center text-center hover:border-primary-500/30 transition-all duration-500">
      <div className="relative mb-6 transform group-hover:scale-110 transition-transform duration-500">
        <div className="absolute inset-0 bg-primary-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <img 
          src={avatarSource} 
          alt={username}
          className="relative w-24 h-48 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
        />
      </div>

      <h3 className="text-xl font-black italic uppercase tracking-tighter mb-2">{username}</h3>
      
      <span 
        className={`px-4 py-1 rounded-full text-[9px] font-black tracking-[0.2em] uppercase mb-6 ${rankColor} text-surface-dark`}
      >
        {rank}
      </span>

      <div className="flex items-center gap-4">
        {discord && (
          <a href="#" className="text-gray-500 hover:text-[#5865F2] transition-colors text-lg">
            <FaDiscord />
          </a>
        )}
        {twitter && (
          <a href="#" className="text-gray-500 hover:text-[#1DA1F2] transition-colors text-lg">
            <FaTwitter />
          </a>
        )}
      </div>
    </div>
  )
}
