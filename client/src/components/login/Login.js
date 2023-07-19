import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = '1006524705191-1rb3avjp8njtgsuld0256fp36csn27e3.apps.googleusercontent.com';

function Login() {
  const onSuccess = (resp) => {
    console.log('LOGIN SUCCESS! Current user: ', resp.profileObj);
  };

  const onFailure = (resp) => {
    console.log('LOGIN FAILED! resp: ', resp);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText='Login'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
