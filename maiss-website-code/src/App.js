import './App.css';
import React from 'react';

// Import necessary components from react-router-dom for navigation
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import our page components
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Board from './pages/Board';
import Contact from './pages/Contact';

// Import our reusable components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Main App component
function App() {
  return (
    // Router component wraps our entire app to enable routing
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Each Route maps a URL path to a component */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/board" element={<Board />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      {/* Footer will appear on all pages */}
      <Footer />
    </Router>
  );
}

export default App; 