import React from 'react';
import Dashboard from './Dashboard';
import HomeSideBar from './HomeSideBar';
import 'bootstrap-icons/font/bootstrap-icons.css';

function HomeDashboardPage({ handleLogout = undefined }) {
  return (
    <div className='homepage'>
      <div className='sidebar_container'>
        <HomeSideBar handleLogout={handleLogout} />
      </div>
      <Dashboard />
    </div>
  );
}

export default HomeDashboardPage;
