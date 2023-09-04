import { Dimension } from "../models/dimension"
import { EngineDetails } from "../models/engineDetails"
import { GeneralInfo } from "../models/generalInfo"
import { Location } from "../models/location"

export interface SellFormFields {
    title: string
    picturesId: number[]
    condition: string
    price: number | null
    brand: string
    model: string
    year: number | null
    discription: string
    generalInfo: GeneralInfo
    dimension: Dimension
    engineDetails: EngineDetails
    location: Location
    features: string[]
  }
  
 export const initialValues: SellFormFields = {
    title: '',
    picturesId: [],
    condition: '',
    price: null,
    brand: '',
    model: '',
    year: null,
    features: [],
    discription: '',
    dimension: {
      length: null,
      width: null,
      height: null,
      cargoVolume: null
    },
    engineDetails: {
        drivetrain: '',
        fuelType: '',
        transmission: '',
        engineCapacity: null,
        milage: null,
        power: null
    },
    generalInfo: {
        bodyType: '',
        color: '',
        passangerCapacity: null
    },
    location: {
        country: '',
        city: ''
    }
    
    
  }
