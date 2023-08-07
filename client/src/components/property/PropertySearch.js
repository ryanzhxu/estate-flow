import React, { useEffect, useState } from 'react';
import { PropertyTypes } from '../../shared/constants/property/PropertyTypes';
import { PropertyTypeIconUrls } from './PropertyTypesIconsMap';
import './propertySearch.css';

const PropertySearch = ({ onFilterProperties, onResetProperties }) => {
  const [selectedTypes, setSelectedTypes] = useState([]);

  const handlePropertyTypeToggle = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((selectedType) => selectedType !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const handleReset = () => {
    setSelectedTypes([]);
    onResetProperties();
  };

  useEffect(() => {
    onFilterProperties(selectedTypes);
  }, [selectedTypes, onFilterProperties]);

  const isPropertyTypeSelected = (type) => {
    return selectedTypes.includes(type) ? 'selected' : '';
  };

  return (
    <div className='property-types'>
      <div className='btn btn-outline-secondary' onClick={handleReset}>
        Reset
      </div>
      {Object.keys(PropertyTypes).map((type) => (
        <div
          key={`select-${type}`}
          className={`property-type ${isPropertyTypeSelected(type)}`}
          onClick={() => handlePropertyTypeToggle(type)}>
          <img width='100px' height='100px' src={PropertyTypeIconUrls[type]} alt={type} />
          {type}
        </div>
      ))}
    </div>
  );
};

export default PropertySearch;
