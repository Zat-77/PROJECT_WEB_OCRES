import React from "react";
import Figure from 'react-bootstrap/Figure'


const Liste = (props) => {

  const fillerStyles = {
    height: '100%',
    
    
    borderRadius: 'inherit',
    textAlign: 'left'
  }
  return (
    <div>
    <Figure>
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src="https://cdn0.iconfinder.com/data/icons/minimal-set-seven/32/minimal-49-512.png"
  />
  <Figure.Caption>
  </Figure.Caption>
</Figure>

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
    </div>
  );
};

export default Liste;