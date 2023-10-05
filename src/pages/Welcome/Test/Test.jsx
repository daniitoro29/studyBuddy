import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import rocket from '../../../assets/rocket.svg'
import nerd from '../../../assets/nerd.svg'

const baseClassName = "test-container";

const questions = [
  // Pregunta 1
  {
    question: "Usted cocinará algo especial para su familia. Usted haría:",
    options: [
      "Preguntar a amigos por sugerencias.",
      "Dar una vista al recetario por ideas de las fotos.",
      "Usar un libro de cocina donde usted sabe hay una buena receta.",
      "Cocinar algo que usted sabe sin la necesidad de instrucciones."
    ]
  },
  // Pregunta 2
  {
    question: "Usted escogerá alimento en un restaurante o un café. Usted haría:",
    options: [
      "Escuchar al mesero o pedir que amigos recomienden opciones.",
      "Mirar lo qué otros comen o mirar dibujos de cada platillo.",
      "Escoger de las descripciones en el menú.",
      "Escoger algo que tienes o has tenido antes."
    ]
  },
  // Pregunta 3
  {
    question: "Aparte del precio, qué más te influenciaría para comprar un libro de ciencia ficción",
    options: [
      "Un amigo habla acerca de él y te lo recomienda.",
      "Tienes historias reales, experiencias y ejemplos.",
      "Leyendo rápidamente partes de él.",
      "El diseño de la pasta es atractivo."
    ]
  },
    // Pregunta 4
    {
      question: "Usted ha terminado una competencia o un examen y le gustaría tener alguna retroalimentación. Te gustaría retroalimentarte:",
      options: [
        "Usando descripciones escritas de los resultados",
        "Usando ejemplos de lo que usted ha hecho.",
        "Usando gráficos que muestran lo que usted ha logrado.",
        "De alguien que habla por usted."
      ]
    },
      // Pregunta 5
  {
    question: "Usted tiene un problema con la rodilla. Usted preferiría que el doctor:",
    options: [
      "Use un modelo de plástico y te enseñe lo que está mal",
      "Te de una página de internet o algo para leer",
      "Te describa lo qué está mal",
      "Te enseñe un diagrama lo que está mal."
    ]
  },
    // Pregunta 6
    {
      question: "Usted está a punto de comprar una cámara digital o teléfono o móvil. ¿Aparte del precio qué más influirá en tomar tu decisión?",
      options: [
        "Probándolo",
        "Es un diseño moderno y se mira bien.",
        "Leer los detalles acerca de sus características.",
        "El vendedor me informa acerca de sus características."
      ]
    },
      // Pregunta 7
  {
    question: "Usted no está seguro como se deletrea trascendente o tracendente ¿Ud. qué haría?",
    options: [
      "Escribir ambas palabras en un papel y escojo una.",
      "Pienso cómo suena cada palabra y escojo una.",
      "Busco la palabra en un diccionario.",
      "Veo la palabra en mi mente y escojo según como la veo."
    ]
  },
    // Pregunta 8
    {
      question: "Me gustan páginas de Internet que tienen:",
      options: [
        "Interesantes descripciones escritas, listas y explicaciones.",
        "Diseño interesante y características visuales.",
        "Cosas que con un click pueda cambiar o examinar.",
        "Cosas que con un click pueda cambiar o examinar."
      ]
    },
      // Pregunta 9
  {
    question: "Usted está planeando unas vacaciones para un grupo. Usted quiere alguna observación de ellos acerca del plan. Usted qué haría:",
    options: [
      "Usa un mapa o página de Internet para mostrarles los lugares.",
      "Describe algunos de los puntos sobresalientes.",
      "Darles una copia del itinerario impreso.",
      "Llamarles por teléfono o mandar mensaje por correo electrónico."
    ]
  },
    // Pregunta 10
    {
      question: "Usted está usando un libro, disco compacto o página de Internet para aprender a tomar fotos con su cámara digital nueva. Usted le gustaría tener:",
      options: [
        "Una oportunidad de hacer preguntas acerca de la cámara y sus características.",
        "Esquemas o diagramas que muestran la cámara y la función de cada parte.",
        "Ejemplos de buenas y malas fotos y cómo mejorarlas..",
        "Aclarar las instrucciones escritas con listas y puntos sobre qué hacer."
      ]
    },
      // Pregunta 11
  {
    question: "Usted quiere aprender un programa nuevo, habilidad o juego en una computadora. Usted qué hace:",
    options: [
      "Hablar con gente que sabe acerca del programa.",
      "Leer las instrucciones que vienen en el programa.",
      "Seguir los esquemas en el libro que acompaña el programa.",
      "Use los controles o el teclado."
    ]
  },
    // Pregunta 12
    {
      question: "Estás ayudando a alguien que quiere a ir al aeropuerto, al centro del pueblo o la estación del ferrocarril. Usted hace:",
      options: [
        "Va con la persona.",
        "Anote las direcciones en un papel (sin mapa).",
        "Les dice las direcciones..",
        "Les dibuja un croquis o les da un mapa"
      ]
    },
      // Pregunta 13
  {
    question: "Recuerde un momento en su vida en que Ud. aprendió a hacer algo nuevo. Trate de evitar escoger una destreza física, como andar en bicicleta. Ud. Aprendió mejor:",
    options: [
      "Viendo una demostración.",
      "Con instrucciones escritas, en un manual o libro de texto.",
      "Escuchando a alguien explicarlo o haciendo preguntas.",
      "Con esquemas y diagramas o pistas visuales."
    ]
  },
    // Pregunta 14
    {
      question: "Ud. Prefiere un maestro o conferencista que use:",
      options: [
        "Demostraciones, modelos o sesiones prácticas.",
        "Folletos, libros o lecturas",
        "Diagramas, esquemas o gráficos.",
        "Preguntas y respuestas, pláticas y oradores invitados."
      ]
    },
      // Pregunta 15
  {
    question: "Un grupo de turistas quiere aprender acerca de parques o reservas naturales en su área. Usted:",
    options: [
      "Los acompaña a un parque o reserva natural.",
      "Les da un libro o folleto acerca de parques o reservas naturales.",
      "Les da una plática acerca de parques o reservas naturales.",
      "Les muestra imágenes de Internet, fotos o libros con dibujos."
    ]
  },
    // Pregunta 16
    {
      question: "Usted tiene que hacer un discurso para una conferencia u ocasión especial. Usted hace:",
      options: [
        "Escribir el discurso y aprendérselo leyéndolo varias veces.",
        "Reunir muchos ejemplos e historias para hacer el discurso verdadero y práctico.",
        "Escribir algunas palabras claves y practicar el discurso repetidas veces.",
        "Hacer diagramas o esquemas que te ayuden a explicar las cosas."
      ]
    },
];

const Test = () => {
  return (
    <div className={`${baseClassName} d-block mx-auto`}>
      <Carousel>
        {questions.map((question, index) => (
          <Carousel.Item key={index} interval={15500} className={`${baseClassName}_carousel`}>
            {index % 2 === 0 ? (
              <img
                className={`d-block w-100 ${baseClassName}_img`}
                src={rocket}
                alt={`Image ${index + 1}`}
              />
            ) : (
              <img
                className={`d-block w-100 ${baseClassName}_img`}
                src={nerd}
                alt={`Image ${index + 1}`}
              />
            )}
            <Carousel.Caption>
              <h3>{question.question}</h3>
              {question.options.map((option, optionIndex) => (
                <label key={optionIndex}>
                  <input type="radio" name={`answer${index}`} value={`option${optionIndex + 1}`} />
                  {option}
                </label>
              ))}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Test;
