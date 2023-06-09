import './App.css';
// import logo from './logo.svg';
import React from 'react';
import InputForm from './shared/components/InputForm';
import LeaseFormInputs from './shared/constants/input/LeaseFormInputs';
import WorkerLists from "./components/WorkerComponent/WorkerLists";

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

    // <InputForm fields={Object.values(LeaseFormInputs.Required)} />


      /*  for worker component test
      *
      * */

      <main className="App">
      <WorkerLists />
      </main>



  );
}

export default App;
