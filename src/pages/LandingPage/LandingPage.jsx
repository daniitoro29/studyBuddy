import React from "react";
import  Navbar  from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Information from "./components/Information/Information";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

const baseClassName = "landing-container";

function Landing () {
  return (
    <>
    <div className={baseClassName}>
        <Navbar/>
        <Login />
        <Information/>
        <About/>
        <Contact/>
        <Footer/>
    </div>
    
    </>

  );
}

export default Landing;
