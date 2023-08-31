import {ChangeEvent, useState} from 'react'
import axios from 'axios';
import  {graphql}  from './gql'
import { Input } from './components/UI/Input';
import { Select, SelectEvent } from './components/UI/Select';
import { SellBox } from './components/UI/SellBox';
import { TextArea } from './components/UI/TextArea';
import { PageTitle } from './components/templates/PageTitle';
import { CheckBoxGroup } from './components/UI/CheckBoxGroup';
import RangeSlider from 'react-slider'
import { CurrencyDollarIcon } from '@heroicons/react/20/solid';
import { useFormik } from 'formik';
import { initialValues } from './initialData/sellFormInit';
import { CheckBoxEvent } from './components/UI/CheckBox';
import { SellImageBox } from './components/boxes/SellImageBox';
import { MainButton } from './components/UI/MainButton';
import { useMutation } from '@apollo/client';
import { validationSchema } from './initialData/validateSchemaCar';
import { Popup } from './components/UI/Popup';

  interface Picture {
    createdAt: Date
    id: number
    name: string
  }

  interface PictureResp {
    isSuccess: boolean
    message: string
    images: Picture[]
  }

const CREATE_NEW_CAR = graphql(`
  mutation CreateClientCar($car: SellForm) {
    createClientCar(car: $car) {
      isSuccess
    }
  }
`);

const GET_CLIENT_CARS = graphql(`
  query GetClientCars{
    clientCars {
      id
      brand
      images {
        id
        name
      }
    } 
  }
`)

const DELETE_CLIENT_CAR = graphql(`
  mutation DeleteClientCar($id: Int!) {
    deleteCar(id: $id) {
      isSuccess
    }
  }
`)



  

export const  App = () => {

  const [createClientCar, clientCarMutation] = useMutation(CREATE_NEW_CAR)


  const addValue = (elem: string, name: string, groupName?: string, isNumber: boolean = false) => {
    let value: string | number = elem
    value = isNumber && !isNaN(+elem) ? +elem : elem  
    groupName ?
    setFieldValue(`${groupName}.${name}`, value)
    :
    setFieldValue(name, value)

  }

 

  const {
  values,
  errors,
  handleSubmit,
  setFieldValue
  } = useFormik({
    initialValues,
    // validationSchema,
    onSubmit: async (form) => {
      let picturesId: number[] = []
      if(files){
        const {data} = await axios.post<PictureResp>('http://localhost:4002/upload',files)
        console.log(data.images);
        
        picturesId = data.images.map(img => img.id)
      } 
      createClientCar({variables: {car: {...form, picturesId}}})
    }
  })
  
  const [files, setFiles] = useState<FormData | null>(null)



  const handlerChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> , groupName?: string) => {
    const {name, value, type} = e.target
    addValue(value, name, groupName, type === 'number')
  }

  const handlerSelect = ({chosedtem, groupName, name}: SelectEvent) => {
    console.log(name);
    
    if(name){
      addValue(chosedtem, name, groupName, name==='year')
    }
  }

  const handleRadio = (checkBox: CheckBoxEvent | CheckBoxEvent[]) => {
    if(Array.isArray(checkBox))
      checkBox[0] && setFieldValue(checkBox[0].name, checkBox.map(item => item.label))
    else{
      addValue(checkBox.label, checkBox.name)
    }
  }

  const handleRange = (value: number) => {
    setFieldValue('price', value)
  }

  const handleChangePicture = (formData: FormData) => {
    setFiles(formData)
  }
  
  console.log(values);
console.log(clientCarMutation.data?.createClientCar?.isSuccess);
  

  return (
    <div >
      <PageTitle 
        title='Title'
      />
      <div 
        className='mt-12 flex flex-col gap-10 mb-20 container mx-auto items-center px-1'
      >
        <SellBox
          title='Title'
        >
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 '>
            <Input 
              className=' md:col-span-2'
              title='Title'
              name='title'
              value={values.title}
              placeholder='Enter title'
              onChange={handlerChange}
            /> 
            <CheckBoxGroup
              className='flex gap-5'
              title='Condition'
              name='condition'
              list={['New', 'Used']}
              activeValues={values.condition}
              onChange={handleRadio}
            />
            <Select
              title='Body Type'
              name='bodyType'
              groupName='generalInfo'
              list={['1', '2', '3', '4' ]}
              value={values.generalInfo.bodyType}
              onChange={handlerSelect}
            />
            <Select
              title='Brand'
              list={['1', '2', '3', '4' ]}
              name='brand'
              value={values.brand}
              onChange={handlerSelect}
            />
            <Select
              title='Model'
              list={['1', '2', '3', '4' ]}
              name = 'model'
              value={values.model}
              placeholder="Model isn't choise"
              onChange={handlerSelect}
            />
            <Select
              title='Year'
              name = 'year'
              list={['1', '2', '3', '4' ]}
              value={values.year}
              onChange={handlerSelect}
            />
            <Input 
              type='number'
              name='passangerCapacity'
              groupName='generalInfo'
              title='Passanger Capacity'
              value = {values.generalInfo.passangerCapacity}
              onChange={handlerChange}
              onMinus={()=>{}}
              onPlus={()=>{}}
            />
            <Select
              title='Exterior Color'
              list={['1', '2', '3', '4' ]}
              value={values.generalInfo.color}
              groupName='generalInfo'
              name='color'
              placeholder=''
              onChange={handlerSelect}
            />
            <TextArea 
              className=' sm:col-span-2 md:col-span-3'
              name='discription'
              text={values.discription}
              onChange={handlerChange}
            />
          </div>
        </SellBox>
        <SellBox
          title='Engine Details'
        >
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7'>
            <Select
              title='Fuel type'
              list={['1','2', 'a']}
              value={values.engineDetails.fuelType}
              name = 'fuelType'
              groupName='engineDetails'
              onChange={handlerSelect}
            />
            <Input
              name='milage'
              title='Milage'
              units='km'
              type='number'
              value={values.engineDetails.milage}
              groupName='engineDetails'
              placeholder='How km your car have'
              onChange={handlerChange}
            />
            <Select
              title='Transmission'
              list={['1','2']}
              name='transmission'
              value={values.engineDetails.transmission}
              groupName='engineDetails'
              placeholder="Model isn't choise"
              onChange={handlerSelect}
            />
            <Select
              title='Drivetrain'
              list={['1','2']}
              name='drivetrain'
              value={values.engineDetails.drivetrain}
              groupName='engineDetails'
              placeholder="Select Option"
              onChange={handlerSelect}
            />
            <Input
              name='engineCapacity'
              title='Engine Capacity'
              units='cc'
              type='number'
              value={values.engineDetails.engineCapacity}
              groupName='engineDetails'
              placeholder='How km your car have'
              onChange={handlerChange}
            />
             <Input
              name='power'
              title='Power'
              units='cc'
              type='number'
              value={values.engineDetails.power}
              groupName='engineDetails'
              placeholder='How km your car have'
              onChange={handlerChange}
            />
          </div>
        </SellBox>
        <SellBox
          title='Dimension'
        >
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7'>
            <Input
              name='length'
              title='Length'
              units='mm'
              type='number'
              groupName='dimension'
              value={values.dimension.length}
              onChange={handlerChange}
              placeholder='Enter car lenght'
            />
            <Input
              name='width'
              title='Width'
              units='mm'
              type='number'
              groupName='dimension'
              value={values.dimension.width}
              onChange={handlerChange}
              placeholder='Enter car width'
            />
            <Input
              name='height'
              title='Height'
              units='mm'
              type='number'
              groupName='dimension'
              value={values.dimension.height}
              onChange={handlerChange}
              placeholder='Enter car height'
            />
            <Input
              name='cargoVolume'
              title='Cargo Volume'
              units='L'
              type='number'
              groupName='dimension'
              value={values.dimension.cargoVolume}
              onChange={handlerChange}
              placeholder='Enter car cargo volume'
            />
          </div>
        </SellBox>
        <SellBox
          title='Features'
        >
          <CheckBoxGroup
            search
            className='grid grid-cols-2 gap-2 justify-items-start'
            list={['Power Steering','AC','Alarm', 'Bluetooth', 'Heated Seats', 'WiFi']}
            name='features'
            activeValues={values.features}
            onChange={handleRadio}
          />
        </SellBox>
        <SellBox
          title='Location'
        >
          <div className='grid gap-7 sm:grid-cols-2'>
            <Select
              list={['1','2']}
              title='Country'
              value={values.location.country}
              groupName='location'
              name='country'
              placeholder=''
              onChange={handlerSelect}
            />
            <Select
              list={['1','2']}
              title='City'
              value={values.location.city}
              groupName='location'
              name = 'city'
              placeholder=''
              onChange={handlerSelect}
            />
          </div>
        </SellBox>
        <SellBox
          title='Price'
        >
          <div className='flex gap-7 flex-wrap'>
            <RangeSlider 
              value={values.price || 0}
              className="min-h-[30px] min-w-[300px] bg-night-300 rounded-sm grow"
              thumbClassName="h-full p-1 rounded-sm bg-sea-500 flex justify-center"
              renderThumb={(props) => <div {...props}>{<CurrencyDollarIcon  className='w-5'/>}</div>}
              onChange={handleRange}
            />
            <Input
              className='grow'
              name='price'
              type='number'
              value={values.price}
              units='$'
              onChange={handlerChange}
            />
          </div>
        </SellBox>
        <SellBox
          title='Images'
        >
          <SellImageBox
            onChange={handleChangePicture}
          />
        </SellBox>
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