import React from "react";
import Figure from 'react-bootstrap/Figure'
import axios from 'axios';
import { Button, Form, } from 'react-bootstrap';

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
  class ListeAdmin extends React.PureComponent {
    constructor (props){
      super(props);
      this.state = {
        liste1 : "2 Pommes",
        liste2 : "1kg Patate",
        liste3 : "1 concombre",
        liste4 : "1 petite tomate", 
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
        <li>{this.state.liste1}</li>
        <li>{this.state.liste2}</li>
        <li>{this.state.liste3}</li>
        <li>{this.state.liste4}</li>
      </ul>
      </div>
    
    <Form>
                    <input type="text"  placeholder="Ingredient" />
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
    </div>
  );
}
  }

export default ListeAdmin;