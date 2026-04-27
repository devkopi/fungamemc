import { FaTiktok, FaYoutube, FaDiscord } from 'react-icons/fa';

export const Community = () => {
  const socials = [
    {
      name: "TIKTOK",
      handle: "@fungamemc",
      color: "bg-[#000000] border-[#fe2c55]",
      icon: <FaTiktok className="text-[#fe2c55]" />,
      link: "https://tiktok.com/@fungamemc"
    },
    {
      name: "YOUTUBE",
      handle: "FunGame Network",
      color: "bg-[#000000] border-[#ff0000]",
      icon: <FaYoutube className="text-[#ff0000]" />,
      link: "https://youtube.com/fungamemc"
    },
    {
      name: "DISCORD",
      handle: "Comunidad Oficial",
      color: "bg-[#000000] border-[#5865f2]",
      icon: <FaDiscord className="text-[#5865f2]" />,
      link: "https://discord.gg/XVXdHBk5pu"
    }
  ];

  return (
    <section className="py-32 bg-surface-dark border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black tracking-tighter italic uppercase mb-6">NUESTRA <span className="text-primary-500">COMUNIDAD</span></h2>
          <p className="text-gray-500 font-medium">Síguenos en nuestras redes sociales para no perderte nada.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socials.map((social, index) => (
            <a 
              key={index} 
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className={`group p-10 border-b-4 ${social.color} bg-surface-card hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center`}
            >
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform">
                {social.icon}
              </div>
              <h3 className="text-xl font-black italic mb-2 tracking-widest">{social.name}</h3>
              <p className="text-gray-500 font-bold text-xs tracking-widest">{social.handle}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
