import "./App.css";
import React from "react";
import WorkerLists from "./components/WorkerComponent/WorkerLists";
import HomeWelcomePage from "./components/home/HomeDashboardPage";
import { useSelector } from "react-redux";
import LoginScreen from "./components/login/LoginScreen";
import { selectUser } from "./reducers/userSlice";
import { Routes, Route } from "react-router-dom";
import PropertyHome from "./components/propertyhome/PropertyHome";
import "bootstrap/dist/css/bootstrap.css";
import TempProperty from "./shared/constants/PropertyStuff/TempProperty";
import HomePropertyPage from "./components/home/HomePropertyPage";
import HomeDashboardPage from "./components/home/HomeDashboardPage";

function App() {
  const user = useSelector(selectUser);

  return (
    <main className="App">
      {/* {!user ? (
        <LoginScreen />
      ) : ( */}
        <Routes>
          <Route path="/" element={<HomeDashboardPage />} />
          <Route
            path="/property"
            element={<HomePropertyPage />}
          />
          <Route path="/worker" element={<WorkerLists />} />
        </Routes>
      {/* )} */}
    </main>
  );
}

export default App;
