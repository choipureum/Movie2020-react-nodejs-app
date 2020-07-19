import React from "react";
import "./About.css";

function About(props) {
  return (
    <div className="about__container">
      <span>
        “Hello, I am Choi Pureum, a student who dreams of becoming a developer. 
        This is Clone Coding, a <b>Movie website</b> using React.”     
        </span>
        <br/><br/>
       <b> github :</b> <a href="https://github.com/choipureum"/>https://github.com/choipureum<br/>
       <b>blog : </b><a href="https://blue-boy.tistory.com/" /><br/>코딩배우는학생 <br/>https://blue-boy.tistory.com/
      <span>− Pureum Choi, 1994</span>
    </div>
  );
}

export default About;