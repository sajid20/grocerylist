import React from 'react';

const ColorBox = ({ color }) => {
  return (
    <div style={{ 
      width: '2in',
      height: '2in',
      backgroundColor: color
    }}>
    </div>
  );
};

export default ColorBox;
