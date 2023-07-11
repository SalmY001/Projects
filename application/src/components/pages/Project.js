import React from 'react';
import { projects } from "../ProjectsData";

// Display projects on Projects page
export default function Project() {
  return (
    <section className="Projects about">
      <div>
        <h2>Projects Page</h2>
        <h3 align="center">
          Portfolio of projects 
        </h3>
      </div>
      <div className="project__img">
        {projects.map((project) => (
          <a href={project.link}
          key={project.id}>
            <div className="">
              <img className="" src={project.image} alt="gallery"/>
              <p className="">
                {project.title}
              </p>
              <p className="">
                {project.subtitle}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
