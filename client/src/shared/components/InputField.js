import React from 'react';
import Select from 'react-select';
import './inputField/InputField.css';
import { getCapitalizedString } from '../services/Helpers';
import { MultiWordFields } from '../constants/MultiWordFields';

const InputField = ({
  field,
  defaultValue,
  onChange: onChangeHandler,
  type = null,
  isRequired = false,
  isSelect = false,
  isMulti = false,
  options = [],
}) => {
  const getDefaultValue = () => {
    if (defaultValue === '' || defaultValue.length === 0) return defaultValue;

    if (isMulti) {
      return defaultValue.map((value) => options.find((option) => option.value === value));
    } else {
      return options[defaultValue];
    }
  };

  return (
    <div style={{ padding: '0 25px 0 1px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {isRequired && <span style={{ color: '#02687D' }}>*&nbsp;</span>}
        <label>{Object.keys(MultiWordFields).includes(field) ? MultiWordFields[field] : getCapitalizedString(field)}:</label>
      </div>

      {isSelect ? (
        <Select
          id={field}
          key={field}
          name={field}
          options={options}
          defaultValue={getDefaultValue()}
          onChange={onChangeHandler}
          isMulti={isMulti}
        />
      ) : (
        <input
          type={type ?? 'text'}
          id={field}
          key={field}
          name={field}
          defaultValue={defaultValue}
          onChange={onChangeHandler}
        />
      )}
    </div>
  );
};

export default InputField;
