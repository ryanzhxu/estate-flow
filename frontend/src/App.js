import "./App.css";
import React from "react";
import InputForm from "./shared/components/InputForm";
import LeaseFormInputs from "./shared/constants/input/LeaseFormInputs";
import WorkerLists from "./components/WorkerComponent/WorkerLists";
import HomeWelcomePage from "./components/home/HomeWelcomePage";
import { useSelector } from "react-redux";
import LoginScreen from "./components/login/LoginScreen";
import { selectUser } from "./reducers/userSlice";

function App() {
  const user = useSelector(selectUser);

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

    // <div>{user ? <HomeWelcomePage /> : <LoginScreen />}</div>
    // <InputForm fields={Object.values(LeaseFormInputs.Required)} />
  );
}

export default App;
