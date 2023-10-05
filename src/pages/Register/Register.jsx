import React from "react";
import { useState } from "react";

import { Form, Row, Col, Button, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import { createUser } from "../../services/Register";

import { useNavigate } from "react-router-dom";

const baseClassName = "register-container";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    fechaNacimiento: "",
    correo: "",
    contrasena: "",
    confirmarContrasena: "",
    ficha: "",
    programa: "",
    tipoDocumento: "Cedula",
    numeroDocumento: "",
  });
  const [message, setMessage] = useState('')

  const handleInputChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (!regex.test(password)) {
      return "La contraseña debe tener al menos 8 caracteres, incluyendo una letra minúscula, una letra mayúscula, un número y un símbolo.";
    }
    return null;
  };

  const validateEmail = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email === '') {
      return "El correo electrónico no puede estar vacío"
    }
    if (!regex.test(email)) {
      return "El correo electrónico no tiene un formato válido.";
    }
    return null;
  };



  const [newErrors, setNewErrors] = useState({
      nombre: "",
      apellido: "",
      fechaNacimiento: "",
      correo: "",
      contrasena: "",
      confirmarContrasena: "",
      ficha: "",
      programa: "",
      tipoDocumento: "",
      numeroDocumento: "",
    })

    const setForm = () => {
      
      setFormData({
        nombre: "",
        apellido: "",
        fechaNacimiento: "",
        correo: "",
        contrasena: "",
        confirmarContrasena: "",
        programa: "",
        tipoDocumento: "",
        numeroDocumento: "",
        ficha: "",
      }); 
    }

  const handleSubmit = () => {

    const errors = {
      nombre: "",
      apellido: "",
      fechaNacimiento: "",
      correo: "",
      contrasena: "",
      confirmarContrasena: "",
      ficha: "",
      programa: "",
      tipoDocumento: "",
      numeroDocumento: "",
    };
    // Validacion nombre
    if (formData.nombre.length < 3) {
      errors.nombre= 'El nombre debe contener al menos 3 caracteres' 
    }
    if (formData.apellido.length < 3) {
      errors.apellido = 'El apellido debe contener al menos 3 caracteres'
    }
    if (formData.fechaNacimiento === '') {
      errors.fechaNacimiento = 'La fecha de nacimiento no debe estar vacía'
    }
    if (formData.fechaNacimiento === '') {
      errors.fechaNacimiento = 'La fecha de nacimiento no debe estar vacía'
    }
    if (errors.correo = validateEmail(formData.correo)){
      errors.correo = validateEmail(formData.correo);
    }
    if (validatePassword(formData.contrasena)){
      errors.contrasena = validatePassword(formData.contrasena);
    }
    if ( formData.contrasena !== formData.confirmarContrasena){
      errors.confirmarContrasena = 'Las contraseñas no coinciden'
    }    
    if ( formData.ficha === ''){
      errors.ficha = 'La ficha no puede estar vacío'
    }
    if ( formData.programa === ''){
      errors.programa = 'Debes seleccionar al menos un programa'
    }
    if ( formData.tipoDocumento === ''){
      errors.tipoDocumento = 'Selecciona tu tipo de documento'
    }
    if ( formData.numeroDocumento === ''){
      errors.numeroDocumento = 'El número de documento no puede estar vacío'
    }
    
    setNewErrors(errors);
    if(Object.values(newErrors).every((error) => error === "")) {

      createUser(formData, navigate)
        .then((res) => { 
          if (res.success) {
            setForm()
          }

          console.log('Esta es la respuesta del servicio ****', res);
        })
        .catch((error) => {
          setFormData({
            ...formData,
            error: error.message,
          });
        });

    }




  };

  return (
    <>
      <NavBar />
      <Container className="w-60 mx-auto">
        <Card style={{ height: "auto", margin: "2rem" }} className="mx-auto">
          <div className={`${baseClassName}`}>
            <div className={`${baseClassName}_containerRegister`}>
              <h1 className="text-center">Registro</h1>
              <Form
                onSubmit={(e) => {
                  if (
                    formData.nombre === "" ||
                    formData.apellido === "" ||
                    formData.fechaNacimiento === "" ||
                    formData.correo === "" ||
                    formData.contrasena === "" ||
                    formData.confirmarContrasena === "" ||
                    formData.programa === "" ||
                    formData.tipoDocumento === "" ||
                    formData.numeroDocumento === "" ||
                    formData.ficha === ""
                  ) {
                    e.preventDefault();
                  } /* else {
                    setFormData({
                      nombre: "",
                      apellido: "",
                      fechaNacimiento: "",
                      correo: "",
                      contrasena: "",
                      confirmarContrasena: "",
                      programa: "",
                      tipoDocumento: "",
                      numeroDocumento: "",
                      ficha: "",
                    });
                  } */
                }}
              >
                <Row>
                  <Col sm={6}>
                    <Form.Group controlId="nombre">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        type="text"
                        name="nombre"
                        placeholder="Nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <p className="mx-auto register">{newErrors.nombre}</p>
                  </Col>
                  <Col sm={6}>
                    <Form.Group controlId="apellido">
                      <Form.Label>Apellido</Form.Label>
                      <Form.Control
                        type="text"
                        name="apellido"
                        placeholder="Apellido"
                        value={formData.apellido}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <p className="mx-auto register">{newErrors.apellido}</p>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <Form.Group controlId="fechaNacimiento">
                      <Form.Label>Fecha de Nacimiento</Form.Label>
                      <Form.Control
                        type="date"
                        name="fechaNacimiento"
                        value={formData.fechaNacimiento}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <p className="mx-auto register">{newErrors.fechaNacimiento}</p>
                  </Col>
                  <Col sm={6}>
                    <Form.Group controlId="correo">
                      <Form.Label>Correo Electrónico</Form.Label>
                      <Form.Control
                        type="email"
                        name="correo"
                        placeholder="Correo Electrónico"
                        value={formData.correo}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <p className="mx-auto register">{newErrors.correo}</p>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <Form.Group controlId="contrasena">
                      <Form.Label>Contraseña</Form.Label>
                      <Form.Control
                        type="password"
                        name="contrasena"
                        placeholder="Contraseña"
                        value={formData.contrasena}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <p className="mx-auto register">{newErrors.contrasena}</p>
                  </Col>
                  <Col sm={6}>
                    <Form.Group controlId="confirmarContrasena">
                      <Form.Label>Confirmar Contraseña</Form.Label>
                      <Form.Control
                        type="password"
                        name="confirmarContrasena"
                        placeholder="Confirmar Contraseña"
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <p className="mx-auto register">{newErrors.confirmarContrasena}</p>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <Form.Group controlId="programa">
                      <Form.Label>Programa</Form.Label>
                      <Form.Control
                        as="select"
                        name="programa"
                        value={formData.programa}
                        onChange={handleInputChange}
                      >
                        <option value="">Seleccione un programa</option>
                        <option value="Desarrollo de Software">
                          Técnologo en Desarrollo de Software
                        </option>
                        <option value="Sistemas de Información">
                          Técnologo en Análisis y Desarrollo de Sistemas de
                          Información
                        </option>
                      </Form.Control>
                    </Form.Group>
                    <p className="mx-auto register">{newErrors.programa}</p>
                  </Col>
                  <Col sm={6}>
                    <Form.Group controlId="tipoDocumento">
                      <Form.Label>Tipo de Documento</Form.Label>
                      <Form.Control
                        as="select"
                        name="tipoDocumento"
                        value={formData.tipoDocumento}
                        onChange={handleInputChange}
                      >
                        <option value="Cedula" selected>
                          Cédula de Ciudadanía
                        </option>
                        <option value="Pasaporte">Pasaporte</option>
                        <option value="TarjetaIdentidad">
                          Tarjeta de Identidad
                        </option>
                        <option value="CedulaExtranjeria">
                          Cédula de Extranjería
                        </option>
                      </Form.Control>
                    </Form.Group>
                    <p className="mx-auto register">{newErrors.tipoDocumento}</p>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <Form.Group controlId="numeroDocumento">
                      <Form.Label>Número de Documento</Form.Label>
                      <Form.Control
                        type="text"
                        name="numeroDocumento"
                        placeholder="Número de Documento"
                        value={formData.numeroDocumento}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <p className="mx-auto register">{newErrors.numeroDocumento}</p>
                  </Col>
                  <Col sm={6}>
                    <Form.Group controlId="ficha">
                      <Form.Label>Ficha</Form.Label>
                      <Form.Control
                        type="text"
                        name="ficha"
                        placeholder="Ficha"
                        value={formData.ficha}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <p className="mx-auto register">{newErrors.ficha}</p>
                  </Col>
                </Row>
                <div className="text-center">
                  <Button
                    variant="primary"
                    type="submit"
                    className={`${baseClassName}_button1`}
                    onClick={handleSubmit}
                  >
                    Registrar
                  </Button>
                  <a href="/">
                    <Button
                      variant="secondary"
                      type="button"
                      className={`${baseClassName}_button2`}
                    >
                      Cancelar
                    </Button>
                  </a>
                </div>
              </Form>
            </div>
          </div>
        </Card>
      </Container>
      <Footer />
    </>
  );
}

export default Register;
