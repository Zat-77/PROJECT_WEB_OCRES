import React from "react";
import Figure from 'react-bootstrap/Figure'


const Pas = (props) => {

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
    src="https://img.icons8.com/ios/452/running.png"
  />
  <Figure.Caption>
  </Figure.Caption>
</Figure>

    <div>
      <div style={titre}>Nombre de Pas</div>
      <div style={fillerStyles}>
        <a>14023 pas</a>
      </div>
    </div>
    </div>
  );
};

export default Pas;