import React, { useState } from 'react';
import ColorBox from './ColorBox';

const SearchBar = () => {
  const [color, setColor] = useState('');

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Search color" onChange={handleChange} />
      <ColorBox color={color} />
    </div>
  );
};

export default SearchBar;
