import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/home/Home';
import WorkersListing from './pages/workers/WorkersListing';
import PropertiesListing from './pages/properties/PropertiesListing';
import TenantsListing from './pages/tenants/TenantsListing';
import TenantHome from './components/tenant/TenantHome';
import PropertyHome from './components/propertyhome/PropertyHome';
import AboutPage from './pages/about/AboutPage';
import { GoogleLogin } from '@react-oauth/google';
import MicrosoftLogin from 'react-microsoft-login';
import logo from './shared/images/logo.png';
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
      {!isLoggedIn ? (
        <div className='login'>
          <img className='login-img' src={logo} alt='logo' />
          <div className='login-btns'>
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} theme='outline' useOneTap />
            <MicrosoftLogin
              clientId='18bd73ba-2d84-4dcb-8e78-aed10521e134'
              authCallback={authHandler}
              children={''}
              buttonTheme='light'
            />
          </div>
        </div>
      ) : (
        <Routes>
          <Route path='/' element={<Home handleLogout={handleLogout} />} />
          <Route path='/properties' element={<PropertiesListing />} />
          <Route path='/properties/:_id' element={<PropertyHome />} />
          <Route path='/tenants' element={<TenantsListing />} />
          <Route path='/tenants/:_id' element={<TenantHome />} />
          <Route path='/workers' element={<WorkersListing />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      )}
    </main>
  );
}

export default App;
