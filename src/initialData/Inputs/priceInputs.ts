import { InputFields } from "../../components/UI/InputMap";
import { Dimension } from "../../models/dimension";
import { EngineDetails } from "../../models/engineDetails";
import { GeneralInfo } from "../../models/generalInfo";
import { Location } from "../../models/location";
import { SellFormFields } from "../sellFormInit";

export const priceInputs: InputFields<SellFormFields, Location, Dimension, GeneralInfo, EngineDetails>[] = [
   {
    field: 'range',
    name: 'price',
    className: 'min-h-[30px] min-w-[300px] bg-night-300 rounded-sm grow'
   },
   {
    field: 'input',
    name: 'price',
    placeholder: 'Enter price',
    title: 'Price',
    type: 'number',
    unit: '$'
   }
  ]

