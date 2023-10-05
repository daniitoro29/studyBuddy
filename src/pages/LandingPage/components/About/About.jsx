import React from "react";
import Card from "react-bootstrap/Card";
import img1 from "../../../../assets/obj.svg";
import img2 from "../../../../assets/plane.svg";
import img3 from "../../../../assets/teamwork.svg";

const baseClassName = "about-container";

const About = () => {
  return (
    <div className={baseClassName} id="about">
      <h1 className={`${baseClassName}_title`}>Sobre nosotros</h1>
      <section className={`${baseClassName}_first`}>
        <Card style={{ width: "20rem", height:"320px"}} >
          <div className={`${baseClassName}_img`}>
            <Card.Img
              variant="top"
              src={img2}
              className={`${baseClassName}_image d-block mx-auto`}
            />
          </div>
          <Card.Body>
            <Card.Title className={`text-center`}>Nuestros objetivos</Card.Title>
            <Card.Text>
              <ul>
                <li>
                  Ofrecer un aprendizaje personalizado que se adapte a las
                  necesidades y preferencias de cada estudiante.
                </li>
                <li>
                  Crear una comunidad de apoyo para estudiantes de carreras
                  STEM.
                </li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "20rem", height:"320px" }}>
        <div className={`${baseClassName}_img`}>
          <Card.Img
            variant="top"
            src={img1}
            className={`${baseClassName}_image d-block mx-auto `}
          />
          </div>
          <Card.Body>
            <Card.Title className={`text-center`}>Nuestro impacto</Card.Title>

            <Card.Text>
              Creemos que nuestra aplicación puede tener un impacto positivo en
              los índices de deserción escolar en carreras STEM. Al ayudar a los
              estudiantes a superar los desafíos académicos, podemos ayudarlos a
              tener éxito en sus carreras y contribuir a la economía.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "20rem", height:"320px" }}>
        <div className={`${baseClassName}_img`}>
          <Card.Img
            variant="top"
            src={img3}
            className={`${baseClassName}_image d-block mx-auto`}
          />
           </div>
          <Card.Body>
            <Card.Title className={`text-center`}>Nuestro equipo</Card.Title>

            <Card.Text>
              Somos un equipo de profesionales apasionados por la educación y
              las carreras STEM. Estamos comprometidos a ayudar a los
              estudiantes a alcanzar sus objetivos y hacer del mundo un lugar
              mejor.
            </Card.Text>
          </Card.Body>
        </Card>
      </section>
    </div>
  );
};

export default About;
