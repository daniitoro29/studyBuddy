import React from "react";
import Button from "react-bootstrap/Button";
import robot from "../../../../assets/robot.svg";

const baseClassName = "information-container";

const Information = () => {
  return (
    <div className={baseClassName}>
      <section className={`${baseClassName}_first`}>
        <h1 className={`${baseClassName}_title`}>
          Study<span className={`${baseClassName}_title2`}>Buddy</span>
        </h1>
        <h2 className={`${baseClassName}_subtitle`}>
          ¿Sientes que no comprendes o no aprendes lo suficiente?
        </h2>
        <h3 className={`${baseClassName}_description`}>
          {" "}
          Nuestra herramienta utiliza el modelo VARK para identificar tu estilo
          de aprendizaje único y te ofrece recursos personalizados.
        </h3>
        <h2 className={`${baseClassName}_subtitle1`}>
          ¡Desbloquea tu potencial y construye un futuro STEM sólido con
          nosotros!
        </h2>
        <a href="#about">
        <Button
          variant="outline-success"
          className={`${baseClassName}_button1`}
        >
          Conocenos
        </Button>
        </a>
      </section>
      <div className={`${baseClassName}_second`}>
      <img
                src={robot}
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
      </div>
    </div>
  );
};

export default Information;
