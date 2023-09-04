import { object, string, number } from 'yup'

export const validationSchema =  object({
    title: string().required('This field must be filled'),
    condition: string().required('This field must be filled'),
    brand: string().required('This field must be filled'),
    model: string().required('This field must be filled'),
    price: number().required('This field must be filled'),
    year: number().required('This field must be filled'),
    location: object({
        country: string().required('This field must be filled'),
        city: string().required('This field must be filled'),
    }),
    dimension: object({
        length: number().required('This field must be filled'),
        width: number().required('This field must be filled'),
        height: number().required('This field must be filled'),
        cargoVolume: number().required('This field must be filled'),
    }), 
    generalInfo: object({
        bodyType: string().required('This field must be filled'),
        color: string().required('This field must be filled'),
        passangerCapacity: number().required('This field must be filled'),
    }), 
    engineDetails: object({
        fuelType: string().required('This field must be filled'),
        milage: number().required('This field must be filled'),
        transmission: string().required('This field must be filled'),
        drivetrain: string().required('This field must be filled'),
        engineCapacity: number().required('This field must be filled'),
        power: number().required('This field must be filled'),
    }), 
    
  })
  



