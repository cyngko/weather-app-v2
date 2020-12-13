import React, { useState } from 'react';
import './App.css';
import Navbar from './components/NavBar';

const api = {
  key: 'c2d1918f1dfd1325c2ac8ef502498937',
  base: 'https://api.openweathermap.org/data/2.5/',
};

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === 'Enter') {
      fetch(
        `${api.base}weather?q=${query}&units=metric&APPID=${api.key}&lang=de`
      )
        .then((res) => res.json())
        .then((data) => {
          setWeather(data);
          setQuery('');
          console.log(weather);
        });
    }
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className='App'>
      <header>
        <Navbar query={query} onHandleSearch={handleSearch} onSearch={search} />
      </header>
    </div>
  );
}

export default App;
