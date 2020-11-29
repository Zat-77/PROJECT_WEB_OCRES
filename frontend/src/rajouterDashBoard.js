
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

import 'bootstrap/dist/css/bootstrap.min.css';
import {Card , Container, Row, Col} from 'react-bootstrap';



class RajouterDashBoard extends React.Component {
  render() {
    return (
      <Container className="Container1">

      <NavBar/>

      <Col >

        <Row xs={1} sm={1} md={4} lg={4}>

          
            <div className="Block1">
 
                <Plat/>
              
                <SimpleButton/>

            </div>
          
            <div className="Block2">
              
                <ProgressBar/>
              
                <SimpleButton/>

            </div>



            <div className="Block4">
 
                <Pas/>
              
                <SimpleButton/>

            </div>
          
        </Row>

      </Col>


      <Col>

        <Row xs={1} sm={1} lg={1}>

          
            <div className="Block5" >
 
                <List/>
              
                <SimpleButton/>

            </div>
          
       
        </Row>

      </Col>

      </Container>
    
  );
}
}
export default RajouterDashBoard ;