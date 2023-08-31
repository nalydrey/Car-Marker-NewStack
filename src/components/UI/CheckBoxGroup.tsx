import {useEffect, useState, ChangeEvent} from 'react'
import { CheckBox, CheckBoxEvent } from './CheckBox'
import { Input } from './Input'
import { useFormik } from 'formik'


interface CheckBoxGroupProps {
    search?: boolean
    className?: string
    title?: string
    name: string
    list: string[]
    activeValues: string | string[]
    onChange?: (values: CheckBoxEvent | CheckBoxEvent[]) => void
}

export const CheckBoxGroup = ({
    search = false,
    className,
    title,
    name,
    list,
    activeValues,
    onChange
}: CheckBoxGroupProps) => {

    const isArray = Array.isArray(activeValues)

    const [reserv, setReserv] = useState<CheckBoxEvent[]>([])
    const [checkList, setCheckList] = useState<CheckBoxEvent[]>([])
    
    

    const formik = useFormik({
        initialValues: {check:''},
        onSubmit: (form)=>{
            const newElement: CheckBoxEvent = {
                isActive: false,
                label: form.check,
                name
            }
            if(!checkList.some(item => item.label === newElement.label)){
                const newArray = [newElement, ...reserv]
                setCheckList(newArray)
                setReserv(newArray)
                logicOfChange(form.check, newArray)
            }
        }
    })

    const logicOfChange = (label: string, array: CheckBoxEvent[]) => {
        let newArr = []
        if(isArray){
            newArr = array.map(item => {
                if(item.label === label){
                    item.isActive = !item.isActive
                }
                return item
            })
            const filterArr = array.filter(item => item.isActive)
            onChange && onChange(filterArr)
        }
        else{
            newArr = array.map(item => {
                if(item.label === label){
                    item.isActive = true
                }
                else{
                    item.isActive = false
                }
                return item
            })
            const elem = array.find(item => item.label === label)
            onChange && elem && onChange(elem)
        }
        return newArr
    }

    useEffect(()=>{
        const modifList = list.map(item => {
        const isInclude =isArray ? activeValues.includes(item) : activeValues === item
        return {
            isActive: isInclude,
            label: item,
            name
        }
        })
        setCheckList(modifList)
    },[isArray ? activeValues.length : activeValues])

    const handleChange = (e: CheckBoxEvent) => {
        setCheckList(logicOfChange(e.label, checkList))
    }

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.name);
        const {value, name} = e.target
        console.log(value, name);
        const regExp = new RegExp(value, 'i')
        setCheckList(reserv.filter(item => regExp.test(item.label)))
        formik.setFieldValue(name, value)
    }

    const handleFocus = () => {
        setReserv(checkList)
    }
    

    
  return (
    <div >
        {
            search &&
            <form 
                className='mb-4'
                onSubmit={formik.handleSubmit}
            >
                <Input
                    name='check'
                    value={formik.values.check}
                    placeholder='Search here'
                    onChange={handleInput}
                    onFocus={handleFocus}
                />
            </form>
        }
        <div className={`relative ${className}`}>
            {
                checkList.map(item => {
                    return (
                        <CheckBox
                            key={item.label}
                            type={isArray ? 'checkbox' : 'radio'}
                            label={item.label}
                            name={item.name}
                            isActive = {item.isActive}
                            onChange={handleChange}
                        />
                    )
            
                })
            }
            <span className=' absolute -top-6 text-sm'>{title}</span>
        </div>
    </div>
  )
}