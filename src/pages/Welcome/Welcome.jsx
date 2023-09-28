import React from "react";
import Card from "react-bootstrap/Card";
import img1 from "../../assets/wel.svg";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom"

const baseClassName = "welcome-container";

const Welcome = () => {
    const navigate = useNavigate();
  return (
    <div className={baseClassName}>
      <Card >
        <div className={`${baseClassName}_img`}>
            <a href="/">
          <Card.Img
            variant="top"
            src={img1}
            className={`${baseClassName}_image d-block mx-auto`}
            style={{ width: 300 }}
          />
          </a>
        </div>
        <Card.Body>

          <Card.Text style={{ textAlign: "center" }}>
            <h2>
              ¡Descubre cómo StudyBuddy puede ayudarte a mejorar tus habilidades
              matemáticas!
            </h2>
            <p>Haz clic aquí para comenzar el test de evaluación.</p>
            <Button
              variant="outline-success"
              className={`${baseClassName}_button1`}
              /* onClick={() => navigate("/questions")} */
            >
              Empezar
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Welcome;
