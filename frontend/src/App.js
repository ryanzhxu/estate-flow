import './App.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './reducers/userSlice';
import Login from './components/login/Login';
import HomeWelcomePage from './components/home/HomeWelcomePage';

function App() {
  const user = useSelector(selectUser);
  return (
    // <InputForm fields={Object.values(LeaseFormInputs.Required)} />
    <div>{user ? <HomeWelcomePage /> : <Login />}</div>
  );
}

export default App;
