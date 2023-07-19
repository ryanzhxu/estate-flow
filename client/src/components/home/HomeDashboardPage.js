import React from 'react';
import Dashboard from './Dashboard';
import HomeSideBar from './HomeSideBar';
import 'bootstrap-icons/font/bootstrap-icons.css';

function HomeDashboardPage({ onLogOutSuccess }) {
  return (
    <div className='homepage'>
      <div className='sidebar_container'>
        <HomeSideBar onLogOutSuccess={onLogOutSuccess}/>
      </div>
      <Dashboard />
    </div>
  );
}

export default HomeDashboardPage;
