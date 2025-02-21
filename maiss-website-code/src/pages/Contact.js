import React from 'react';
import '../App.css';

const socialLinks = [
  {
    platform: 'Instagram',
    link: 'https://www.instagram.com/maissuci/',
    icon: 'fab fa-instagram',
    handle: '@maissuci'
  },
  {
    platform: 'Email',
    link: 'mailto:maiss.uci@gmail.com',
    icon: 'fas fa-envelope',
    handle: 'maiss.uci@gmail.com'
  },
  {
    platform: 'LinkedIn',
    link: 'https://www.linkedin.com/company/maissuci/',
    icon: 'fab fa-linkedin',
    handle: 'UCI MAISS'
  },
  {
    platform: 'Discord',
    link: 'https://discord.com/invite/wbtsGUMdqY',
    icon: 'fab fa-discord',
    handle: 'MAISS Discord'
  }
];

const faqs = [
  {
    question: 'How can I join MAISS?',
    answer: 'You can join MAISS by attending our general meetings and events. Sign up to be a paid member for exclusive resources!'
  },
  {
    question: 'Do I need to be a Business Information Management major to join?',
    answer: 'No! MAISS welcomes students from all majors who are interested in the intersection of business and technology.'
  },
  {
    question: 'When are your general meetings?',
    answer: 'We host weekly general meetings on Wednesdays from 6:00 PM - 7:00 PM during the academic quarter. Follow our social media for specific dates and times!'
  },
  {
    question: 'How can I become a board member?',
    answer: 'Board applications open during Spring quarter. Active membership and participation in MAISS events are highly encouraged.'
  }
  // Add more FAQs as needed
];

function Contact() {
  return (
    <div className="contact-container">
      {/* Hero Section */}
      <section className="contact-hero">
        <h1>CONTACT US</h1>
        <p>Do you have a question, comment, or feedback for us? Want to collaborate with MAISS? Send us an email!</p>
      </section>

      {/* Social Links Section */}
      <section className="contact-social">
        <div className="social-links-grid">
          {socialLinks.map((platform, index) => (
            <a 
              key={index} 
              href={platform.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link-card"
            >
              <i className={platform.icon}></i>
              <h3>{platform.platform}</h3>
              <p>{platform.handle}</p>
            </a>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-card">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Contact; 