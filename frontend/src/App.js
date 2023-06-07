import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import InputForm from './shared/components/InputForm';
import LeaseFormInputs from './shared/constants/input/LeaseFormInputs';
import Layout from './shared/components/Layout';
import TestHome from './shared/components/TestHome';
import TestAbout from './shared/components/TestAbout';
// import logo from './logo.svg';
function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<TestHome />} />
                <Route path="LeaseInput" element={<InputForm fields={Object.values(LeaseFormInputs.Required)} />} />
                <Route path="TestAbout" element={<TestAbout />} />
            </Route>
        </Routes>
    );

    /*return (
      <InputForm fields={Object.values(LeaseFormInputs.Required)} />
    );*/
}

export default App;
