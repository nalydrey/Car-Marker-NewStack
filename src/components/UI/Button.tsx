import {ReactNode} from 'react'

interface ButtonProps {
    icon: ReactNode
    onClick: () => void
}

export const Button = ({
    icon,
    onClick
}: ButtonProps) => {
  return (
    <button 
        className='bg-sea-500 flex justify-center items-center px-3 rounded-sm duration-300 hover:bg-sea-200'
        onClick={onClick}
    >
        <div className='w-3 stroke-white stroke-2'>
            {icon}
        </div>
    </button>
  )
}


