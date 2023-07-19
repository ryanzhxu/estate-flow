import React, { useEffect } from 'react';
import './Login.css';
import logo from '../home/logo.png';

import { gapi } from 'gapi-script';
import GoogleLogin from 'react-google-login';

const LoginScreen = ({ onLoginSuccess, onLoginFailure, clientId }) => {
  useEffect(() => {
    function start() {
      gapi.load('client:auth2', () => {
        gapi.client.init({
          clientId: clientId,
          scope: '',
        });
      });
    }

    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.onload = start;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [clientId]);

  return (
    <div
      style={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        gap: '20px',
      }}>
      <div className='img'>
        <img src={logo} alt='logo' />
      </div>
      <GoogleLogin
        clientId={clientId}
        buttonText='Login'
        onSuccess={onLoginSuccess}
        onFailure={onLoginFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={false}
      />
    </div>
  );
};

export default LoginScreen;
