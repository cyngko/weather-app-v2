import React from 'react';
// import { Sunrise, Sunset } from 'react-feather';

export default function WeatherInfo({ weather }) {
  //   const timeBuilder = (time) => {
  //     return `${time.getHours()}:${time.getMinutes()} Uhr`;
  //   };
  return (
    <div className='WeatherInfo'>
      <div className='displayDate'>Heute</div>
      <div className='weatherMainInfoContainer'>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt='weather-icon'
          className='weather-icon'
        />
        <span className='temperature'>{Math.round(weather.main.temp)}°C</span>
      </div>
      <div className='description'>{weather.weather[0].description}</div>
      {/* <div className='sunInfoContainer'>
        <div className='sunInfo'>
          <Sunrise />
          <span id='sunrise'>{timeBuilder(new Date(weather.sys.sunrise))}</span>
        </div>
        <div className='sunInfo'>
          <Sunset />
          <span id='sunset'>{timeBuilder(new Date(weather.sys.sunset))}</span>
        </div>
      </div> */}
    </div>
  );
}
