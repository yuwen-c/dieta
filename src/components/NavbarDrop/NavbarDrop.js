import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
// from https://react-bootstrap.github.io/components/navbar/

const NavbarDrop = ({ isSignIn, onRouteChange, getResult }) => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand className="grow pointer"
            onClick={() => {onRouteChange('home')}}          
           >Dieta</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">            
              <NavDropdown title="Menu" id="collasible-nav-dropdown"> 
                <NavDropdown.Item 
                  href="#howItWorks" 
                  onClick={(event) => {onRouteChange('howItWorks'); event.preventDefault()}}
                  // onClick={() => {onRouteChange('howItWorks')}}                  
                  >How it works</NavDropdown.Item>
                <NavDropdown.Item 
                  href="#calculation" 
                  onClick={(event) => {onRouteChange('calculation'); event.preventDefault()}}
                  >Calculation</NavDropdown.Item>
                <NavDropdown.Item 
                  href="#getResult"
                  onClick={(event) => {getResult(); event.preventDefault()}}
                  >Latest Result</NavDropdown.Item>
                <NavDropdown.Item 
                  href="#nextMove" 
                  onClick={(event) => {onRouteChange('nextMove'); event.preventDefault()}}>
                  Next Move</NavDropdown.Item>
                </NavDropdown>
            </Nav>
              { 
                !isSignIn ?  
              <Nav > 
                <Nav.Link
                href="#signin"
                onClick={(event) => {onRouteChange('signin'); event.preventDefault()}}
                >Sign In</Nav.Link>
                <Nav.Link
                href="#signup"                
                onClick={(event) => {onRouteChange('signup'); event.preventDefault()}}
                >Sign Up</Nav.Link>
              </Nav>
              :  
              <Nav>
                <Nav.Link
                href="signin"
                onClick={(event) => {onRouteChange('signin'); event.preventDefault()}}
                >Sign Out</Nav.Link>                
              </Nav>                      
              }          
          </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarDrop;