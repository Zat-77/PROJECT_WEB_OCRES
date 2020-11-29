import React from "react";
import Figure from 'react-bootstrap/Figure';



const Meteo = (props) => {

  const fillerStyles = {
    height: '100%',
    
    
    borderRadius: 'inherit',
    textAlign: 'center'
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
    width={140}
    height={150}
    alt="171x180"
    src="https://image.flaticon.com/icons/png/512/45/45518.png"
  />
  <Figure.Caption>
  </Figure.Caption>
</Figure>

    <div>
      <div style={titre}>Lundi</div>
      <div style={fillerStyles}>
        <a>18° 12°</a>
      </div>
    </div>
    </div>
  );
};

export default Meteo;