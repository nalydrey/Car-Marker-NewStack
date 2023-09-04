import { InputFields } from "../../components/UI/InputMap";
import { Dimension } from "../../models/dimension";
import { EngineDetails } from "../../models/engineDetails";
import { GeneralInfo } from "../../models/generalInfo";
import { Location } from "../../models/location";
import { SellFormFields } from "../sellFormInit";

export const pictureInput: InputFields<SellFormFields, Location, Dimension, GeneralInfo, EngineDetails>[] = [
   {
    field: 'image',
    name: 'picturesId'
   }
]