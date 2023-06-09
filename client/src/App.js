import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeDashboardPage from './components/home/HomeDashboardPage';
import WorkerLists from './components/worker/WorkerLists';
import PropertyListing from './shared/pages/property/PropertyListing';
import TenantsListing from './components/tenant/TenantsListing';
import Tenant from './components/tenant/Tenant';
import PropertyHome from './components/propertyhome/PropertyHome';

function App() {
  // const user = useSelector(selectUser);

  return (
    <main className='App'>
      {/* {!user ? (
        <LoginScreen />
      ) : ( */}
      <Routes>
        <Route path='/' element={<HomeDashboardPage />} />
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
