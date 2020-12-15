
import React from 'react';
import './App.css';
import ProgressBar from './progressBar';
import SimpleLineGraphe from './simpleLineGraphe';
import NavBar from './navBar';
import List from './liste';
import Plat from './plat';
import Pas from './nombrePas';
import Meteo from './meteo';
import SimpleButton from './button';
import PasAdmin from './admin/nombrePasAdmin.js';
import PlatAdmin from './admin/platAdmin.js';
import ListAdmin from './admin/listeAdmin.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card , Container, Row, Col} from 'react-bootstrap';


const titre= {
  color: 'white',
  textAlign: 'center', 
  fontSize: 20
}
class RajouterDashBoard extends React.Component {
  render() {
    return (
      <Container className="Container1">



      <Col >

        <Row xs={1} sm={1} md={4} lg={4}>

          
            <div className="Block1">
 
                <PlatAdmin/>
              
                

            </div>
          
            <div className="Block2">
            <div style={titre}>Votre objectif minceur du jour</div>
                <ProgressBar/>
              
                <SimpleButton/>

            </div>



            <div className="Block4">
 
                <PasAdmin/>
              
                

            </div>
          
        </Row>

      </Col>


      <Col>

        <Row xs={1} sm={1} lg={1}>

          
            <div className="Block5" >
 
                <ListAdmin/>
              
               

            </div>
          
       
        </Row>

      </Col>

      </Container>
    
  );
}
}
export default RajouterDashBoard ;