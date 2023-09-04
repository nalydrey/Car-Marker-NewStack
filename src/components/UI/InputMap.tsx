import { Select } from './Select'
import { Input } from './Input'
import { Lists } from '../../gql/graphql'
import { CheckBoxGroup } from './CheckBoxGroup'
import { CheckBoxEvent } from './CheckBox'
import { TextArea } from './TextArea'
import { SellImageBox } from '../boxes/SellImageBox'
import { CurrencyDollarIcon } from '@heroicons/react/20/solid'
import RangeSlider from 'react-slider'

export type ListName = keyof Lists | 'conditions'

export interface Fields{
    search?: boolean
    title?: string
    name: string
    groupName?: string
    unit?: string
    placeholder?: string
    className?: string
    listName?: string
    type?: 'number' | 'password' | 'text'
    field: 'select' | 'input' | 'checkGroup' | 'textarea' | 'image'| 'range'
}

export interface InputFields<T, K, S, M, N> {
    search?: boolean
    title?: string
    name: keyof K | keyof S | keyof M | keyof N | keyof T
    groupName?: keyof T 
    unit?: string
    placeholder?: string
    className?: string
    listName?: ListName
    type?: 'number' | 'password' | 'text'
    field: 'select' | 'input' | 'checkGroup' | 'textarea' | 'image' | 'range'
}

export interface FormResult {
    errorMessage: string
    value: string | number | string[]
}  

export interface InputChangeEvent {
    value: string | string[]
    name: string, 
    groupName?: string 
    type?: string
}

export interface InputBlurEvent {
    name: string, 
    groupName?: string 
}

interface InputMapProps {
    className?: string
    inputList: Fields[]
    getFormFields: (name: string, groupName?: string) => FormResult
    onChange: (event: InputChangeEvent) => void
    onBlur: (event: InputBlurEvent) => void
    getList: (listName: string) => string[]
    onChangePicture: (event: FormData) => void
}

export const InputMap = ({
    className,
    inputList,
    getFormFields,
    onChange,
    getList,
    onBlur,
    onChangePicture
}: InputMapProps) => {

    const handleRadio = (e: CheckBoxEvent | CheckBoxEvent[]) => {
        if(Array.isArray(e)){
            const values = e.map(item => item.label)
            onChange({name: e[0].name, value: values})
        }
        else{
            onChange({name: e.name, value: e.label})
        }
    }

return (
    <div className={`${className}`}>
        {
            inputList.map(item => {
            const {groupName, name, type, field, listName, className} = item
            const {errorMessage, value} = getFormFields(name, groupName)
            
            switch (field){
                case 'input': return (
                    <Input
                        {...item}
                        value={Array.isArray(value) ? value[0]: value}
                        error={errorMessage}
                        onChange={(e) => onChange({
                                value: e.target.value,
                                name, 
                                type,
                                groupName
                            })}
                        onBlur={()=>onBlur({name, groupName})}
                    />
                )
                case 'select': return (
                    <Select
                        {...item}
                        value={Array.isArray(value) ? value[0]: value}
                        error={errorMessage}
                        list={listName ? getList(listName) : []}
                        onChange={(e)=>onChange({
                            value: e.chosedtem,
                            name: e.name, 
                            groupName
                        })}
                        onBlur={()=>onBlur({name, groupName})}
                    />
                )
                case 'checkGroup': return(
                    <CheckBoxGroup
                      {...item}
                      error = {errorMessage}
                      list={listName ? getList && getList(listName) : []}
                      activeValues={value.toString()}
                      onChange={handleRadio}
                    />
                ) 
                case 'textarea': return(
                    <TextArea 
                        {...item}
                        value={Array.isArray(value) ? value[0]: value}
                        onChange={(e) => onChange({
                            value: e.target.value,
                            name, 
                            type,
                            groupName
                        })}
                        onBlur={()=>onBlur({name, groupName})}
                    />
                )
                case 'image': return(
                    <SellImageBox
                        onChange={onChangePicture}
                    />
                )
                case 'range': return(
                    <RangeSlider 
                        value={Array.isArray(value) ? +value[0]: +value}
                        className={className}
                        thumbClassName="h-full p-1 rounded-sm bg-sea-500 flex justify-center"
                        renderThumb={(props) => <div {...props}>{<CurrencyDollarIcon  className='w-5'/>}</div>}
                        onChange={(e) => onChange({
                            value: Array.isArray(e) ? e[0]: e,
                            name, 
                            type: 'number',
                            groupName
                        })}
                     />
                )
            }
            })

        }
    </div>
)
    
}
