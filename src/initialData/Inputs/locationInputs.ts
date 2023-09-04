import { InputFields } from "../../components/UI/InputMap";
import { Dimension } from "../../models/dimension";
import { EngineDetails } from "../../models/engineDetails";
import { GeneralInfo } from "../../models/generalInfo";
import { Location } from "../../models/location";
import { SellFormFields } from "../sellFormInit";

export const locationInputs: InputFields<SellFormFields, Location, Dimension, GeneralInfo, EngineDetails>[] = [
    {
        field: 'select',
        title: 'Country',
        groupName: 'location',
        name: 'country',
        listName: 'countries',
        placeholder: 'Chose your country',
    },
    {
        field: 'select',
        title: 'City',
        groupName: 'location',
        name: 'city',
        listName: 'cities',
        placeholder: 'Chose your city',
    }
]