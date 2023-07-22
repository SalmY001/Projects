import React from 'react';
import ResumeDoc from '../ResumeDoc.pdf';

// Create a link to a downloadable resume and display skills on Resume page
export default function Resume() {
  const skills = [
    { id: 1, skill: 'HTML'},
    { id: 2, skill: 'CSS'},
    { id: 3, skill: 'JavaScript'},
    { id: 4, skill: 'React'},
    { id: 5, skill: 'MongoDB'},
    { id: 6, skill: 'Express.js'},
    { id: 7, skill: 'Node.js'},
    { id: 8, skill: 'SQL'},
    { id: 9, skill: 'Jest'},
    { id: 10, skill: 'GitHub'},
  ];

  return (
       <div className="container about">
        <h2>Resume</h2>
        <p>
          My resume can be downloaded here: <a 
          href={ResumeDoc}
          download="Resume"
          target="_blank"
          rel="noreferrer"
          >
           Resume Document
           </a><br></br>
          <br></br>
          Skills obtained are also listed below:
        </p>
        <div className="">
          <ul>
            {skills.map(item => (
            <li key={item.id}>{item.skill}</li>
            ))}
          </ul>
        </div>
      </div>
  )
}



