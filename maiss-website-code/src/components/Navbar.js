import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

// Navbar component that will be used across all pages
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/maiss_logo.png" alt="MAISS Logo" />
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/events" className="nav-links">
              Events
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/board" className="nav-links">
              Board
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; 