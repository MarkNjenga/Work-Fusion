import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faCogs } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">WorkFusion</div>
      <ul className="navbar__list">
        <li className="navbar__item">
          <a href="/" className="navbar__link">
            <FontAwesomeIcon icon={faHome} className="navbar__icon" />
            Home
          </a>
        </li>
        <li className="navbar__item">
          <a href="/about" className="navbar__link">
            <FontAwesomeIcon icon={faUser} className="navbar__icon" />
            About
          </a>
        </li>
        <li className="navbar__item">
          <a href="/contact" className="navbar__link">
            <FontAwesomeIcon icon={faEnvelope} className="navbar__icon" />
            Contact
          </a>
        </li>
        <li className="navbar__item">
          <a href="/control" className="navbar__link">
            <FontAwesomeIcon icon={faCogs} className="navbar__icon" />
            Control
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;



