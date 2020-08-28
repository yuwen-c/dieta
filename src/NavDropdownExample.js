import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

const NavDropdownExample = ({ isSign, email, onRouteChange }) => {
  // if(!isSign){
  //   return (
  //     <Nav variant="pills"  >
  //       <NavDropdown title="Menu" id="nav-dropdown">
  //         <NavDropdown.Item 
  //         onClick={() => {onRouteChange('weight')}}
  //         >重新計算</NavDropdown.Item>
  //         <NavDropdown.Item >查看上次計算結果</NavDropdown.Item>
  //         <NavDropdown.Item >決定下週方向</NavDropdown.Item>
  //       </NavDropdown>

  //       <Nav.Item>
  //         <Nav.Link 
  //         title="Item"
  //         onClick={() => {onRouteChange('signin')}}>
  //           Sign In
  //         </Nav.Link>
  //       </Nav.Item>

  //       <Nav.Item>
  //         <Nav.Link 
  //         onClick={() => {onRouteChange('signup')}}>
  //           Sign Up
  //         </Nav.Link>
  //       </Nav.Item>
  //     </Nav>
  //   )
  //   }
  //   else{
  //     return(
  //       <Nav variant="pills"  >
  //         <NavDropdown title="Menu" id="nav-dropdown">
  //           <NavDropdown.Item 
  //           onClick={() => {onRouteChange('weight')}}
  //           >重新計算</NavDropdown.Item>
  //           <NavDropdown.Item >查看上次計算結果</NavDropdown.Item>
  //           <NavDropdown.Item >決定下週方向</NavDropdown.Item>
  //         </NavDropdown>

  //         <Nav.Item>
  //         <Nav.Link >
  //           Hi! {email}
  //           </Nav.Link>
  //         </Nav.Item>

  //         <Nav.Item>
  //           <Nav.Link 
  //           onClick={() => {onRouteChange('signin')}}>
  //             Sign Out
  //           </Nav.Link>
  //         </Nav.Item>
  //       </Nav>
  //     )
  //   }
  }

export default NavDropdownExample;