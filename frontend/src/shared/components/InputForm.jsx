import React from "react";
import InputField from "./InputField";

const InputForm = ({ fields }) => {
    return fields.map((field) => {
        return <InputField field={field} value={undefined} />
    });
};

export default InputForm;