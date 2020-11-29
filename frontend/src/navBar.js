import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'react-bootstrap';




class NavBar extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Text>Navbar with text</Navbar.Text>
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: Adrien Kourganoff
          </Navbar.Text>
          </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavBar ;
