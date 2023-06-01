import React from "react";
import StInputForm from "./input/StInputForm";
import InputField from "./InputField";

const InputForm = ({ fields }) => {
    return (
        <StInputForm>{
            fields.map((field) => {
                return <InputField field={field} value={undefined} />
            })}
        </StInputForm>
    );
};

export default InputForm;