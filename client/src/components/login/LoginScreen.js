import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../reducers/userSlice';
import './Login.css';
import logo from './logo.png';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({
        email: email,
        password: password,
        loggedIn: true,
      })
    );

    setEmail('');
    setPassword('');
  };

  return (
    <div className='login'>
      <div className='img'>
        <img src={logo} alt='logo' width='400' height='300' />
      </div>
      <form className='login-form' onSubmit={(e) => handleSubmit(e)}>
        <input type='email' value={email} placeholder='Email' required onChange={(e) => setEmail(e.target.value)} />
        <input
          type='password'
          value={password}
          placeholder='Password'
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' className='login-btn'>
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginScreen;
