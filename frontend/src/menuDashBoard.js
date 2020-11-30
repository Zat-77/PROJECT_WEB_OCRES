
import React from 'react';
import './App.css';
import ProgressBar from './progressBar';
import SimpleLineGraphe from './simpleLineGraphe';
import NavBar from './navBar';
import List from './liste';
import Plat from './plat'
import Pas from './nombrePas'
import Meteo from './meteo'

import 'bootstrap/dist/css/bootstrap.min.css';
import {Card , Container, Row, Col} from 'react-bootstrap';


const titre= {
  color: 'white',
  textAlign: 'center',
  fontSize: 20
}
class MenuDashBoard extends React.Component {
  render() {
    return (
      <Container className="Container1">




      <Col >

        <Row xs={1} sm={1} md={3} lg={5}>

          
            <div className="Block1">
 
                <Plat/>
              
                  {/*<Button>New Quote</Button> */}

            </div>
          

          
            <div className="Block2">

                <div style={titre}>Votre objectif minceur du jour</div>
                <ProgressBar/>
              
                  {/*<Button>New Quote</Button> */}

            </div>
          
        

          
            <div className="Block3">
 
                <Meteo/>
              
                  {/*<Button>New Quote</Button> */}

            </div>


            <div className="Block4">
 
                <Pas/>
              
                  {/*<Button>New Quote</Button> */}

            </div>
          
        </Row>





      </Col>




      <Col>

        <Row xs={1} sm={1} lg={5}>

          
            <div className="Block5" >
 
                <List/>
              
                  {/*<Button>New Quote</Button> */}

            </div>
          




          
            <div className="Block6">
 
                <SimpleLineGraphe/>
              
                  {/*<Button>New Quote</Button> */}

            </div>
       
        </Row>

      </Col>




      </Container>
    
  );
}
}
export default MenuDashBoard ;