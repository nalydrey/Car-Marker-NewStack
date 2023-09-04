import { InputFields } from "../../components/UI/InputMap";
import { Dimension } from "../../models/dimension";
import { EngineDetails } from "../../models/engineDetails";
import { GeneralInfo } from "../../models/generalInfo";
import { Location } from "../../models/location";
import { SellFormFields } from "../sellFormInit";

export const engineDetailsInputs: InputFields<SellFormFields, Location, Dimension, GeneralInfo, EngineDetails>[] = [
    {
        field: 'select',
        title: 'Fuel Type',
        name: 'fuelType',
        groupName: 'engineDetails',
        placeholder: 'Chose Fuel Type',
        listName: 'fuelTypes',
    },
    {
        field: 'input',
        title: 'Milage',
        name: 'milage',
        groupName: 'engineDetails',
        type: 'number',
        placeholder: "Enter yours car milage",
        unit: 'km',
    },
    {
        field: 'select',
        title: 'Transmission',
        name: 'transmission',
        groupName: 'engineDetails',
        placeholder: 'Change Transmission',
        listName: 'transmissions',
    },
    {
        field: 'select',
        title: 'Drivetrain',
        name: 'drivetrain',
        groupName: 'engineDetails',
        placeholder: 'Chose Drivetraine',
        listName: 'drivetrains',
    },
    {
        field: 'input',
        title: 'Engine Capacity',
        name: 'engineCapacity',
        groupName: 'engineDetails',
        type: 'number',
        placeholder: "Enter yours car engine capacity",
        unit: 'cc',
    },
    {
        field: 'input',
        title: 'Power',
        name: 'power',
        groupName: 'engineDetails',
        type: 'number',
        placeholder: "Enter yours car power",
        unit: 'hp',
    },
]