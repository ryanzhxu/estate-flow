import React from 'react';
import Dashboard from '../../components/dashboard/Dashboard';
import HomeSideBar from './HomeSideBar';
import './Home.css';

function Home({ handleLogout = undefined }) {
  return (
    <div className='homepage'>
      <HomeSideBar handleLogout={handleLogout} />
      <Dashboard />
    </div>
  );
}

export default Home;
