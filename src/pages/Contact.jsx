// Contact.jsx
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>Feel free to reach out for collaborations, job opportunities, or just to connect!</p>
      
      <div className="contact-info">
        <p><strong>Email:</strong> <a href="mailto:abiudwamalwa1979@gmail.com">abiudwamalwa1979@gmail.com</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/abiudwamalwa" target="_blank" rel="noopener noreferrer">Abiud Wamalwa</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/waabiud" target="_blank" rel="noopener noreferrer">waabiud</a></p>
        <p><strong>WhatsApp:</strong> <a href="https://wa.me/254792129479" target="_blank" rel="noopener noreferrer">+254792129479</a></p>
        <p><strong>Facebook:</strong> <a href="https://www.facebook.com/profile.php?id=100089464316173" target="_blank" rel="noopener noreferrer">Profile 1</a> | <a href="https://www.facebook.com/profile.php?id=100084568450857" target="_blank" rel="noopener noreferrer">Profile 2</a></p>
        <p><strong>Instagram:</strong> <a href="https://www.instagram.com/_abiu_d" target="_blank" rel="noopener noreferrer">@abiu__d</a></p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
