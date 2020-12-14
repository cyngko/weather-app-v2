import React from 'react';
import { Search } from 'react-feather';

export default function SearchBar({ onHandleSearch, query, onSearch, mode }) {
  const darkMode = {
    color: '#eee',
  };
  return (
    <div className='SearchBar'>
      <div className='search-box'>
        <Search className='search-icon' />
        <input
          style={mode ? null : darkMode}
          type='text'
          className='search-bar'
          placeholder='Suche nach Ort'
          onChange={(e) => onHandleSearch(e)}
          value={query}
          onKeyPress={onSearch}
        />
      </div>
    </div>
  );
}
