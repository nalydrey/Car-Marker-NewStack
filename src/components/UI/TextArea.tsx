import { ChangeEvent } from 'react'


interface TextAreaProps {
    className?: string
    text?: string
    name?: string
    groupName?:string
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>, groupName?: string) => void
}

export const TextArea = ({
    className,
    text,
    name,
    groupName,
    onChange
}: TextAreaProps) => {
  return (
    <div className={`relative h-36 ${className}`}>
        <textarea
            className={`peer resize-none duration-300 placeholder:text-transparent focus:placeholder:text-gray-400 outline-none border border-transparent focus:border-white bg-night-300 p-2 rounded-sm w-full h-full`}
            placeholder='Some text'
            value={text}
            name={name}
            id={name}
            required
            onChange={(e) =>{onChange && onChange(e, groupName)}}
        />
        <label 
          className='absolute cursor-pointer duration-300 top-2 left-2 peer-focus:-top-7 peer-focus:-left-0 peer-valid:-top-7 peer-valid:-left-0'
          htmlFor={name}  
        >Title</label>
    </div>
  )
}
