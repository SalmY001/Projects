import React from 'react';
//import { v9 as uuidv9 } from 'uuid';
//import ReactDOM from 'react-dom';

// const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'MongoDB', 'Express.js', 'Node.js',
// 'SQL', 'Jest', 'GitHub'];

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
    { id: 9, skill: 'GitHub'},
  ];

  return (
    <section id="Resume">
       <div align="left">
        <h2>Resume</h2>
        <p>
          Skills obtained:
        </p>
        <div className="">
          <ul>
            {skills.map(item => (
            <li key={item.id}>{item.skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
//   const item = props.item;
//   return (
//     <li>{item}</li>
//   );
// }

// function skillsList(props) {

// }
    // const resumeSkills = props.skills;
    // const updatedSkills = resumeSkills.map((resumeSkillsItems) => {
    //   return (
    //     <li key={resumeSkillsItems}>
    //       {resumeSkillsItems}
    //     </li>
    //   );
    // });

    // return (
    //   <ul>
    //     {updatedSkills}
    //   </ul>
    // );
    // <div>
    //   <h2>Resume</h2>
    //   <p>
    //     <li>{skills}</li>
    //   </p>
    // </div>


