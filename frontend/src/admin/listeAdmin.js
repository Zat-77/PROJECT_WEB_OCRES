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
      this.changePas= this.changePas.bind(this);
      this.envoiePas= this.envoiePas.bind(this);
      this.state = {
        liste1 : "-",
        liste2 : "-",
        liste3 : "-",
        liste4 : "-", 
      };
      
    }
    async componentDidMount(){
      try{
        await axios.get('http://localhost:5000/liste/premier')
              .then(response => {
                  if (response.data.length >0) {
                      this.setState({
                        liste1: response.data
                      })
                  }
              }).catch( err => {
                  console.log(err)
              })
            
            
            await axios.get('http://localhost:5000/liste/deuxieme')
            .then(response => {
              
                if (response.data.length >0) {
                    this.setState({
                      liste2: response.data
                    })
                }
            }).catch( err => {
                console.log(err)
            })
          
          
          await axios.get('http://localhost:5000/liste/troisieme')
              .then(response => {
                console.log("BLa")
                  if (response.data.length >0) {
                      this.setState({
                        liste3: response.data
                      })
                  }
              }).catch( err => {
                  console.log(err)
              })
            
            
            await axios.get('http://localhost:5000/liste/quartieme')
              .then(response => {
                  if (response.data.length >0) {
                      this.setState({
                        liste4: response.data
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
    




          changePas(e){
            this.setState({
              ingredient: e.target.value
            });
        }
        envoiePas(e) {
          e.preventDefault();
      
          const ingredient1 = {
            ingredient1: this.state.ingredient,
          }
      
          console.log(ingredient1);
      
          axios.post('http://localhost:5000/liste/add-ingredient', ingredient1)
              .then(res => console.log(res.data));
      
      }
       delete(){
      try{
       axios.get('http://localhost:5000/liste/delete')
              .then(response => {
                  if (response.data.length >0) {
                      this.setState({
                        liste1: response.data
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
    
      <Form onSubmit={this.envoiePas}>
                    <div className="cont2">
                        <p>Nombre de Pas:<input type="text" className="input" name="nbrpas" className="entree" value={this.state.pas} onChange={this.changePas}/></p>
                    </div>
                    <div className="cont2">
                       <p><input type="submit" name="objectifNatation" value="Modifier" className="button"/></p>
                   </div>                         
                    {/* <input type="text"  placeholder="Nombre de pas" name="nombre" />
                    <div>
                    { <Button variant="danger" type="button">
                        Supprimer
                    </Button>
                    <Button variant="primary" type="button">
                        Créer
                    </Button> }
                    </div> */}
  </Form>
   
                </div>
                <Form onSubmit={this.delete}>
                    
                    <div className="cont2">
                       <p><input type="submit" name="objectifNatation" value="Supprimer" className="button" color="red"/></p>
                   </div>                         
                    {/* <input type="text"  placeholder="Nombre de pas" name="nombre" />
                    <div>
                    { <Button variant="danger" type="button">
                        Supprimer
                    </Button>
                    <Button variant="primary" type="button">
                        Créer
                    </Button> }
                    </div> */}
  </Form>
    </div>
  );
}
  }

export default ListeAdmin;