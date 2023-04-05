import React from "react";
import { Navbar, NavbarBrand } from 'reactstrap';


export default function TopBar() {
  return (
    <Navbar 
    color="info"
    dark
  >
    <NavbarBrand href="/" className="mx-auto display-2" style={{ fontFamily: 'Georgia', fontSize: '65px'}} >
      Mindful
    </NavbarBrand>
  </Navbar>
  );
}
