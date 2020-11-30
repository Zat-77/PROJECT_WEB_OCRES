/*
npm install
npm install storybook
npm install recharts
npm install react-bootstrap bootstrap
npm install react-router-dom

*/
import React from 'react';

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
          <Navbar.Text>The Leaf</Navbar.Text>
            <div className="links">
              <Link to="/menuDashBoard">Votre DashBoard</Link>
              <Link to="/rajouterDashBoard"> Ajouter</Link>
            </div>

            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Adrien Kourganoff
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