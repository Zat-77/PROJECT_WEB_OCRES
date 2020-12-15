import React from "react";
import Figure from 'react-bootstrap/Figure'
import axios from 'axios';
import { Button, Form, } from 'react-bootstrap';


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
  class PlatAdmin extends React.PureComponent {
    constructor (props){
      super(props);
      this.state = {
        plat : "Pâte aux champignons", 
      };
  
    }
    async componentDidMount(){
      try{
        await axios.get('http://localhost:3002/pas')
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

<Form>
                    <input type="text"  placeholder="Plat du jour" />
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

export default PlatAdmin;