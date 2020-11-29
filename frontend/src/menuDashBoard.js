
import React from 'react';
import './App.css';
import ProgressBar from './progressBar';
import SimpleLineGraphe from './simpleLineGraphe';
import NavBar from './navBar';
import List from './liste';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Card , Container, Row, Col} from 'react-bootstrap';



class MenuDashBoard extends React.Component {
  render() {
    return (
      <Container className="Container1">

      <NavBar/>



      <Col >

        <Row lg={5}>

          
            <div className="Block1">
 
                <ProgressBar/>
              
                  {/*<Button>New Quote</Button> */}

            </div>
          

          
            <div className="Block2">
 
                <ProgressBar/>
              
                  {/*<Button>New Quote</Button> */}

            </div>
          
        

          
            <div className="Block3">
 
                <ProgressBar/>
              
                  {/*<Button>New Quote</Button> */}

            </div>


            <div className="Block4">
 
                <ProgressBar/>
              
                  {/*<Button>New Quote</Button> */}

            </div>
          
        </Row>





      </Col>




      <Col>

        <Row lg={5}>

          
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