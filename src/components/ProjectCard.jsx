// ProjectCard.jsx
import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <div className="project-links">
        <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        {project.live !== "#" && (
          <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
