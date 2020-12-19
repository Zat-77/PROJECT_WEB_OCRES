import React from "react";
import Figure from 'react-bootstrap/Figure'
import axios from 'axios';

const fillerStyles = {
  fontWeight: 'bold',
  
  fontSize: '30',
  borderRadius: 'inherit',
  textAlign: 'center'
}
const titre= {
  color: 'white',
  textAlign: 'center',
  fontSize: '20'
}

class Pas extends React.PureComponent {
  constructor (props){
    super(props);
		this.state = {
		  pas : "t", 
		};

  }
  async componentDidMount(){
		try{
      await axios.get('http://localhost:5000/all-pas')
            .then(response => {
              console.log(response)
                if (response.data) {
                    this.setState({
                        pas: response.data
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
    src="https://img.icons8.com/ios/452/running.png"
  />
  <Figure.Caption>
  </Figure.Caption>
</Figure>

    <div>
      <div style={titre}>Nombre de Pas</div>
      <div style={fillerStyles}>
         {this.state.pas}
      </div>
    </div>
    </div>
  );
  }
}




export default Pas;