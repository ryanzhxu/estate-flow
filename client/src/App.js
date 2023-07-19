import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomeDashboardPage from './components/home/HomeDashboardPage';
import WorkerLists from './components/worker/WorkerLists';
import PropertyListing from './shared/pages/property/PropertyListing';
import TenantsListing from './components/tenant/TenantsListing';
import Tenant from './components/tenant/Tenant';
import PropertyHome from './components/propertyhome/PropertyHome';
import LoginScreen from './components/login/LoginScreen';

import { gapi } from 'gapi-script';

function App() {
  const clientId = '1006524705191-1rb3avjp8njtgsuld0256fp36csn27e3.apps.googleusercontent.com';
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const onLoginSuccess = (resp) => {
    var accessToken = gapi.auth2.accessToken;
    console.log('accessToken: ', accessToken);

    SetIsLoggedIn(true);
    console.log('LOGIN SUCCESS! Current user: ', resp.profileObj);
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/');
  };

  const onLoginFailure = (resp) => {
    console.log('LOGIN FAILED! resp: ', resp);
  };

  const onLogoutSuccess = () => {
    SetIsLoggedIn(false);
    console.log('Log out successful');
    localStorage.setItem('isLoggedIn', 'false');
    navigate('/');
  };

  if (!isLoggedIn) {
    return (
      <main>
        <LoginScreen onLoginSuccess={onLoginSuccess} onLoginFailure={onLoginFailure} clientId={clientId} />
      </main>
    );
  }

  return (
    <main>
      <Routes>
        <Route path='/' element={<HomeDashboardPage onLogOutSuccess={onLogoutSuccess} />} />
        <Route path='/properties' element={<PropertyListing />} />
        <Route path='/properties/:_id' element={<PropertyHome />} />
        <Route path='/tenants' element={<TenantsListing />} />
        <Route path='/tenants/:id' element={<Tenant />} />
        <Route path='/workers' element={<WorkerLists />} />
      </Routes>
    </main>
  );
}

export default App;
