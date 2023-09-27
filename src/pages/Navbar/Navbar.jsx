import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import Button from "react-bootstrap/Button";

const NAVBAR_LINKS = [
  {
    label: "Inicio",
    href: "#home",
  },
  {
    label: "Recursos públicos",
    href: "#public-resources",
  },
  {
    label: "Aprendizaje personalizado",
    href: "#personalized-learning",
  },
  {
    label: "Contáctanos",
    href: "#contact-us",
  },
];

const baseClassName = "navbar-container";

function renderNavbarLinks() {
  return NAVBAR_LINKS.map((link) => (
    <Navbar.Brand
      key={link.label}
      href={link.href}
      className={`${baseClassName}_text`}
    >
      {link.label}
    </Navbar.Brand>
  ));
}

function NavBar() {
  return (
    <Navbar className={`bg-body-tertiary ${baseClassName}`}>
      <Container>
        <div className={`${baseClassName}_image`}>
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </div>
        <Navbar.Brand href="#home" className={`${baseClassName}_text `}>
          StudyBuddy
        </Navbar.Brand>
        <div className={`${baseClassName}_links`}>

        {renderNavbarLinks()}
        </div>
        <Button
          variant="outline-success"
          className={`${baseClassName}_button1`}
        >
          Registrate
        </Button>
        <Button
          variant="outline-success"
          className={`${baseClassName}_button2`}
        >
          Iniciar sesión
        </Button>
      </Container>
    </Navbar>
  );
}

export default NavBar;