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
  return (
    <div className='Navbar'>
      <div className='logo'>Cyngko WeatherCast</div>
      <div className='controlContainer'>
        <SearchBar
          mode={mode}
          query={query}
          onHandleSearch={onHandleSearch}
          onSearch={onSearch}
        />
        {mode ? (
          <Sun style={{ cursor: 'pointer' }} onClick={() => onModeChange()} />
        ) : (
          <Moon style={{ cursor: 'pointer' }} onClick={() => onModeChange()} />
        )}
      </div>
    </div>
  );
}
