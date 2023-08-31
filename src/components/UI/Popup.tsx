import {useState, useEffect} from 'react'

interface PopupProps {
    show: boolean
}

export const Popup = ({
    show = false
}: PopupProps) => {

    const [isShow, setShow] = useState<boolean>(false)
    const [isExist, setExist] = useState<boolean>(false)

    useEffect(()=>{
        let timer: null | NodeJS.Timeout = null
        let timer2: null | NodeJS.Timeout = null
        if(show){
            setExist(true)
            timer = setTimeout(()=>{
                setShow(true)
                timer && clearTimeout(timer)
            }, 100)
            timer2 = setTimeout(()=>{
                setShow(false)
                timer2 && clearTimeout(timer2)
            }, 2000)
        }

        return () => {
            timer && clearTimeout(timer)
            timer2 && clearTimeout(timer2)
        }
        
    },[show])


    const handleTransition = () => {
        if(!isShow){
            setExist(false)
        }
    }

  return (
    <div 
        className={`fixed  left-1/2 -translate-x-1/2 
                    w-96 h-32 border rounded-lg flex justify-center items-center
                    duration-300
                    ${isShow ? 'top-0 translate-y-1/2 ': 'top-0 -translate-y-full'}
                    ${isExist ? 'flex': 'hidden'}
                    shadow-2xl bg-sea-200/50 backdrop-blur-sm 
                    text-white text-lg`}
        onTransitionEnd={handleTransition}
        >
        Your car was created
    </div>
  )
}
