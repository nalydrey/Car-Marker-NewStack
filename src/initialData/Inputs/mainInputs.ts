import { InputFields } from "../../components/UI/InputMap";
import { Dimension } from "../../models/dimension";
import { EngineDetails } from "../../models/engineDetails";
import { GeneralInfo } from "../../models/generalInfo";
import { Location } from "../../models/location";
import { SellFormFields } from "../sellFormInit";

export const mainInputs: InputFields<SellFormFields, Location, Dimension, GeneralInfo, EngineDetails>[] = [
    {
        field: 'input',
        title: 'Title',
        name: 'title',
        className: 'md:col-span-2',
        placeholder: 'Enter main title',
    },
    {
        field: 'checkGroup',
        title: 'Conditions',
        name: 'condition',
        listName: 'conditions',
        className: 'flex gap-5'
    },
    {
        field: 'select',
        name: 'bodyType',
        title: 'Body Type',
        placeholder: 'Chose body type',
        listName: 'bodyTypes',
        groupName: 'generalInfo',
    },
    {
        field: 'select',
        name: 'brand',
        title: 'Brand',
        placeholder: 'Chose brand',
        listName: 'brands',
    },
    {
        field: 'select',
        name: 'model',
        title: 'Model',
        placeholder: 'Chose model',
        listName: 'models',
    },
    {
        field: 'select',
        name: 'year',
        title: 'Year',
        placeholder: 'Chose year',
        listName: 'years'
    },
    {
        field: 'input',
        name: 'passangerCapacity',
        title: 'Passanger Capacity',
        placeholder: 'Set count',
        groupName: 'generalInfo',
    },
    {
        field: 'select',
        name: 'color',
        title: 'Exterior Color',
        placeholder: 'Chose color',
        groupName: 'generalInfo',
    },
    {
        field: 'textarea',
        className: 'sm:col-span-2 md:col-span-3',
        name: 'discription',
        title: 'Discription',
        placeholder: 'Enter your discription'

    }
]
