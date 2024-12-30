// Import Link component for navigation without page refresh
import { Link } from 'react-router-dom';

// Navbar component that will be used across all pages
function Navbar() {
  return (
    <nav>
      {/* Using Link instead of <a> tags prevents page reload */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/board">Board</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar; 