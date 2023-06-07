import React from "react";
import SideBar from './components/SideBar';
import Dashboard from "./components/Dashboard";

export default function HomeWelcomePage() {
    return(
        <div>
            <SideBar/>
            <Dashboard/>
        </div>
    );
}