import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeDashboardPage from "./components/home/HomeDashboardPage";
import WorkerLists from "./components/worker/WorkerLists";
import PropertyListing from "./shared/pages/property/PropertyListing";
import testProperties from "./shared/data/testProperties";

function App() {
  // const user = useSelector(selectUser);

  return (
    <main className="App" >
      {/* {!user ? (
        <LoginScreen />
      ) : ( */}
      <Routes>
        <Route path="/" element={<HomeDashboardPage />} />
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
