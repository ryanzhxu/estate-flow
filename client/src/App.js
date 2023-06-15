import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import WorkerLists from "./components/worker/WorkerLists";
import HomeWelcomePage from "./components/home/HomeWelcomePage";
import { Routes, Route } from "react-router-dom";
import PropertyListing from "./shared/pages/property/PropertyListing";
import testProperties from "./shared/data/testProperties";
// import { useSelector } from "react-redux";
// import { selectUser } from "./reducers/userSlice";
// import LoginScreen from "./components/login/LoginScreen";
// import PropertyHome from "./components/propertyhome/PropertyHome";
// import TempProperty from "./shared/constants/PropertyStuff/TempProperty";
// import PropertyCard from "./shared/pages/property/PropertyCard";


function App() {
  // const user = useSelector(selectUser);

  return (
    <main className="App" >
      {/* {!user ? (
        <LoginScreen />
      ) : ( */}
      <Routes>
        <Route path="/" element={<HomeWelcomePage />} />
        <Route
          path="/properties"
          element={<PropertyListing properties={testProperties} />}
        />
        <Route path="/worker" element={<WorkerLists />} />
      </Routes>
      {/* )} */}
    </main>
  );
}

export default App;
