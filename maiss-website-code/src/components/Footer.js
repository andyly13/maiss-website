import React from 'react';
import '../App.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/maissuci/" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
              <span>@maissuci</span>
            </a>
            <a href="https://www.linkedin.com/company/maissuci/" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
              <span>UCI MAISS</span>
            </a>
            <a href="mailto:maiss.uci@gmail.com" className="social-icon">
              <i className="fas fa-envelope"></i>
              <span>maiss.uci@gmail.com</span>
            </a>
            <a href="https://discord.com/invite/wbtsGUMdqY" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-discord"></i>
              <span>Join our Discord</span>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <div className="quick-links">
            <a href="/about">About Us</a>
            <a href="/events">Events</a>
            <a href="/board">Board</a>
            <a href="/contact">Contact</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Location</h3>
          <p>University of California, Irvine</p>
          <p>Paul Merage School of Business</p>
          <p>Irvine, CA 92697</p>
        </div>
      </div>
      
      <div className="footer-bottom">
      <p>
          &copy; {new Date().getFullYear()} MAISS UCI <br/>
          Developed by <a href="https://www.linkedin.com/in/andrewly13/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Andrew Ly</a> | 
          Designed by <a href="https://www.linkedin.com/in/malakshahin/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Malak Shahin</a> {' '}
          and <a href="https://www.linkedin.com/in/laurennguyen25/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Lauren Nguyen</a>
      </p>
      </div>
    </footer>
  );
}

export default Footer;