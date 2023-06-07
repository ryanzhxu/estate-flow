import React from "react";
import StInputField from "./input/StInputField";

const InputField = ({ field, value, isRequired = true }) => {
  return (
    <StInputField>
      {isRequired ?
        (
          <div>
            <span style={{ color: '#02687D' }}>* </span>
            <label>{field}</label>
          </div>
        )
        :
        (
          <label>{field}</label>
        )
      },
      <input type="text" name={field} value={value} />
    </StInputField>
  );
};

export default InputField;  