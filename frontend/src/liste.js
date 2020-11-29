import React from "react";



const Liste = (props) => {

  const fillerStyles = {
    height: '100%',
    
    
    borderRadius: 'inherit',
    textAlign: 'left'
  }
  return (
    <div>
      <h2>Liste de course</h2>
      <div style={fillerStyles}>
      <ul>
        <li>2 Pommes</li>
        <li>1kg Patate</li>
        <li>1 concombre</li>
        <li>1 petite tomatee</li>
      </ul>
      </div>
    </div>
  );
};

export default Liste;