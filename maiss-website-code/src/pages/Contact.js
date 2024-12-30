// Contact page component with a simple form
function Contact() {
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <p>Get in touch with us using the form below or reach out directly:</p>
        <p>Email: info@organization.com</p>
        <p>Phone: (555) 123-4567</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea 
            id="message" 
            name="message" 
            rows="5" 
            required 
          ></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact; 