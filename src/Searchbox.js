import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='S1'
        type='search'
        placeholder='Search robots'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;