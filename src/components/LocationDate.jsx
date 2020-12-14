import React from 'react';

export default function LocationDate({ location }) {
  const dateBuilder = (d) => {
    let months = [
      'Januar',
      'Februar',
      'März',
      'April',
      'Mai',
      'Juni',
      'Juli',
      'August',
      'September',
      'Oktober',
      'November',
      'Dezember',
    ];
    let days = [
      'Sonntag',
      'Montag',
      'Dienstag',
      'Mittwoch',
      'Donnerstag',
      'Freitag',
      'Samstag',
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
  };
  return (
    <div className='LocationDateContainer'>
      <div className='location'>{location}</div>
      <div className='date'>{dateBuilder(new Date())}</div>
    </div>
  );
}
