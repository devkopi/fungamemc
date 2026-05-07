import Skeleton from '../ui/Skeleton'

const UpdateSkeleton = () => {
  return (
    <div className="card-solid p-8 space-y-6 flex flex-col h-full opacity-60">
      <div className="flex items-center justify-between">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-6 w-20 rounded-full" />
      </div>
      
      <div className="space-y-3">
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-3/4" />
      </div>
      
      <div className="space-y-2 grow">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-2/3" />
      </div>
      
      <div className="pt-6 border-t border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Skeleton className="w-5 h-5 rounded" />
          <Skeleton className="h-3 w-16" />
        </div>
        <Skeleton className="h-3 w-12" />
      </div>
    </div>
  )
}

export default UpdateSkeleton
