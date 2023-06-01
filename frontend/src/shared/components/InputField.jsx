import React from "react";
import StInputField from "./input/StInputField";

const InputField = ({ field, value }) => {
  return (
    <StInputField>
      <label>{field}</label>
      <input type="text" name={field} value={value} />
    </StInputField>
  );
};

export default InputField;  