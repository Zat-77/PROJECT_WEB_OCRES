/*
npm install
npm install storybook
npm install recharts
npm install react-bootstrap bootstrap
npm install react-router-dom

*/
import React from 'react';
import Figure from 'react-bootstrap/Figure';

import MenuDashBoard from './menuDashBoard';
import RajouterDashBoard from './rajouterDashBoard';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (

      <Router>
        <div>
        <Navbar>
              <Figure>
                <Figure.Image
                  width={140}
                  height={150}
                  alt="171x180"
                  src="https://image.flaticon.com/icons/png/512/31/31714.png"
                />
              <Figure.Caption>
              </Figure.Caption>
              </Figure>
          <Navbar.Text>The Leaf</Navbar.Text>
            <div className="links">
              <Link to="/menuDashBoard">Votre DashBoard</Link>
              <Link to="/rajouterDashBoard"> Ajouter</Link>
            </div>

            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Figure>
                <Figure.Image
                  width={140}
                  height={150}
                  alt="171x180"
                  src="https://pbs.twimg.com/profile_images/1314237400751788032/ZrKDX1b3_400x400.jpg"
                />
              <Figure.Caption>
              </Figure.Caption>
              </Figure>
            </Navbar.Text>
            </Navbar.Collapse>

        </Navbar>
      

        <Switch>
          <Route path="/menuDashBoard">
            <MenuDashBoard />
          </Route>
          <Route path="/rajouterDashBoard">
            <RajouterDashBoard />
          </Route>
        </Switch>

        </div>
      </Router>  
     

  );
}
export default App; 