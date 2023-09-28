import React from "react";
import Form from "react-bootstrap/Form";
import email from "../../../../assets/mail.svg";
import Button from "react-bootstrap/Button";

const baseClassName = "contact-container";

const Contact = () => {
  return (
    <div className={`row justify-content-center ${baseClassName}`}>
      <div className={`col-md-5 ${baseClassName}_img`}>
        <img
          src={email}
          className={`d-inline-block align-center ${baseClassName}_imagen`}
          style={{ alignSelf: "center" }}
          alt="Email Logo"
        />
      </div>
      <div className={`col-md-6 ${baseClassName}_form`}>
        <form>
          <h2 className={`${baseClassName}_title`}>Dejanos tu mensaje</h2>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text"  />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control type="email"  />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control type="tel"  />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <div className={`${baseClassName}_btn`}>
            <Button
              variant="outline-success"
              className={`${baseClassName}_button1`}
            >
              Conocenos
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
