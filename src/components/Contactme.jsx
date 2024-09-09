import React from "react";
import Button from 'react-bootstrap/Button';


function Contactme() {
    return (
        <div className="contact-me">
      <section id="contact-me">
        <h2>Get In Touch</h2>
        <h3>If you want a flexible proficient programmer, contact me.</h3>
        {/* <!-- <p>Lorem ipsum dolor sit amet, in quis, aenean amet. Phasellus sodales, tellus donec dui, ornare erat.</p> --> */}
        <Button className= "contactMe" variant="primary" href="mailto:teacherdaryllescusa@gmail.com">CONTACT ME</Button>{' '}
      </section>
      </div>
    )}


export default Contactme ;