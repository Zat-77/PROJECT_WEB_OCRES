import React from "react";
import Figure from 'react-bootstrap/Figure'

import axios from 'axios';

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
  class Plat extends React.PureComponent {
    constructor (props){
      super(props);
      this.state = {
        plat : "Pâte aux champignons", 
      };
  
    }
    async componentDidMount(){
      try{
        await axios.get('http://localhost:3000/pas')
              .then(response => {
                  if (response.data.length >0) {
                      this.setState({
                          pas: "18888"
                      })
                  }
              }).catch( err => {
                  console.log(err)
              })
            }
            catch (err){
              console.log(err)
            }
          }
    
    render (){  
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
        <a>{this.state.plat}</a>
      </div>
    </div>
    </div>
  );
}
  }

export default Plat;