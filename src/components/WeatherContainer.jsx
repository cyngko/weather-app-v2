import React from 'react';
import WeatherInfo from './WeatherInfo';
import WeatherExtraInformation from './WeatherExtraInformation';

export default function WeatherContainer({ weather }) {
  const furtherTempInfo = [
    { value: weather.main.temp_max + '°C', label: 'Höchst' },
    { value: weather.main.temp_min + '°C', label: 'Tiefst' },
    { value: weather.main.feels_like + '°C', label: 'Gefühlt' },
  ];
  const extraInfo = [
    { value: weather.wind.speed + ' km/h', label: 'Windgeschwindigkeit' },
    { value: weather.main.humidity + '%', label: 'Luftfeuchtigkeit' },
    { value: weather.main.pressure + ' h/Pa', label: 'Luftdruck' },
  ];
  return (
    <div className='WeatherContainer'>
      <WeatherInfo weather={weather} />
      <div className='extraInfoContainer'>
        <WeatherExtraInformation data={furtherTempInfo} />
        <WeatherExtraInformation data={extraInfo} />
      </div>
    </div>
  );
}
