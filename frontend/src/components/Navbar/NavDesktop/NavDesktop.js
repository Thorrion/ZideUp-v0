import React from 'react';
import './NavDesktop.scss'
import Logo from '../pictures/Zideuplogoblanc.png';
import DrawerToggleButton from '../DrawerToggleButton/DrawerToggleButton';

// COMPUTER NAVBAR 

const NavDesktop = props => (

  <div className="Navbar">
  
    <div className="Logo">
      <a href='/#home'>
      <img src={Logo} className="Logo_ZideUp" alt="Logo ZideUp"/>
      </a>
    </div>
    <div className="Navbar-toggle-button">
      <DrawerToggleButton click={props.drawerClickHandler}/>
    </div>
  </div>

)

export default NavDesktop;

