import React from "react";
import  Navbar  from "../Navbar/Navbar";

const baseClassName = "landing-container";

function Landing () {
  return (
    <>
    <div className={baseClassName}>
        <Navbar/>
    </div>
    </>

  );
}

export default Landing;
