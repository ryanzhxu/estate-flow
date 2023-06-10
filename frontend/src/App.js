import "./App.css";
import React from "react";
import InputForm from "./shared/components/InputForm";
import LeaseFormInputs from "./shared/constants/input/LeaseFormInputs";
import WorkerLists from "./components/WorkerComponent/WorkerLists";
import HomeWelcomePage from "./components/home/HomeWelcomePage";
import { useSelector } from "react-redux";
import LoginScreen from "./components/login/LoginScreen";
import { selectUser } from "./reducers/userSlice";
import HomeApplications from "./components/home/HomeApplications";
import { Routes, Route } from 'react-router-dom';
import PropertyHome from "./components/propertyhome/PropertyHome";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const user = useSelector(selectUser);
  const property = {
    type: "Townhouse",
    name: "ICCS",
    address: {
      streetAddress: "2366 Main Mall",
      city: "Vancouver",
      province: "BC",
      zipCode: "V6T 1Z4"
    },
    bed: 2,
    bath: 2,
    description: "abcdefg",
    rent: 1000,
    amenities: [
      "Pool",
      "Washing Machine",
      "Dryer"
    ],
    photos: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?cs=srgb&dl=pexels-pixabay-280222.jpg&fm=jpg",
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyamin-mellish-106399.jpg&fm=jpg"
    ],
    tenants: [
      {
        firstName: "Mary",
        lastName: "Jane",
        email: "someone@example.com",
        phoneNumber: "111-222-3333"
      }
    ]
  };

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
      < main className = "App" >
      <Routes>
        <Route path="/" element={<HomeWelcomePage/>}/>
        <Route path="/property" element={<PropertyHome property={property}/>}/>
        <Route path="/worker" element={<WorkerLists/>}/>
      </Routes>
    </main>

    // <div>{user ? <HomeWelcomePage /> : <LoginScreen />}</div>
    // <InputForm fields={Object.values(LeaseFormInputs.Required)} />
  );
}

export default App;
