import {HTMLInputTypeAttribute, ChangeEvent, ReactNode, useState, KeyboardEvent} from 'react'
import { Button } from './Button'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid';

interface InputProps {
    icon?: ReactNode
    className?: string
    name: string
    groupName?: string
    title?: string
    type?: HTMLInputTypeAttribute
    placeholder?: string
    units?: string
    value?: string | number | null
    onChange?:(event: ChangeEvent<HTMLInputElement>, groupName?: string) => void 
    onPlus?: () => void
    onMinus?: () => void
    onFocus?: () => void
    onEnter?: () => void
}

export const Input = ({
    groupName,
    icon,
    name,
    title,
    type='text',
    placeholder,
    units,
    value,
    className,
    onChange,
    onMinus,
    onPlus,
    onFocus,
    onEnter,
}: InputProps) => {

    let left = 'left-2'
    if(onMinus || icon) left = 'left-11'
    if(onMinus && icon) left = 'left-20'

    const [isShow, setShow] = useState<boolean>(false)

    const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
        interface data extends Event {
            data?: string
        }
        const {data}: data = e.nativeEvent

        if((e.target.type === 'number') && (data === 'e')){
            return 
        }
        onChange && onChange(e, groupName)
    }

    const handlerShow = () => {
        setShow(!isShow)
    }

    const handlerKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter' && onEnter){
            e.preventDefault()   
            onEnter()         
        } 
    }


  return (
    <div className={`group relative text-center bg-night-300 flex rounded-sm text-white ${className}`}>
        {
            !!onMinus &&
            <Button
                icon = {<MinusIcon/>}
                onClick={onMinus}
            />
        }
        {
            !!icon &&
            <label 
                htmlFor={name}
                className='flex justify-center items-center px-3 cursor-pointer'>
                <div className='w-5'>
                    {icon}
                </div>
            </label>
        }
        <input 
            onKeyDown={handlerKeyDown}
            id={name}
            name={name}
            type={isShow ? 'text' : type}
            autoComplete='off'
            required
            className={`peer bg-night-300 grow p-2 text-xs sm:text-sm border rounded-sm duration-300 focus:border-white border-transparent w-full outline-none ${title ? 'placeholder:text-white/0':''}  focus:placeholder:text-gray-400`}
            placeholder={placeholder}
            value={value?.toString()} 
            onChange={handlerChange}
            onFocus={onFocus}
        />
        <label 
            className={`absolute cursor-pointer select-none  duration-300 top-1/2 -translate-y-1/2 ${left} peer-focus:-top-1/3 peer-focus:left-0 peer-valid:left-0 peer-valid:-top-1/3 text-sm`}
            htmlFor={name}
        >
            {title}
        </label>
        {   
            type === 'password' &&
            <button 
                className='flex justify-center items-center px-3 cursor-pointer'
                onClick={handlerShow}
            >
                <div className='w-5'>
                    { isShow ? <EyeIcon/> : <EyeSlashIcon/>}
                </div>
            </button>
        }
        {
            !!units &&
            <div className='bg-sea-500 text-xs sm:text-sm flex justify-center items-center px-3 rounded-sm select-none'>
                {units}
            </div>
        }
        {
             !!onPlus &&
             <Button
                 icon = {<PlusIcon/>}
                 onClick={onPlus}
             />
        }
    </div>
  )
}
