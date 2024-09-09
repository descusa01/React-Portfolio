import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './styles.css';
import { useState } from 'react';
import logo from ".//images/DE logo Black.png";

function Top() {
  return (
    <Navbar expand="lg" className="topnav fixed-navbar bg-body-tertiary mb-3" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
      <Container fluid>
        <Navbar.Brand href="#">
          <img 
            src={logo} 
            alt="Logo" 
            style={{ width: '40px', height: '40px', cursor: 'pointer' }} 
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
              {/* Optional: use the image here again if needed */}
              <img 
                src={logo} 
                alt="Logo" 
                style={{ width: '40px', height: '40px', cursor: 'pointer' }} 
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="ms-auto justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#works">Works</Nav.Link>
              <Nav.Link href="#contactme">Contact Me</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Top;