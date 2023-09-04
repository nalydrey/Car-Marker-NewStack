import {useState, useEffect, MouseEvent, FocusEvent} from 'react'
import {ChevronDownIcon} from '@heroicons/react/20/solid'
import { DropDown } from './DropDown'

export interface SelectEvent {
    chosedtem: string
    name: string
}

interface SelectProps {
    error?: string
    title?: string
    placeholder?: string
    name?: string 
    value?: string | number | null
    list: (string)[]  | undefined
    onChange?: (event: SelectEvent) => void
    onBlur?: (event: FocusEvent<HTMLButtonElement, Element>) => void
}

export const Select = ({
    error,
    name = '',
    title,
    placeholder = 'Make choise',
    value,
    list = [],
    onChange = () => {},
    onBlur =()=>{}
}: SelectProps) => {
    const isError = !!error
    
    const [isActive, setActive] = useState<boolean>(false)

    useEffect(()=>{
        document.addEventListener('click', closeDropdown)
        return () => {
            document.removeEventListener('click', closeDropdown)
        }
    },[])

    const closeDropdown = () => {
        setActive(false)
    }

    const handleActive = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        setActive(!isActive)
    }

   

  return (
    <div className='relative'>
        <button  
            className={`text-white border duration-300 bg-night-300 p-2 rounded-sm flex items-center w-full justify-between 
            ${isError ? 'border-red-700' : isActive ? 'border-white': 'border-transparent'}
            `}
            name = {name}
            type='button'
            onClick={handleActive}
            onBlur={onBlur}
        >
            <p className={`text-xs sm:text-sm duration-300 ${isActive || value ? 'opacity-1' : 'opacity-0'}`}>{value ? value : placeholder ||'none'}</p>
            <div className={`w-4 h-2 flex items-center duration-200 ${isActive ? ' rotate-180' : 'rotate-0'} `}>
                <ChevronDownIcon/>
            </div>
            <span className={`
            absolute duration-300 -translate-y-1/2 ${isActive || value ? '-top-1/3 left-0' : 'top-1/2 left-2'}
            text-sm
            `}>{title}</span>
        </button>

        <DropDown
            className='absolute'
            search
            isOpen = {isActive}
            list={list}
            onChoise={(chosedtem)=>onChange({chosedtem, name})}
        />
    </div>
    
  )
}
