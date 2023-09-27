import React from 'react'
import logo from "../../assets/logo.png";

const baseClassName = "footer-container";

function Footer() {
  return (
    <footer className={`${baseClassName} ${baseClassName}_column`} >
        <div className={`${baseClassName}_row`}>
            <div className={`${baseClassName}_logo`}>
                <img
                    src={logo}
                    width="70"
                    height="70"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                <h1 className={`${baseClassName}_fontSize`}>StudyBuddy</h1>
            </div>
            <div className={`${baseClassName}_fontSize`}>
                <h1>Siguenos</h1>
                <h2>Facebook</h2>
                <h2>LinkedIn</h2>
                <h2>Instagram</h2>
            </div>
            <div className={`${baseClassName}_fontSize`}>
                <h1>Contáctanos</h1>
                <h2>Cra 5 # 6 - 67 CTPI SENA</h2>
                <h2>studybuddy@gmail.com</h2>
                <h2>+51 3194225195</h2>
            </div>
        </div>
        <br />
        <div>
            <h6>© 2023 StudyBuddy Todos los derechos reservados</h6>
        </div>
    </footer>
    )
}

export default Footer;