import { InputFields } from "../../components/UI/InputMap";
import { Dimension } from "../../models/dimension";
import { EngineDetails } from "../../models/engineDetails";
import { GeneralInfo } from "../../models/generalInfo";
import { Location } from "../../models/location";
import { SellFormFields } from "../sellFormInit";

export const featuresInput: InputFields<SellFormFields, Location, Dimension, GeneralInfo, EngineDetails>[] = [
    {
        field: 'checkGroup',
        name: 'features',
        className: 'grid grid-cols-2 gap-2 justify-items-start',
        listName: 'features',
        search: true
    }
  ]