import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import {useTranslation} from 'react-i18next';
// from https://react-bootstrap.github.io/components/navbar/
import './NavbarDrop.css';

const NavbarDrop = ({ isSignIn, onRouteChange, getResult }) => {


  const { t } = useTranslation();
  

  return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand className="grow pointer"
            onClick={() => {onRouteChange('home')}}          
          //  >Dieta</Navbar.Brand>
           >{t ("app_name")}</Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">            
              <NavDropdown title="Menu" id="collasible-nav-dropdown"> 
                <NavDropdown.Item 
                  href="#howItWorks" 
                  onClick={(event) => {onRouteChange('howItWorks'); event.preventDefault()}}
                  // onClick={() => {onRouteChange('howItWorks')}}                  
                  >原理</NavDropdown.Item>
                <NavDropdown.Item 
                  href="#calculation" 
                  onClick={(event) => {onRouteChange('calculation'); event.preventDefault()}}
                  >減脂開始</NavDropdown.Item>
                <NavDropdown.Item 
                  href="#nextMove" 
                  onClick={(event) => {onRouteChange('nextMove'); event.preventDefault()}}>
                  減脂期間</NavDropdown.Item>                
                <NavDropdown.Item 
                  href="#getResult"
                  onClick={(event) => {getResult(); event.preventDefault()}}
                  >上次計算結果</NavDropdown.Item>
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