import React from "react";
import Figure from 'react-bootstrap/Figure'


const Liste = (props) => {

  const fillerStyles = {
    height: '100%',
    
    
    borderRadius: 'inherit',
    textAlign: 'left'
  }
  const titre= {
    color: 'white',
    textAlign: 'center',
    fontSize: 20
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
      <div style={titre}>Liste des courses</div>
      <div style={fillerStyles}>
      <ul>
        <li>2 Pommes</li>
        <li>1kg Patates</li>
        <li>1 concombre</li>
        <li>1 petite tomate</li>
      </ul>
      </div>
    </div>
    </div>
  );
};

export default Liste;