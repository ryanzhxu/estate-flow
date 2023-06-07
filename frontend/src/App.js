import './App.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './reducers/userSlice';
import Login from './components/login/Login';
import HomePage from './pages/HomePage';

function App() {
  const user = useSelector(selectUser);
  return (
    <div>{user ? <HomePage /> : <Login />}</div>
  );
}

export default App;
