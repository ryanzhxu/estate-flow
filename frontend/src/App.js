import './App.css';
import React from 'react';
import HomeWelcomePage from './components/home/HomeWelcomePage';
import { useSelector } from 'react-redux';
import LoginScreen from './components/login/LoginScreen';
import { selectUser } from './reducers/userSlice';

function App() {
  const user = useSelector(selectUser);

  return (
    <div>{user ? <HomeWelcomePage /> : <LoginScreen />}</div>
    // <InputForm fields={Object.values(LeaseFormInputs.Required)} />
  );
}

export default App;