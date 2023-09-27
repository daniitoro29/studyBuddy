import React from "react";
import  Navbar  from "../Navbar/Navbar";
import Container from "react-bootstrap/Container";

const baseClassName = "landing-container";

function Landing () {
  return (
    <>
    <Container className={baseClassName}>
        <Navbar/>
    </Container>
    </>

  );
}

export default Landing;
