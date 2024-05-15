import React from 'react'
import { Skeleton } from '../ui/skeleton'

const LoadingMessagesSkeleteon = () => {
    return (
        <div className=' flex flex-col gap-y-6'>
            <div className=" flex items-center w-full space-x-4">
                <Skeleton className=' w-10 h-10 rounded-full' />
                <div className=' flex flex-col  space-y-2'>
                    <Skeleton className=' h-4 w-[250px]' />
                    <Skeleton className=' h-4 w-[200]' />
                </div>

            </div>
            {/* another  */}
            <div className=" flex items-center w-full space-x-4">
                <Skeleton className=' w-10 h-10 rounded-full' />
                <div className=' flex flex-col  space-y-2'>
                    <Skeleton className=' h-4 w-[250px]' />
                    <Skeleton className=' h-4 w-[200]' />
                </div>

            </div>

            {/* another  */}
            <div className=" flex items-center w-full space-x-4">
                <Skeleton className=' w-10 h-10 rounded-full' />
                <div className=' flex flex-col  space-y-2'>
                    <Skeleton className=' h-4 w-[250px]' />
                    <Skeleton className=' h-4 w-[200]' />
                </div>

            </div>


            {/* another  */}

        </div>

    )
}

export default LoadingMessagesSkeleteon



export function LoadingFormSkeleteon() {
    return (
        <div className=" w-full">

            <Skeleton className=' h-10 rounded-lg w-full' />

        </div>
    )
}


