import React from "react";
import  Navbar  from "../Navbar/Navbar";
import  Footer  from "../Footer/Footer";
import Information from "./components/Information/Information";

const baseClassName = "landing-container";

function Landing () {
  return (
    <>
    <div className={baseClassName}>
        <Navbar/>
        <Information/>
        <Footer/>
    </div>
    
    </>

  );
}

export default Landing;
