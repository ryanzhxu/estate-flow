import React from 'react';
import './Login.css';
import logo from './logo.png';
import { GoogleLogin } from '@react-oauth/google';

const LoginScreen = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const dispatch = useDispatch();

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   dispatch(
  //     login({
  //       email: email,
  //       password: password,
  //       loggedIn: true,
  //     })
  //   );

  //   setEmail('');
  //   setPassword('');
  // };

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <div className='login'>
      <img src={logo} alt='logo' />
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>
  );
};

export default LoginScreen;
