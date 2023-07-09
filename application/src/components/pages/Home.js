import React from 'react';

export default function Home() {
  return (
    <div align="left">
      <h2>About Me</h2>
      <img src={require('../Avatar.png')} alt="avatar"
      />
      <p>
        Hi, my name is Yvonne and I am learning skills in web development.  My current location is the United Kingdom.<br></br>
        To view the projects I have been working on click into the Projects section.<br></br>
        Also a list of skills I have learned so far is displayed in the resume section.
      </p>
    </div>
  );
}
