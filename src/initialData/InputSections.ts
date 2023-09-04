import { Fields } from "../components/UI/InputMap"
import { dimensionInputs } from "./Inputs/dimensionInputs"
import { engineDetailsInputs } from "./Inputs/engineDetailsInputs"
import { featuresInput } from "./Inputs/featuresInput"
import { locationInputs } from "./Inputs/locationInputs"
import { mainInputs } from "./Inputs/mainInputs"
import { pictureInput } from "./Inputs/pitcureInput"
import { priceInputs } from "./Inputs/priceInputs"

interface InputSection {
    title: string
    className?: string
    inputList: Fields[]
}

export const inputSections: InputSection[] = [
    {
        title: 'Car Details',
        className: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7',
        inputList: mainInputs
    },
    {
        title: 'Engine Details',
        className: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7',
        inputList: engineDetailsInputs
    },
    {
        title: 'Dimension',
        className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7',
        inputList: dimensionInputs
    },
    {
        title: 'Location',
        className: 'grid gap-7 sm:grid-cols-2',
        inputList: locationInputs
    },
    {
        title: 'Features',
        className: '',
        inputList: featuresInput
    },
    {
        title: 'Images',
        className: '',
        inputList: pictureInput
    },
    {
        title: 'Price',
        className: 'flex gap-7 flex-wrap',
        inputList: priceInputs
    },
]