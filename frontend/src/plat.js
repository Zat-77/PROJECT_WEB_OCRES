import React from "react";
import Figure from 'react-bootstrap/Figure'


const Plat = (props) => {

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
    src="https://icons-for-free.com/iconfiles/png/512/chicken-1320568573925239524.png"
  />
  <Figure.Caption>
  </Figure.Caption>
</Figure>

    <div>
      <div style={titre}>Menu du jour</div>
      <div style={fillerStyles}>
        <a>Pâte au champignons</a>
      </div>
    </div>
    </div>
  );
};

export default Plat;