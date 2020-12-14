import React from 'react';
import WeatherInfo from './WeatherInfo';
import WeatherExtraInformation from './WeatherExtraInformation';
import LocationDate from './LocationDate';

export default function WeatherContainer({ weather }) {
  const furtherTempInfo = [
    { value: Math.round(weather.main.temp_max) + '°C', label: 'Höchst' },
    { value: Math.round(weather.main.temp_min) + '°C', label: 'Tiefst' },
    { value: Math.round(weather.main.feels_like) + '°C', label: 'Gefühlt' },
  ];
  const extraInfo = [
    { value: weather.wind.speed + ' km/h', label: 'Windgeschwindigkeit' },
    { value: weather.main.humidity + '%', label: 'Luftfeuchtigkeit' },
    { value: weather.main.pressure + ' h/Pa', label: 'Luftdruck' },
  ];
  return (
    <div className='WeatherContainer'>
      <LocationDate location={`${weather.name}, ${weather.sys.country}`} />
      <WeatherInfo weather={weather} />
      <div className='extraInfoContainer'>
        <WeatherExtraInformation data={furtherTempInfo} />
        {/* <WeatherExtraInformation data={extraInfo} /> */}
      </div>
    </div>
  );
}
