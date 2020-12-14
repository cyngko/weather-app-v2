import React from 'react';

export default function WeatherExtraInformation({ data }) {
  return (
    <div className='WeatherExtraInformationContainer'>
      <div className='extraInfo'>
        <div className='extraInfoValue'>{data[0].value}</div>
        <div className='extraInfoLabel'>{data[0].label}</div>
      </div>
      <div className='extraInfo'>
        <div className='extraInfoValue'>{data[1].value}</div>
        <div className='extraInfoLabel'>{data[1].label}</div>
      </div>
      <div className='extraInfo'>
        <div className='extraInfoValue'>{data[2].value}</div>
        <div className='extraInfoLabel'>{data[2].label}</div>
      </div>
    </div>
  );
}
