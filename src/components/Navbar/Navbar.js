import React from 'react'
import {Link} from "react-router-dom";
import './Navbar.css'

import logo from '../../assets/logo.png'

function Navbar() {
  return (
  <nav className="app__navbar" role="navigation">
    <div className="app__navbar-title">
      <img src={logo} alt="app logo" />
      <span>living faith ministries</span>
    </div>
    <div className="app__navbar-links">
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/watch">Watch</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/directions">Directions</Link></li>
        <li><Link to="/pastor">Pastor</Link></li>
      </ul>
    </div>
  </nav>


)
}

export default Navbar
