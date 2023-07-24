import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomeDashboardPage from './components/home/HomeDashboardPage';
import WorkerLists from './components/worker/WorkerLists';
import PropertyListing from './shared/pages/property/PropertyListing';
import TenantsListing from './components/tenant/TenantsListing';
import Tenant from './components/tenant/Tenant';
import PropertyHome from './components/propertyhome/PropertyHome';
import { GoogleLogin } from '@react-oauth/google';
import MicrosoftLogin from 'react-microsoft-login';
import logo from './components/home/logo.png';
import './components/login/Login.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    if (storedLoginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const responseMessage = (response) => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    console.log(response);
  };

  const errorMessage = (error) => {
    console.log(error);
  };

  const authHandler = (err, data) => {
    if (!err) {
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
    }

    console.log(err, data);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
    navigate('/');
  };

  return (
    <main className='App'>
      {/* {!isLoggedIn ? (
        <div className='login'>
          <img src={logo} alt='logo' />
          <div className='login-btns'>
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} theme='outline' />
            <MicrosoftLogin
              clientId='18bd73ba-2d84-4dcb-8e78-aed10521e134'
              authCallback={authHandler}
              children={''}
              buttonTheme='light'
            />
          </div>
        </div>
      ) : ( */}
        <Routes>
          <Route path='/' element={<HomeDashboardPage handleLogout={handleLogout} />} />
          <Route path='/properties' element={<PropertyListing />} />
          <Route path='/properties/:_id' element={<PropertyHome />} />
          <Route path='/tenants' element={<TenantsListing />} />
          <Route path='/tenants/:id' element={<Tenant />} />
          <Route path='/workers' element={<WorkerLists />} />
        </Routes>
      {/* )} */}
    </main>
  );
}

export default App;
