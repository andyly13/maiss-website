import React from 'react';
import '../App.css';
import CompanyLogos from '../components/CompanyLogos';

function About() {
  return (
    <div className="about-container">
      {/* First Section - Hero */}
      <section className="about-hero-section">
        <h1 className="about-title">ABOUT US</h1>
        <img src="/about_us_feature.jpg" alt="MAISS Team" className="about-hero-image" />
      </section>

      {/* Second Section - Alternating Content */}
      <section className="about-content-section">
        <div className="content-row">
          <div className="content-text">
            <h2>Our Mission</h2>
            <p>MAISS strives to bridge the gap between business and technology, providing students with opportunities for 
              professional growth and community building.</p>
          </div>
          <div className="content-image">
            <img src="/about_2.jpg" alt="MAISS Mission" />
          </div>
        </div>

        <div className="content-row reverse">
          <div className="content-text">
            <h2>Professional</h2>
            <p>MAISS helps college students develop leadership, technical, and interpersonal skills in business and tech 
              through mentorship, internships, and hands-on workshops. Our career panels connect students with industry 
              professionals, providing valuable insights and networking opportunities to support career growth.</p>
          </div>
          <div className="content-image">
            <img src="/maiss_feature.jpg" alt="MAISS Community" />
          </div>
        </div>

        <div className="content-row">
          <div className="content-text">
            <h2>Social</h2>
            <p>Beyond professional development, MAISS fosters a strong community through engaging social events like trivia nights, 
              game nights, and retreats. These events create opportunities to build life-long connections, collaborate with peers, and 
              enjoy maximize your college experience!</p>
          </div>
          <div className="content-image">
            <img src="/social-about.jpg" alt="MAISS Impact" />
          </div>
        </div>
      </section>

      {/* Third Section - Experience Logos */}
      <section className="experience-section">
        <h2>Our Experience</h2>
        <CompanyLogos />
      </section>
    </div>
  );
}

export default About; 