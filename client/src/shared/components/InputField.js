import React from 'react';
import Select from 'react-select';

const InputField = ({
  field,
  defaultValue,
  onChange: onChangeHandler,
  isNumeric = false,
  isRequired = false,
  isSelect = false,
  isMulti = false,
  options = [],
}) => {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {isRequired && <span style={{ color: '#02687D' }}>* &nbsp;</span>}
        <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
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
          type={isNumeric ? 'number' : 'text'}
          id={field}
          key={field}
          name={field}
          defaultValue={defaultValue}
          onChange={onChangeHandler}
        />
      )}
    </>
  );
};

export default InputField;