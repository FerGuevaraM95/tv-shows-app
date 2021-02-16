import React from 'react'

import { Nav, NavItem } from './styles';

export const Navbar = () => {
  return (
    <Nav>
      <NavItem to="/popular" >Popular</NavItem>
      <NavItem to="/top-rated" >Más valorados</NavItem>
      <NavItem to="/airing-today" >Transmitiendo ahora</NavItem>
    </Nav>
  );
};
