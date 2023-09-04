import { InputFields } from "../../components/UI/InputMap";
import { Dimension } from "../../models/dimension";
import { EngineDetails } from "../../models/engineDetails";
import { GeneralInfo } from "../../models/generalInfo";
import { Location } from "../../models/location";
import { SellFormFields } from "../sellFormInit";

export const dimensionInputs: InputFields<SellFormFields, Location, Dimension, GeneralInfo, EngineDetails>[] = [
    {
      title: 'Length',
      name: 'length',
      groupName: 'dimension',
      unit: 'mm',
      type: 'number',
      field: 'input',
      placeholder: 'Enter car lenght',
    },
    {
      title: 'Width',
      groupName: 'dimension',
      name: 'width',
      field: 'input',
      type: 'number',
      unit: 'mm',
      placeholder: 'Enter car width',
    },
    {
      title: 'Height',
      groupName: 'dimension',
      name: 'height',
      field: 'input',
      type: 'number',
      unit: 'mm',
      placeholder: 'Enter car height',
    },
    {
      title: 'Cargo Volume',
      groupName: 'dimension',
      name: 'cargoVolume',
      field: 'input',
      type: 'number',
      unit: 'L',
      placeholder: 'Enter cargo volume',
    }
  ]
