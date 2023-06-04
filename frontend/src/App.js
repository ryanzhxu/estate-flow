import './App.css';
// import logo from './logo.svg';
import React from 'react';
import InputForm from './shared/components/InputForm';
import LeaseFormInputs from './shared/constants/input/LeaseFormInputs';
import HomeWelcomePage from './HomeWelcomePage';

function App() {
  return (
    <div>
    <HomeWelcomePage/>
    {/* <InputForm fields={Object.values(LeaseFormInputs.Required)} /> */}
    </div>
  );
}

export default App;
