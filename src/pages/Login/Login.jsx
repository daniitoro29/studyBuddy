import React, { useState } from 'react';
import padlock from "../../assets/cohete.svg";
import { userLogin } from "../../services/Login";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavBar from "../Navbar/Navbar";

const baseClassName = 'login-container';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  function handle(event) {
    event.preventDefault();
  }

  const handleLogin = () => {
   userLogin(formData, navigate)
      .then(() => {
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
    <NavBar />
    <div className={`row justify-content-center ${baseClassName}`} style={{height:"88vh"}}>
      <div className={`col-md-4 ${baseClassName}_img`}>
        <img
          src={padlock}
          className={`d-inline-block align-center ${baseClassName}_imagen`}
          style={{ alignSelf: "center", height:"60vh"}}
          alt="Candado"
        />
      </div>
      <div className={`col-md-7 ${baseClassName}_form`}>
        <Form onSubmit={handle}>
          <h2 className={`${baseClassName}_title`}>Inicio de Sesión</h2>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control type="email"  name="email" placeholder="Ingrese el correo electrónico" onChange={handleInputChange} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" name="password" placeholder="Ingrese la contraseña" onChange={handleInputChange} required />
          </Form.Group>
          <div className={`${baseClassName}_btn`}>
            <Button
              variant="outline-success"
              className={`${baseClassName}_button1`}
              onClick={handleLogin}
            >
              Iniciar Sesión
            </Button>
          </div>
        </Form>
      </div>
    </div>
    </>
  );
}

export default Login;