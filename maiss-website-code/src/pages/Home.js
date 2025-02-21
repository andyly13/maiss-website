import React from 'react';
import '../App.css';

function Home() {
  const handleJoinClick = () => {
    // Replace this URL with your actual Google Form URL
    window.open('https://forms.google.com/your-form-url', '_blank');
  };

  return (
    <div className="home-container">
      {/* First Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>MAISS</h1>
          <h2>Management Information Student Society at The University of California, Irvine</h2>
        </div>
      </section>

      {/* Second Section */}
      <section className="full-image-section">
        <img 
          src="/IMG_3862.JPG"
          alt="MAISS featured" 
          className="full-screen-image"
        />
      </section>

      {/* Third Section */}
      <section className="info-section">
        <div className="info-card">
          <img src="/about_us.JPG" alt="About Us" />
          <h3>About Us</h3>
          <p>Established in 2010 by BIM students, the Management Information Student Society (MAISS) fosters a supportive
             community for those passionate about business and technology. MAISS enhances professional, academic, and social
              growth for students. We are open to all majors and anyone interested in the business-tech field!</p>
        </div>

        <div className="info-card">
          <img src="/board.JPG" alt="Board" />
          <h3>Board</h3>
          <p>Our board is dedicated to exploring the intersection of business and technology while bringing valuable insights 
            from their experiences in MAISS, as well as related internships and careers. We are passionate about giving back 
            and strive to foster professional growth and social connections within the UCI community.</p>
        </div>

        <div className="info-card">
          <img src="/events.JPG" alt="Events" />
          <h3>Events</h3>
          <p>MAISS helps college students grow in business and tech through mentorship, internships, and hands-on workshops in Tableau, 
            interview prep, and more. Gain career insights from industry professionals and connect with peers through trivia nights, 
            game nights, and other community events!</p>
        </div>
      </section>
    </div>
  );
}

export default Home; 