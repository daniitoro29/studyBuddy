import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../assets/logo.svg';
import Button from 'react-bootstrap/Button';

const NAVBAR_LINKS = [
  {
    label: 'Inicio',
    href: '#home',
  },
  {
    label: 'Recursos públicos',
    href: '#public-resources',
  },
  {
    label: 'Aprendizaje personalizado',
    href: '#personalized-learning',
  },
  {
    label: 'Contáctanos',
    href: '#contact-us',
  },
];

function renderNavbarLinks() {
  return NAVBAR_LINKS.map((link) => (
    <Navbar.Brand key={link.label} href={link.href}>
      {link.label}
    </Navbar.Brand>
  ));
}

function NavBar() {
  return (
    <Navbar className="bg-body-tertiary navbar_container">
      <Container>
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
        <Navbar.Brand href="#home">StudyBuddy</Navbar.Brand>
        {renderNavbarLinks()}
        <Button variant="outline-success">Registrate</Button>
        <Button variant="outline-success">Iniciar sesión</Button>
      </Container>
    </Navbar>
  );
}

export default NavBar;