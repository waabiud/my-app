// Projects.jsx
import React from "react";
import ProjectCard from "../components/ProjectCard";
import "./Projects.css";

const projects = [
  {
    title: "E-commerce Website",
    description: "A featured e-commerce website.",
    github: "https://github.com/waabiud/ecommerce",
    live: "https://waabiud.github.io/ecommerce"
  },
  {
    title: "Scientific Calculator",
    description: "A web-based scientific calculator with advanced mathematical functions.",
    github: "https://github.com/waabiud/calculator",
    live: "https://waabiud.github.io/calculator"
  },
  {
    title: "Online Voting System",
    description: "A secure and efficient online voting system.",
    github: "https://github.com/waabiud/OnlinVotingSystem",
    live: "#"
  }
];

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
