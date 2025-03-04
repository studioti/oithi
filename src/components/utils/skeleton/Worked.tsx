import { Skeleton } from "@/components/ui/skeleton"
import { memo } from "react"

const SkeletonUIWorked = () => {
    return (
        <>
            <Skeleton className="h-[120px] w-[120px] rounded-full m-2" />
            <Skeleton className="h-[120px] w-[120px] rounded-full m-2" />
            <Skeleton className="h-[120px] w-[120px] rounded-full m-2" />
            <Skeleton className="h-[120px] w-[120px] rounded-full m-2" />
            <Skeleton className="h-[120px] w-[120px] rounded-full m-2" />
            <Skeleton className="h-[120px] w-[120px] rounded-full m-2" />
            <Skeleton className="h-[120px] w-[120px] rounded-full m-2" />
            <Skeleton className="h-[120px] w-[120px] rounded-full m-2" />
            <Skeleton className="h-[120px] w-[120px] rounded-full m-2" />
            <Skeleton className="h-[120px] w-[120px] rounded-full m-2" />
            <Skeleton className="h-[120px] w-[120px] rounded-full m-2" />
            <Skeleton className="h-[120px] w-[120px] rounded-full m-2" />
            <Skeleton className="h-[120px] w-[120px] rounded-full m-2" />
        </>
    )
}

export default memo(SkeletonUIWorked)