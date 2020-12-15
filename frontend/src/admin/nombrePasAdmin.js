import React from "react";
import Figure from 'react-bootstrap/Figure'
import axios from 'axios';
import { Button, Form, } from 'react-bootstrap';

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

class PasAdmin extends React.PureComponent {
  constructor (props){
    super(props);
		this.state = {
		  pas : "049", 
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
    src="https://img.icons8.com/ios/452/running.png"
  />
  <Figure.Caption>
  </Figure.Caption>
</Figure>
<Form>
                    <input type="text"  placeholder="Nombre de pas" />
                    <div>
                    <Button variant="danger" type="button">
                        Supprimer
                    </Button>
                    <Button variant="primary" type="button">
                        Créer
                    </Button>
                    </div>
                </Form>
    
    </div>
  );
  }
}

export default PasAdmin;