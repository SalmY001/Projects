import React from 'react';
import { projects } from "../ProjectsData";

// Display projects on Portfolio page
export default function Portfolio() {
  return (
    <section className="Projects about">
      <div>
        <h2>Portfolio</h2>
        <h3 align="center">
          Portfolio of projects 
        </h3>
      </div>
      <div className="project__img">
        {projects.map((project) => (
          <a href={project.link}
          key={project.id}>
            <div className="">
              <img src={project.image} alt="gallery"/>
              <p className="mb-2 bg-secondary text-dark">
                {project.title}
              </p>
              <p className="h6">
                {project.subtitle}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
