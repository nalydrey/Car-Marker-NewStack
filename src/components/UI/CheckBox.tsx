
export interface CheckBoxEvent {
    isActive: boolean
    label: string
    name: string
}

interface CheckBoxProps {
    type: 'radio' | 'checkbox'
    isActive: boolean
    label: string
    name: string
    onChange: (params: CheckBoxEvent) => void
}

export const CheckBox = ({
    type = 'checkbox',
    isActive = false,
    label,
    name,
    onChange
}: CheckBoxProps) => {

    const isCheckbox = type === 'checkbox' ? true : false

  return (
    <button 
        type='button'
        className='relative flex gap-2 items-center'
        onClick={()=>onChange({isActive, label, name})}
    >
        <div className={`w-3 h-3 sm:w-4 sm:h-4 border-2 ${isCheckbox ? 'rounded-sm' : 'rounded-lg'} flex justify-center items-center`}>
            <div className={`bg-fog-200 h-1 w-1 sm:h-2 sm:w-2 duration-200 ${isCheckbox ? '':'rounded-lg'}  ${isActive ? ' scale-100':' scale-0'}`}/>
        </div>
        <span className='text-sm'>{label}</span>
    </button>
  )
}
