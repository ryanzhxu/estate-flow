import './App.css';
// import logo from './logo.svg';
import React from 'react';
// import InputForm from './shared/components/InputForm';
// import LeaseFormInputs from './shared/constants/input/LeaseFormInputs';
import PropertyInputForm from './shared/constants/PropertyStuff/PropertyInputForm';
import PropertyFormInputs from './shared/constants/PropertyStuff/PropertyFormInputs';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
    <h1>Property Form</h1>
    <PropertyInputForm inputs={PropertyFormInputs} />
  </div>
  );
}

export default App;
