// Home.jsx
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>
        Hi, I'm <strong>Abiud Wamalwa</strong>, a passionate Full-Stack Developer and Data Scientist.
        I specialize in creating modern web applications using React, Node.js, and MongoDB.
      </p>
      <p>
        Explore my projects, skills, and experience to learn more about my journey in software development.
      </p>
      <a href="/projects" className="btn">View My Projects</a>
      <a href="/contact" className="btn btn-secondary">Get in Touch</a>
    </div>
  );
};

export default Home;
