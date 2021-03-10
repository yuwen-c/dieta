import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
// from https://react-bootstrap.github.io/components/navbar/
import { useTranslation } from 'react-i18next';
import './NavbarDrop.css';

const NavbarDrop = ({ isSignIn, onRouteChange}) => {

  const { t, i18n } = useTranslation();
  const changeLan = (language) => {
    i18n.changeLanguage(language);
  }

  return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="navbarId">
          <Navbar.Brand className="grow pointer"
            onClick={() => {onRouteChange('home')}}          
           >Dieta</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="mr-auto">            
              <NavDropdown title={t('navbar.menu')} id="collasible-nav-dropdown"> 
                <NavDropdown.Item 
                  href="#howItWorks" 
                  onClick={(event) => {onRouteChange('howItWorks'); event.preventDefault()}}
                  >{t('navbar.theory')}</NavDropdown.Item>
                <NavDropdown.Item 
                  href="#guide" 
                  onClick={(event) => {onRouteChange('guide'); event.preventDefault()}}
                  >{t('navbar.guide')}</NavDropdown.Item>
                <NavDropdown.Item 
                  href="#calculation" 
                  onClick={(event) => {onRouteChange('calculation'); event.preventDefault()}}
                  >{t('navbar.start_diet')}</NavDropdown.Item>
                <NavDropdown.Item 
                  href="#nextMove" 
                  onClick={(event) => {onRouteChange('nextMove'); event.preventDefault()}}>
                  {t('navbar.during_diet')}</NavDropdown.Item>                
                <NavDropdown.Item 
                  href="#getResult"
                  onClick={(event) => {onRouteChange('result'); event.preventDefault()}}
                  >{t('navbar.latest_result')}</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav> 

              <NavDropdown title={t('navbar.language')} id="collasible-nav-dropdown"> 
                <NavDropdown.Item 
                  href="#lngZH" 
                  onClick={(event) => {changeLan("zh"); event.preventDefault()}}
                  >{t('navbar.chinese')}</NavDropdown.Item>
                <NavDropdown.Item 
                  href="#lngEN" 
                  onClick={(event) => {changeLan("en"); event.preventDefault()}}
                  >{t('navbar.english')}</NavDropdown.Item>
              </NavDropdown>   


              { 
                !isSignIn ?  
                <Nav> 
                  <Nav.Link
                  href="#signin"
                  onClick={(event) => {onRouteChange('signin'); event.preventDefault()}}
                  >{t('navbar.sign_in')}</Nav.Link>
                  <Nav.Link
                  href="#signup"                
                  onClick={(event) => {onRouteChange('signup'); event.preventDefault()}}
                  >{t('navbar.sign_up')}</Nav.Link>
                </Nav>
              :  
                <Nav>
                  <Nav.Link
                  href="signin"
                  onClick={(event) => {onRouteChange('signin'); event.preventDefault()}}
                  >{t('navbar.sign_out')}</Nav.Link>                
                </Nav>   

              }   

            </Nav>       
          </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarDrop;