import React from 'react';

import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarDrop = ({ isSign, email, onRouteChange }) => {
    return(
        <Navbar bg="light" expand="lg">
          <Navbar.Brand >Dieta</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item >Action</NavDropdown.Item>
                <NavDropdown.Item >Another action</NavDropdown.Item>
                <NavDropdown.Item >Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarDrop;