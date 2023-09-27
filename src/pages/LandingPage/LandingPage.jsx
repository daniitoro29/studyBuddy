import React from "react";
import  Navbar  from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const baseClassName = "landing-container";

function Landing () {
  return (
    <>
    <div className={baseClassName}>
        <Navbar/>
        <Footer/>
    </div>
    </>

  );
}

export default Landing;
