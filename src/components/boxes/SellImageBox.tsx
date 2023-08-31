import { PlusIcon } from '@heroicons/react/24/solid'
import {useState, ChangeEvent} from 'react'

interface ImageState {
    name: string
    base64: string
}

interface SellImageBoxProps {
    onChange: (e: FormData) => void
}

export const SellImageBox = ({
    onChange
}: SellImageBoxProps) => {

const [files, setFiles] = useState<File[]>([])   
const [images, setImages] = useState<ImageState[]>([])

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []) 
    setFiles(files)
    const pictures = new FormData()
    const images: ImageState[] = []
    files.forEach((file, i) => {
        const reader = new FileReader();
        pictures.append(`file${i}`, file)
        reader.onload = () => {
            if(typeof reader.result === 'string'){
                images.push({base64: reader.result, name: file.name})
                setImages(images)
            }
            console.log(file.name);
            
        }
        reader.readAsDataURL(file);
    })
    onChange(pictures)
}

const handleDelete = (fileName: string) => {
    const newFiles = files.filter(file => file.name !== fileName)

    const pictures = new FormData()
    newFiles.forEach((file, i) => {
        pictures.append(`file${i}`, file)
    })
    onChange(pictures)

    setImages(images.filter(img => img.name !== fileName))
    setFiles(newFiles)
} 



  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3'>
        <div>
            <input 
            type='file' 
            id='images' 
            multiple 
            className=' hidden'
            onChange = {handleChange}
            />
            <label 
            className='flex border border-dashed cursor-pointer border-night-300 w-28 h-28 lg:w-32 lg:h-32 bg-night-900 justify-center items-center'
            htmlFor='images' 
            >
            <PlusIcon className='w-12 stroke-1 stroke-white'/>
            </label>
        </div>

        {images.map(image => (
            <div className='group relative w-full h-28 lg:h-32'>
                <img src={image.base64} className=' w-full h-full object-cover '/>
                <button 
                    className='absolute opacity-0 group-hover:opacity-100 duration-300 top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 bg-red-700/50 backdrop-blur-sm hover:bg-red-800/60 p-1 rounded-md px-3'
                    type='button' 
                    onClick={()=>handleDelete(image.name)}
                
                >Delete</button>
            </div>
        ))}
    </div>
  )
}
