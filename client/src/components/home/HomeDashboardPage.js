import React from "react";
import Dashboard from "./Dashboard";
import HomeSideBar from "./HomeSideBar";
import "bootstrap-icons/font/bootstrap-icons.css";

function HomeDashboardPage() {
  return (
    <div className="homepage">
      <div className="sidebar_container">
        <HomeSideBar />
      </div>
      <Dashboard />
    </div>
  );
}

export default HomeDashboardPage;
