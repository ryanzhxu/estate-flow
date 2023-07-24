import React from 'react';
import Select from 'react-select';
import './inputField/InputField.css';
import { getCapitalized } from '../services/Helpers';

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
  return (
    <div style={{ padding: '0 25px 0 1px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {isRequired && <span style={{ color: '#02687D' }}>*&nbsp;</span>}
        <label>{getCapitalized(field)}:</label>
      </div>

      {isSelect ? (
        <Select
          id={field}
          key={field}
          name={field}
          options={options}
          defaultValue={defaultValue === '' ? '' : options[defaultValue]}
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
