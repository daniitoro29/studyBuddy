import React from "react";
import  Navbar  from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";

const baseClassName = "landing-container";

function Landing () {
  return (
    <>
    <div className={baseClassName}>
        <Navbar/>
        <Login />
        <Footer/>
    </div>
    </>

  );
}

export default Landing;
