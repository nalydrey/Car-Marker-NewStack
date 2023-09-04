import { ChangeEvent, FocusEvent } from 'react'


interface TextAreaProps {
    title?: string
    className?: string
    value?: string | number
    name?: string
    placeholder?: string
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onBlur?: (e: FocusEvent<HTMLTextAreaElement, Element>) => void
}

export const TextArea = ({
    title,
    className,
    placeholder,
    value,
    name,
    onChange,
    onBlur
}: TextAreaProps) => {
  return (
    <div className={`relative h-36 ${className}`}>
        <textarea
            className={`peer resize-none duration-300 placeholder:text-transparent focus:placeholder:text-gray-400 outline-none border border-transparent focus:border-white bg-night-300 p-2 rounded-sm w-full h-full`}
            placeholder={placeholder}
            value={value}
            name={name}
            id={name}
            required
            onChange={onChange}
            onBlur={onBlur}
        />
        <label 
          className='absolute cursor-pointer duration-300 top-2 left-2 peer-focus:-top-7 peer-focus:-left-0 peer-valid:-top-7 peer-valid:-left-0'
          htmlFor={name}  
        >{title}</label>
    </div>
  )
}
