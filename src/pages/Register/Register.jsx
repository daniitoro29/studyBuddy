import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { createUser } from "../../services/Register";

const baseClassName = 'register-container';

function Register() {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        fechaNacimiento: '',
        correo: '',
        contrasena: '',
        confirmarContrasena: '',
        ficha: '',
        programa: '',
        tipoDocumento: 'Cedula',
        numeroDocumento: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createUser(formData, navigate)
            .then(() => {
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
                console.log(error);
            });
    };

    return (
        <div className={`${baseClassName}`}>
            <div className={`${baseClassName}_containerRegister`}>
                <h1>Registro</h1>
                <Form onSubmit={handleSubmit} className={`${baseClassName}_form`}>
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
                                    value={formData.confirmarContrasena}
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
                                    <option value="Cedula">Cédula de Ciudadanía</option>
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
                    </Row>
                    <div className="text-center">
                        <Button variant="primary" type="submit">
                            Registrar
                        </Button>
                        <Button variant="secondary" type="button">
                            Cancelar
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Register;
