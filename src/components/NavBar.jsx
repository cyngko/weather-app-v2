import React from 'react';
import { Sun, Moon } from 'react-feather';
import SearchBar from './SearchBar';

export default function Navbar({
  mode,
  onModeChange,
  query,
  onHandleSearch,
  onSearch,
}) {
  const test = true;
  return (
    <div className='Navbar'>
      <div className='logo'>Cyngko WeatherCast</div>
      <SearchBar
        query={query}
        onHandleSearch={onHandleSearch}
        onSearch={onSearch}
      />
      {test ? <Sun /> : <Moon />}
    </div>
  );
}
