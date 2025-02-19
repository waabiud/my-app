// About.jsx
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <p>
        Hi, I'm <strong>Abiud Wamalwa</strong>, a passionate Full-Stack Developer and Data Scientist.
        I specialize in building web applications using React, Node.js, and MongoDB.
      </p>
      <p>
        I'm currently a <strong>2nd year Math/Cs student</strong> at Kaimosi Friends University.
        I have experience working as an <strong>IT Support Technician at KIVA (2022 - 2023)</strong>.
      </p>
      <p>
        My projects include an <a href="https://waabiud.github.io/ecommerce" target="_blank" rel="noopener noreferrer">E-commerce Website</a>,  
        a <a href="https://waabiud.github.io/calculator" target="_blank" rel="noopener noreferrer">Scientific Calculator</a>, and more.
      </p>
      <p>My goal is to create innovative solutions and grow in the tech industry.</p>
    </div>
  );
};

export default About;
