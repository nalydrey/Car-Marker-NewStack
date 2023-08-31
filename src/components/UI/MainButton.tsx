import { MouseEvent , ButtonHTMLAttributes} from 'react'


interface MainButtonProps {
    isLoading?: boolean
    type: "button" | "submit" | "reset" | undefined
    title: string
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void 
}

export const MainButton = ({
    isLoading = false,
    type,
    title,
    onClick = () =>{}
}: MainButtonProps) => {
  return (
    <button
        disabled = {isLoading}
        type={type}
        className={`text-white  p-2 ${isLoading ? 'bg-gray-500':'bg-sea-100 hover:bg-sea-200'} duration-300 max-w-2xl w-full rounded-sm`}
        onClick={onClick}
    >{isLoading ? 'Loading...' : title}</button>
  )
}
