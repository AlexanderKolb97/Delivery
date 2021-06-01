import React from 'react';
import Nav from './Nav';
import logo from '../images/logo.png';
import '../styles/css/header.css';

function Header() {
  return (
    <header className="header">
        <a href="/"><img className="logo" src={logo} alt="logo"/></a>
        <Nav />
    </header>
  );
}

export default Header;
