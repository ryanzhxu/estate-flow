import './App.css';
// import logo from './logo.svg';
import React from 'react';
import InputForm from './shared/components/InputForm';
import LeaseFormInputs from './shared/constants/input/LeaseFormInputs';

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
    <InputForm fields={Object.values(LeaseFormInputs.Required)} />
  );
}

export default App;
