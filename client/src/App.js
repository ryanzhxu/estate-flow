import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/home/Home';
import WorkersListing from './pages/workers/WorkersListing';
import PropertiesListing from './pages/properties/PropertiesListing';
import TenantsListing from './pages/tenants/TenantsListing';
import TenantHome from './components/tenant/TenantHome';
import PropertyHome from './components/propertyhome/PropertyHome';
import AboutPage from './pages/about/AboutPage';
import { GoogleLogin } from '@react-oauth/google';
import MicrosoftLogin from 'react-microsoft-login';
import logo from './shared/images/logo.png';
import './components/login/Login.css';
import video from './components/login/videoplayback.mp4';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    if (storedLoginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const responseMessage = (response) => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    console.log(response);
  };

  const errorMessage = (error) => {
    console.log(error);
  };

  const authHandler = (err, data) => {
    if (!err) {
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
    }

    console.log(err, data);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
    navigate('/');
  };

  const videoUrl = `https://rr3---sn-vgqsrn6z.googlevideo.com/videoplayback?expire=1691614649&ei=WanTZPCtEZCkv_IPwvqy4AU&ip=165.231.182.26&id=o-AMli3X0YPiQe3Z1B1huRvCPcykCcA2o3Ig7pNLklvP4u&itag=136&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313&source=youtube&requiressl=yes&spc=UWF9f-7B_l6OjVP-GjWM-6uU4OC9SHH1OguZXK3qEw&vprv=1&svpuc=1&mime=video%2Fmp4&ns=uC9tFbv6zA6RDfjzGrGrZHQP&gir=yes&clen=144842238&dur=661.285&lmt=1651114339501180&keepalive=yes&fexp=24007246,24350017,51000022&beids=24350017&c=WEB&txp=6319224&n=o6CCMm7Ryb4f6A&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAOSnTT6dcwPCiryt-ApqUUhtxbozoTIrOaJoSdIAkQLOAiBqFqnk6xGE0qY6oOFZ7SHbDqcMCHLAtF_0Lhius1uveQ%3D%3D&redirect_counter=1&cm2rm=sn-n8vys7l&req_id=b99a424fc74ba3ee&cms_redirect=yes&mh=5T&mip=2001:569:79a3:6100:f979:d84d:709:a410&mm=34&mn=sn-vgqsrn6z&ms=ltu&mt=1691592764&mv=m&mvi=3&pl=44&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgU0HaBraoRhi4SBUh8fIjxlM0pie6RV5Kx7LmT5x6_RkCICAlXWZQmKNxrl_S6lT9d5bDD2HQFNHBdvkhjwWBncL5`;

  return (
    <main className='App'>
      {!isLoggedIn ? (
        <div className='login'>
          <video className='videoTag' autoPlay loop muted>
            <source src={video} type='video/mp4' />
          </video>
          <div className='login-content'>
            <div>
              <img className='login-img' src={logo} alt='logo' />
            </div>
            <div className='login-btns'>
              <GoogleLogin onSuccess={responseMessage} onError={errorMessage} theme='outline' useOneTap />
              <MicrosoftLogin
                clientId='18bd73ba-2d84-4dcb-8e78-aed10521e134'
                authCallback={authHandler}
                children={''}
                buttonTheme='light'
              />
            </div>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path='/' element={<Home handleLogout={handleLogout} />} />
          <Route path='/properties' element={<PropertiesListing />} />
          <Route path='/properties/:_id' element={<PropertyHome />} />
          <Route path='/tenants' element={<TenantsListing />} />
          <Route path='/tenants/:_id' element={<TenantHome />} />
          <Route path='/workers' element={<WorkersListing />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      )}
    </main>
  );
}

export default App;
