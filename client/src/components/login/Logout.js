import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '1006524705191-1rb3avjp8njtgsuld0256fp36csn27e3.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Log out successful');
  };

  return (
    <div>
      <GoogleLogout clientId={clientId} buttonText='Logout' onLogoutSuccess={onSuccess} />
    </div>
  );
}

export default Logout;
