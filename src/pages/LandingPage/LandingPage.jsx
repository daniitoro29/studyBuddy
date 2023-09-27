import React from "react";
import  Navbar  from "../Navbar/Navbar";
import  Footer  from "../Footer/Footer";
import Container from "react-bootstrap/Container";

const baseClassName = "landing-container";

function Landing () {
  return (
    <>
    <Container className={baseClassName}>
        <Navbar/>
        <Footer/>
    </Container>
    
    </>

  );
}

export default Landing;
