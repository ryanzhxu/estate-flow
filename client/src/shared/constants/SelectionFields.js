import Amenities from './property/Amenities';
import { PropertyTypes } from './property/PropertyTypes';
import { Provinces } from './property/Provinces';
import { Trades } from './worker/Trades';

export const SelectionFields = {
  province: Provinces,
  amenities: Amenities,
  type: PropertyTypes,
  trades: Trades,
};
