import { useState} from 'react'
import  {graphql}  from './gql'
import { SellBox } from './components/UI/SellBox';
import { PageTitle } from './components/templates/PageTitle';
import { useFormik } from 'formik';
import { initialValues } from './initialData/sellFormInit';
import { MainButton } from './components/UI/MainButton';
import { useMutation, useQuery } from '@apollo/client';
import { validationSchema } from './initialData/validateSchemaCar';
import { Popup } from './components/UI/Popup';
import { FormResult, InputBlurEvent, InputChangeEvent, InputMap, ListName } from './components/UI/InputMap';
import { inputSections } from './initialData/InputSections';
import { createPictures } from './requests/createPictures';


const CREATE_NEW_CAR = graphql(`
  mutation CreateClientCar($car: SellForm) {
    createClientCar(car: $car) {
      isSuccess
    }
  }
`);

const GET_LISTS = graphql(`
  query GetLists {
    lists {
      countries
      cities
      brands
      models
      years
      bodyTypes
      colors
      fuelTypes
      transmissions
      drivetrains
      features
    }
  }
`)


export const  App = () => {

  const [createClientCar, clientCarMutation] = useMutation(CREATE_NEW_CAR)
  const {data} = useQuery(GET_LISTS)


  const addValue = (elem: string | string[], name: string, groupName?: string, isNumber: boolean = false) => {
    let value: string | number | string[] = elem
    value = isNumber && !isNaN(+elem) ? +elem : elem  
    groupName ?
    setFieldValue(`${groupName}.${name}`, value)
    :
    setFieldValue(name, value)
  }

  const {
    touched,
    values,
    errors,
    handleSubmit,
    setFieldValue,
    setFieldTouched
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (form) => {
      const pictResp = await createPictures(files)
      const picturesId = pictResp.images.map(picture => picture.id)
      createClientCar({variables: {car: {...form, picturesId}}})
    }
  })
  
  const [files, setFiles] = useState<FormData | null>(null)

  const handlerChange = ({name, value, groupName, type}: InputChangeEvent) => {
    addValue(value, name, groupName, type === 'number' || name==='year')
  }

  const handleChangePicture = (formData: FormData) => {
    setFiles(formData)
  }

  const handleTouched = ({name, groupName}: InputBlurEvent) => {
    groupName ? setFieldTouched(`${groupName}.${name}`, true) : setFieldTouched(name, true)
  }

  const handleGetForm: (name: string, groupName?: string) => FormResult = (name, groupName) => {
    let errorMessage: string = ''
    let isTouch = false
    let value: number | string | null = null
    if(groupName){
        const a = groupName as 'location' 
        const b = name as 'city'
        if(touched[a]){
          isTouch = touched[a][b] ? true : false
        }
        if(errors[a]){
          errorMessage = isTouch && errors[a][b] ? errors[a][b] : ''
        }
          value = values[a][b]
      }
      else{
        const b = name as 'brand'
        isTouch = touched[b] ? true : false
        errorMessage = isTouch && errors[b] ? errors[b] : ''
        value = values[b]
      }
    return {errorMessage, value}
  }

  const handleGetList: (name: string) => string[] = (name) => {
    const newName = name as ListName
    console.log(newName);
    
    if(newName === 'conditions'){
      return ['New', 'Used']
    }
    if(data && data.lists){
      const list = data.lists[newName] as []
      return  list
    }
    return []
  }

  console.log(data);
  

  return (
    <div >
      <PageTitle 
        title='Title'
      />
      <div 
        className='mt-12 flex flex-col gap-10 mb-20 container mx-auto items-center px-1'
      >
      {
        inputSections.map(section => {
          const {title, className, inputList} = section
          return(
            <SellBox
            title={title}
            >
              <InputMap
                className = {className}
                inputList={inputList}
                getFormFields={handleGetForm}
                onChange={handlerChange}
                onBlur={handleTouched}
                getList={handleGetList}
                onChangePicture={handleChangePicture}
              />
            </SellBox>
          )
        })
      }
        <MainButton
          isLoading = {clientCarMutation.loading}
          type='button'
          onClick={()=>handleSubmit()}
          title='Sell My Car'
        />
      </div>
      <Popup
        show={!clientCarMutation.loading && clientCarMutation.data?.createClientCar?.isSuccess || false}
      />
    </div>
  )
}