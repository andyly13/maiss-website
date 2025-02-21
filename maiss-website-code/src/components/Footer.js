import { useState } from 'react';

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the newsletter signup
    console.log('Newsletter signup:', email);
    setEmail(''); // Clear the input after submission
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Social Media Links */}
        <div className="social-links">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a 
              href="https://www.instagram.com/maissuci/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a 
              href="https://www.linkedin.com/in/maissuci/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a 
              href="https://discord.com/invite/wbtsGUMdqY" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-discord"></i> Discord
            </a>
            <a 
              href="https://tiktok.com/@maiss_uoft" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-tiktok"></i> TikTok
            </a>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="newsletter-signup">
          <h3>Join Our Newsletter</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
      <p>
          &copy; {new Date().getFullYear()} MAISS UCI <br/>
          Developed by <a href="https://www.linkedin.com/in/andrewly13/" target="_blank" rel="noopener noreferrer">Andrew Ly</a> | 
          Designed by <a href="https://www.linkedin.com/in/malakshahin/" target="_blank" rel="noopener noreferrer">Malak Shahin </a> 
          and <a href="https://www.linkedin.com/in/laurennguyen25/" target="_blank" rel="noopener noreferrer">Lauren Nguyen</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;