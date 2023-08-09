import React from 'react';
import HomeSideBar from './HomeSideBar';
import './Home.css';
import Dashboard from '../../components/Dashboard/Dashboard';

function Home({ handleLogout = undefined }) {
  return (
    <div className='homepage'>
      <HomeSideBar handleLogout={handleLogout} />
      <Dashboard />
    </div>
  );
}

export default Home;
