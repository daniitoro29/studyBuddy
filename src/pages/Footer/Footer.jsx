import React from 'react'
import logo from "../../assets/logo.png";

const baseClassName = "footer-container";

function Footer() {
  return (
    <footer className={`${baseClassName}_row`}>
        <div>
            <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
        </div>
        <div>
            <h1>Siguenos</h1>
            <h2>Facebook</h2>
            <h2>LinkedIn</h2>
            <h2>Instagram</h2>
        </div>
        <div>   
            <h1>Contactanos</h1>
            <h2>Cra 5 # 6 - 67 CTPI SENA</h2>
            <h2>studybuddy@gmail.com</h2>
            <h2>+51 3194225195</h2>
        </div>
    </footer>
    )
}

export default Footer;  