const Skeleton = ({ className }: { className?: string }) => {
  return (
    <div 
      className={`animate-pulse bg-white/5 rounded-xl ${className}`}
      style={{
        backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 2s infinite linear'
      }}
    />
  )
}

export default Skeleton
