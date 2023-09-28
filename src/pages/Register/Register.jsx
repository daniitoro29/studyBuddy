import React from 'react';
import { useState } from 'react';

import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import Card from "react-bootstrap/Card";

import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import { createUser } from "../../services/Register";

import { useNavigate } from "react-router-dom";

const baseClassName = 'register-container';

function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        fechaNacimiento: '',
        correo: '',
        contrasena: '',
        confirmarContrasena: '',
        ficha: '',
        programa: '',
        tipoDocumento: "Cedula",
        numeroDocumento: '',
    });

    const handleInputChange = ({ target }) => {
        setFormData({
          ...formData,
          [target.name]: target.value,
        });
      };

    const handle = (event) => {
        event.preventDefault();
      }

    const handleSubmit = () => {
        createUser(formData, navigate)
            .then(() => {

            })
            .catch((error) => {

                console.log(error);
            });
    };

    return (
        <>
        <NavBar/>
        <Container>
        <Card style={{ height:"auto", margin:"2rem"}} className="mx-auto" >
 
        <div className={`${baseClassName}`}>
            <div className={`${baseClassName}_containerRegister`}>
                <h1 className="text-center">Registro</h1>
                <Form onSubmit={handle} className={`${baseClassName}_form`}>
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
                                    <option value="Desarrollo de Software">Técnologo en Desarrollo de Software</option>
                                    <option value="Sistemas de Información">Técnologo en Análisis y Desarrollo de Sistemas de Información</option>
                                </Form.Control>
                            </Form.Group>
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
                                    <option value="Cedula" selected>Cédula de Ciudadanía</option>
                                    <option value="Pasaporte">Pasaporte</option>
                                    <option value="TarjetaIdentidad">Tarjeta de Identidad</option>
                                    <option value="CedulaExtranjeria">Cédula de Extranjería</option>
                                </Form.Control>
                            </Form.Group>
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
                        </Col>
                    </Row>
                    <div className="text-center">
                        <Button variant="primary" type="submit" className={`${baseClassName}_button1`} onClick={handleSubmit}>
                            Registrar
                        </Button>
                        <a href="/">
                        <Button variant="secondary" type="button" className={`${baseClassName}_button2`}>
                            Cancelar
                        </Button>
                        </a>
                    </div>
                </Form>
            </div>
        </div>
        </Card>
        </Container>
        <Footer/>
        </>
    );
}

export default Register;
