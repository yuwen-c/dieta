import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// from https://react-bootstrap.github.io/components/navbar/

// *** would like to show user's name in nav, haven't set it done

const NavbarDrop = ({ isSign, name, onRouteChange }) => {
    return(
        <Navbar bg="light" expand="lg">
          <Navbar.Brand className="grow"
            onClick={() => {onRouteChange('home')}}          
           >Dieta</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">            
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
                {/* 這邊的Nav裡面加item-end, 大螢幕時不會往右移，小螢幕時，下拉選單裡面的sign會跑到右邊 */}
            </Nav>
              { 
                !isSign ?  
              <Nav > 
                <Nav.Link
                onClick={() => {onRouteChange('signin')}}
                >Sign In</Nav.Link>
                <Nav.Link
                onClick={() => {onRouteChange('signin')}}
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