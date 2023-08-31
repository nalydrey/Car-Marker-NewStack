import {useState, ChangeEvent} from 'react'
import { Input } from './Input'
import {useFormik} from 'formik'


interface DropDownProps {
    className?: string
    isOpen: boolean
    search: boolean
    list: string[]
    onChoise: (item: string) => void
}

export const DropDown = ({
    className,
    search,
    isOpen,
    list,
    onChoise
}: DropDownProps) => {

    const [localList, setLocalList] = useState<string[]>(list)
    
    const formik = useFormik({
        initialValues: {dropSearch: ''},
        onSubmit: (value) => {
            onChoise(value.dropSearch)
            formik.resetForm()
            setLocalList(list)
        }
    })


    const handlerChange = (e: ChangeEvent<HTMLInputElement> ) => {
        const value = e.target.value
        const regExp = new RegExp(value, 'i')
        setLocalList(list.filter(item => regExp.test(item) ? true : false))
        formik.setFieldValue('dropSearch', value)
    }


  return (
    <div className={`duration-300 z-10 px-2 overflow-hidden rounded-sm bg-night-200  w-full top-[110%] ${isOpen ? ' max-h-72':' max-h-0'} ${className}`}
        onClick={(e)=>{e.stopPropagation()}}
    >
        {
            search && 
            <div 
                className='my-2'
            >
                <Input
                    name='dropSearch'
                    placeholder='Search'
                    value={formik.values.dropSearch}
                    onChange={handlerChange}
                    onEnter={() => formik.handleSubmit()}
                />
            </div>
        }
        <ul className='text-white text-xs overflow-auto max-h-52 py-2'>
            {
                localList.map(item => (
                    <li 
                        className='hover:bg-night-600/50 duration-100 py-1 px-2 rounded-sm'
                        key={item}
                        onClick={(()=>onChoise(item))}
                    >{item}</li>
                ))
            }
        </ul>
    </div>
  )
}
