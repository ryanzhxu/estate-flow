import React from "react";
import "./PropertyForm.css";
const renderFormInputs = (inputs) => {
  return Object.keys(inputs).map((section) => {
    return (
      <div key={section}>
        <h2 className="sectionTitle">{section}</h2>
        {Object.keys(inputs[section]).map((input) => {
          const field = inputs[section][input];
          if (field.hasOwnProperty("options")) {
            // basically just for Property Type, anything with Options
            return (
              <div key={input} className="inputOptions">
                <label htmlFor={input} className="optionsLabel">
                  {field.label}
                </label>

                <br></br>
                <select name={input}>
                  {field.options.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
            );
          }
          if (field.hasOwnProperty("file")) {
            // just for photos
            return (
              <div key={input} className="inputFile">
                <label htmlFor={input} className="fileLabel">
                  {field.label}
                </label>
                <br></br>
                <input type="file" id={input} name={input} />
              </div>
            );
          }
          return (
            <div key={input} className="inputText">
              <label htmlFor={input} className="textLabel">
                {field}
              </label>
              <br></br>
              <input type="text" id={input} name={input} />
            </div>
          );
        })}
      </div>
    );
  });
};

const PropertyInputForm = ({ inputs }) => {
  // submit doesnt do anything yet
  return (
    <div className="property-form">
      {renderFormInputs(inputs)}
      <br></br>
      <div className="submitButtonContainer">
        <button type="submit" className="submitButton">
          Submit
        </button>
      </div>
      <br></br>
    </div>
  );
};

export default PropertyInputForm;
