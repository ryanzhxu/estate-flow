import React from "react";
import HomeSideBar from "./HomeSideBar";
import "bootstrap-icons/font/bootstrap-icons.css";
import PropertyHome from "../propertyhome/PropertyHome";
import TempProperty from "../../shared/constants/PropertyStuff/TempProperty";

function HomeDashboardPage() {

    return (
        <div className="homepage">
            <div className="sidebar_container">
            <HomeSideBar />
            </div>
            <PropertyHome property={TempProperty}/>
        </div>
    );
}

export default HomeDashboardPage;