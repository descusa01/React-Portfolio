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

return  (
 <div className="body">
 <Top />
 <Intro/>
<Profile />
<Skills />
<Works />
<Contactme />
<Bottom />
 </div>

)

}

export default Home;