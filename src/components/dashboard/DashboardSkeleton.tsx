import Skeleton from '../ui/Skeleton'

const DashboardSkeleton = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      {/* Perfil Skeleton */}
      <div className="card-solid p-8 md:p-10 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
          <Skeleton className="w-24 h-24 md:w-32 md:h-32 rounded-2xl" />
          <div className="flex-1 text-center md:text-left space-y-4">
            <Skeleton className="h-4 w-24 mx-auto md:mx-0" />
            <Skeleton className="h-10 w-64 mx-auto md:mx-0" />
            <Skeleton className="h-4 w-48 mx-auto md:mx-0 opacity-50" />
          </div>
        </div>
      </div>

      {/* Grid Stats Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="card-solid p-6 space-y-4">
            <div className="flex items-center justify-between">
              <Skeleton className="w-10 h-10 rounded-xl" />
              <Skeleton className="w-12 h-4 rounded-full" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-8 w-20" />
              <Skeleton className="h-3 w-24 opacity-50" />
            </div>
          </div>
        ))}
      </div>

      {/* Content Area Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Skeleton className="h-64 w-full rounded-2xl" />
        </div>
        <div className="space-y-6">
          <Skeleton className="h-96 w-full rounded-2xl" />
        </div>
      </div>
    </div>
  )
}

export default DashboardSkeleton
