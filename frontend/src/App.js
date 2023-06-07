import "./App.css";
// import logo from './logo.svg';
import React from "react";
import InputForm from "./shared/components/InputForm";
import LeaseFormInputs from "./shared/constants/input/LeaseFormInputs";
import HomeWelcomePage from "./components/HomeWelcomePage";

function App() {
  return (
    // <InputForm fields={Object.values(LeaseFormInputs.Required)} />
    <div>
      <HomeWelcomePage />
    </div>
  );
}

export default App;
