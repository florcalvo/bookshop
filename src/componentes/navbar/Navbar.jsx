import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

function NavBar() {
  return (
    <nav>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/tienda"}>Store</NavLink>
      <NavLink to={"/Cart"}>Cart</NavLink>
    </nav>
  );
}

export default NavBar;