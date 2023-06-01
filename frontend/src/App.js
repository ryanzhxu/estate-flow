import './App.css';
import InputField from './shared/components/InputField';
import InputForm from './shared/components/InputForm';
import StInputForm from './shared/components/input/StInputForm';
import React from 'react';

function App() {

  const fields = ["firstName", "lastName"];

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
    <StInputForm>
      <InputForm fields={fields} />
    </StInputForm>
  );
}

export default App;
