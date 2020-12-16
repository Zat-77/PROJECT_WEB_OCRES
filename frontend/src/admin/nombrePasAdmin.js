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

    this.changePas= this.changePas.bind(this);
    this.envoiePas= this.envoiePas.bind(this);


		this.state = {
		  pas : "049", 
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
  changePas(e){
      this.setState({
        pas: e.target.value
      });
  }
  envoiePas(e) {
    e.preventDefault();

    const pas1 = {
      pas: this.state.pas,
    }

    console.log(pas1);

    axios.post('http://localhost:5000/change-pas', pas1)
        .then(res => console.log(res.data));

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
<Form onSubmit={this.envoiePas}>
                    <div className="cont2">
                        <p>Distance à réaliser:<input type="text" className="input" name="distance" className="entree" value={this.state.pas} onChange={this.changePas}/></p>
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
  );
  }
}

export default PasAdmin;