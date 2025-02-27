import React from 'react';
import '../App.css';

const events = [
  {
    title: "Welcome Back Social",
    description: "Gear up for Jeopardy Night! Put your brains 🧠 to the test to see how much you know about business, tech, UCI, and more! Come socialize with our board members and meet new friends. Join us for an evening of fun and friendly competition! See you there!🤩",
    image: "/event-flyers/jeapordy.png",
    date: "January 8th, 2024"
  },
  {
    title: "Product to Pitch",
    description: "Getting ready for IrvineHacks? Have a product eager to pitch and want to work on your public speaking skills? 🎤 MAISS got your back! Tune in for our Product to Pitch workshop craft an in depth walkthrough on why a strong pitch is important, the elements of a great pitch, how to nail your delivery, and public speaking mistakes to avoid. Stay tuned for our short pitch competition after our workshop with prizes for our winners! ⭐️",
    image: "/event-flyers/tableau.png",
    date: "January 15th, 2024"
  },
  {
    title: "Intro to Figma",
    description: "Want to learn how we create our graphics? Whether you’re a beginner or looking to sharpen your graphic design skills, this is the perfect chance to dive into the world of design with hands-on guidance. We’ll also be holding a mini design competition with a chance to be featured on our page! Don’t forget to bring your laptops with Figma downloaded!",
    image: "/event-flyers/figma-frenzy.png",
    date: "January 22nd, 2024"
  },
  {
    title: "Startup Spotlight",
    description: "Interested in entrepreneurship and creating your own business?! MAISS is so excited to host our Startup Spotlight speaker panel featuring our awesome guest speakers, Ali and Brad! Swing by to learn more about their businesses! See you there!🔥",
    image: "/event-flyers/startup.png",
    date: "January 29th, 2024"
  },
  {
    title: "Hot Cocoa Night",
    description: "Take a break from midterms and join MAISS in our Hot Cocoa Night Social! ☕️Come enjoy some warm hot cocoa and play games while also taking pictures at our very own photo booth! See you there!",
    image: "/event-flyers/hot-coco-social.png",
    date: "February 5th, 2024"
  },
  {
    title: "Consulting Speaker Panel",
    description: "Join us for an exclusive Consulting Panel with GBB! MAISS and GBB is proud to introduced the industry experts Michelle, Arturo, and Reme💡 This is your chance to gain insider insights, ask questions, and network with professionals in the field. Don’t miss out on this opportunity to learn from the best and take your career to the next level!",
    image: "/event-flyers/consulting-speaker-panel.png",
    date: "February 12th, 2024"
  },
  {
    title: "Tackling Tableau",
    description: "Curious about data visualization and want to get hands-on with Tableau? 📊 MAISS has you covered! Join us for our Beginner Tableau Workshop where we’ll walk you through your first visualization, break down why Tableau is a game-changer in the industry, and give you the chance to explore cool datasets and create your own insights! No experience needed—just bring your laptop with Tableau downloaded! 🚀",
    image: "/event-flyers/tableau.png",
    date: "February 19th, 2024"
  },
  {
    title: "Product Management Panel",
    description: "Join us for an exclusive Product Management Speaker Panel! MAISS is proud to introduce the industry experts Chirag, Apoorva and Tyler! This is your chance to gain insider insights, ask questions, and network with professionals in their field. Don’t miss out on this opportunity to learn from the best and take your career to the next level!",
    image: "/event-flyers/pm-speaker-event.png",
    date: "February 26th, 2024"
  },
  {
    title: "End of Quarter Social",
    description: "Coming Soon! Check our instagram @maissuci for updates!",
    image: "/event-flyers/coming-soon.png",
    date: "March 5th, 2024"
  },
  {
    title: "MAISS Study Hours",
    description: "Coming Soon! Check our instagram @maissuci for updates!",
    image: "/event-flyers/coming-soon.png",
    date: "March 12th, 2024"
  },
  // Add more events here
];

function Events() {
  return (
    <div className="events-container">
      <section className="events-hero">
        <h1>Events</h1>
        <p>Join us for professional development and community building</p>
      </section>

      <section className="events-list">
        {events.map((event, index) => (
          <div 
            key={index} 
            className={`event-row ${index % 2 === 1 ? 'reverse' : ''}`}
          >
            <div className="event-image">
              <img src={event.image} alt={event.title} />
            </div>
            <div className="event-content">
              <h2>{event.title}</h2>
              <h3>{event.date}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Events; 