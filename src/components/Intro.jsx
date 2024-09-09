import React from "react";
import cloudImg from "./images/cloud.png";  
import mountainImg from "./images/mountain.png"; 

function Intro() {
  return (
    <div className="top">
         <img className="top-cloud" src={cloudImg} alt="cloud" />
      <h1>I'm Daryll.</h1>
      <h2>a Full Stack Web Developer</h2>
      <img className="bot-cloud" src={cloudImg} alt="cloud" />
      <img src={mountainImg} alt="mountain" />
    </div>
  );
}

export default Intro;
