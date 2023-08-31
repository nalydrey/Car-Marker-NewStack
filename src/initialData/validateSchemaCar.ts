import { object, string, number } from 'yup'

export const validationSchema =  object({
    // title: string().required('This field must be filled'),
    price: number().required('This field must be filled'),
    location: object({
        country: string().required('This field must be filled'),
    }) 
    
  })

