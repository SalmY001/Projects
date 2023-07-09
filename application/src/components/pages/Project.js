import React from 'react';
import { projects } from "../ProjectsData";
//import {View} from 'react';

export default function Project() {
  return (
    <section id="Projects">
      <div>
        <h2>Projects Page</h2>
        <p>
          Portfolio of projects 
        </p>
      </div>
      <div className="project__img">
        {projects.map((project) => (
          <a href={project.link}
          key={project.id}>
            <div className="">
              <img className="" src={project.image} alt="gallery"/>
              <h3 className="">
                {project.title}
              </h3>
              <h4 className="">
                {project.subtitle}
              </h4>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
