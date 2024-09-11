import React from "react";
import Profile from "./Profile";
import Skills from "./Skills";
import Works from "./Works";
import Contactme from "./Contactme";
import Bottom from "./Bottom";
import Top from "./Top";
import Intro from "./Intro";
import './styles.css';



function Home() {
    return (
      <div className="body">
        <div id="home">
          <Intro />
          <Top />
          <Profile />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="works">
          <Works />
        </div>
        <div id="contactme">
          <Contactme />
        </div>
        <Bottom />
      </div>
    );
  }

export default Home;