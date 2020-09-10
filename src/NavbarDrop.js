import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// from https://react-bootstrap.github.io/components/navbar/

const NavbarDrop = ({ isSignIn, onRouteChange, getResult }) => {
    return(
        <Navbar bg="light" expand="lg">
          <Navbar.Brand className="grow pointer"
            onClick={() => {onRouteChange('home')}}          
           >Dieta</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">            
              <NavDropdown title="Menu" id="basic-nav-dropdown"> 
                <NavDropdown.Item 
                onClick={() => {onRouteChange('calculation')}}
                >Calculation</NavDropdown.Item>
                <NavDropdown.Item 
                onClick={getResult}
                >Latest Result</NavDropdown.Item>
                <NavDropdown.Item 
                onClick={() => {onRouteChange('nextMove')}}>
                Next Move</NavDropdown.Item>
              </NavDropdown>
            </Nav>
              { 
                !isSignIn ?  
              <Nav > 
                <Nav.Link
                onClick={() => {onRouteChange('signin')}}
                >Sign In</Nav.Link>
                <Nav.Link
                onClick={() => {onRouteChange('signup')}}
                >Sign Up</Nav.Link>
              </Nav>
              :             
              <Nav.Link
              onClick={() => {onRouteChange('signin')}}
              >Sign Out</Nav.Link>             
              }          
          </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarDrop;