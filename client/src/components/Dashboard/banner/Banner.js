import React, { useEffect } from 'react';
import { useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import './Banner.css';

export default function Banner() {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    setIsLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log('Geolocation not supported');
    }
  }, []);

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });

    const openWeatherMapApi = '4201b710d29b331523d35ab01f306e9a';

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_SERVER_URL}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }

  function error() {
    console.log('Unable to retrieve your location');
  }

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='banner'>
      <Clock value={value} renderSecondHand={false} size='200px' />
      <div className='banner-weather-section'>
        {!location && !isLoading && <div className='btn btn-outline-dark'>Get weather</div>}
        {((location && !weather) || isLoading) && (
          <div className='banner-weather-section-loading'>
            <div className='spinner-border' role='status'>
              <span className='sr-only' />
            </div>
            Weather is loading ...
          </div>
        )}
        {weather && (
          <div className='banner-weather-section'>
            <div className='banner-weather-info'>
              <img
                alt={`${weather.weather[0].description}-icon`}
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                height='60px'
              />
              <p>
                Location: <strong>{weather.name}</strong>
              </p>
              <p>
                Temperature: <strong>{weather.main.temp} °C</strong>
              </p>
              <p>
                Humidity: <strong>{weather.main.humidity} %</strong>
              </p>
              <p>
                Weather: <strong>{weather.weather[0].description}</strong>{' '}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className='banner-right-section'>
        <h1>Welcome to Estate Flow!</h1>
        <p>
          Estate Flow is a comprehensive web app designed for property managers, offering seamless management of rental
          properties, houses, townhouses, condos, commercial spaces, and offices. This app efficiently stores and
          organizes data related to properties, buildings, land, tenants, managers, maintenance workers, and more. With
          Estate Flow, users can effortlessly perform CRUD operations, and track various fees, leases, and expenses. Our
          goal is to empower property managers to maximize their efficiency and profitability while ensuring the
          security and privacy of sensitive data.
        </p>
      </div>
    </div>
  );
}
