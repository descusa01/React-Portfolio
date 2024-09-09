import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage1 from ".//images/tindnd.png";
import CarouselImage2 from ".//images/simongame.png";
import CarouselImage3 from ".//images/drumkit.png";
import CarouselImage4 from ".//images/dicee.png";


function Works (){

return (
<div className="works">
<section id="works">
        <h2>My Works</h2>
           <Carousel>
           <Carousel.Item>
  <a href="https://tin-dn-d-descusa01s-projects.vercel.app" target="_blank" rel="noopener noreferrer">
    <img src={CarouselImage1} className="d-block w-100" alt="Project 1"/>
  </a>
  <Carousel.Caption className="translucent-caption">
    {/* <h4><i className="fas fa-star" /> First slide label</h4> */}
    <div className="icon-container">
      <i className="fa-brands fa-html5" />
      <i className="fa-brands fa-css3-alt" />
      <i className="fa-brands fa-js" />
      <i className="fa-brands fa-bootstrap" />
    </div>
  </Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
  <a href="https://simon-game-one-omega.vercel.app" target="_blank" rel="noopener noreferrer">
    <img src={CarouselImage2} className="d-block w-100" alt="Project 2"/>
  </a>
  <Carousel.Caption className="translucent-caption">
    {/* <h4><i className="fas fa-star" /> First slide label</h4> */}
    <div className="icon-container">
      <i className="fa-brands fa-html5" />
      <i className="fa-brands fa-css3-alt" />
      <i className="fa-brands fa-js" />
      <i className="fa-brands fa-bootstrap" />
    </div>
  </Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
  <a href="https://drum-kit-peach-eight.vercel.app" target="_blank" rel="noopener noreferrer">
    <img src={CarouselImage3} className="d-block w-100" alt="Project 3"/>
  </a>
  <Carousel.Caption className="translucent-caption">
    {/* <h4><i className="fas fa-star" /> First slide label</h4> */}
    <div className="icon-container">
      <i className="fa-brands fa-html5" />
      <i className="fa-brands fa-css3-alt" />
      <i className="fa-brands fa-js" />
      <i className="fa-brands fa-bootstrap" />
    </div>
  </Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
  <a href="https://dicee-game-ten.vercel.app" target="_blank" rel="noopener noreferrer">
    <img src={CarouselImage4} className="d-block w-100" alt="Project 4"/>
  </a>
  <Carousel.Caption className="translucent-caption">
    {/* <h4><i className="fas fa-star" /> First slide label</h4> */}
    <div className="icon-container">
      <i className="fa-brands fa-html5" />
      <i className="fa-brands fa-css3-alt" />
      <i className="fa-brands fa-js" />
      <i className="fa-brands fa-bootstrap" />
    </div>
  </Carousel.Caption>
</Carousel.Item>
    </Carousel>
    </section>

    </div>

)}

export default Works;

