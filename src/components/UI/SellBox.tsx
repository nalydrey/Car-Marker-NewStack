import {ReactNode} from 'react'

interface SellBoxProps {
    title: string
    children: ReactNode
}

export const SellBox = ({
    title,
    children
}: SellBoxProps) => {
  return (
    <div className='text-white bg-night-700 p-2 sm:p-4 md:p-5 rounded-sm flex flex-col gap-7 sm:gap-8 lg:gap-9 w-full'>
        <h2 className='text-xl sm:text-2xl md:text-3xl font-medium underline'>{title}</h2>
        {children}
    </div>
  )
}
