// Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Abiud Wamalwa. All rights reserved.</p>
      <div className="social-links">
        <a href="https://github.com/waabiud" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/abiudwamalwa" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.instagram.com/abiu__d" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
