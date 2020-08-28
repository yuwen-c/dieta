import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// from https://react-bootstrap.github.io/components/navbar/

const NavbarDrop = ({ isSign, email, onRouteChange }) => {
    return(
        <Navbar bg="light" expand="lg">
          <Navbar.Brand >Dieta</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link
              onClick={() => {onRouteChange('home')}}
              >Home</Nav.Link>
              <Nav.Link
              onClick={() => {onRouteChange('signin')}}
              >Sign In</Nav.Link>
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item 
                onClick={() => {onRouteChange('weight')}}
                >Calculation</NavDropdown.Item>
                <NavDropdown.Item 
                onClick={() => {onRouteChange('nutrition')}}
                >Latest Result</NavDropdown.Item>
                <NavDropdown.Item 
                onClick={() => {onRouteChange('rate')}}>
                Next Move</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarDrop;