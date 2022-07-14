import React from "react";
import "../hojaDeEstiloCss/Acordeon.css";

function Acordeon() {
  return (
    <div id="cont-acordeon">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Acerca de mi
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Actualmente estoy estudiando desarrollo Full-Stack Javascript y
              busco una oportunidad laboral que me permita poner en práctica mis
              nuevos conocimientos y crecer profesionalmente en la industria del
              Software. Soy una persona proactiva, me gusta aprender habilidades
              nuevas. Trato de ver cada error como una oportunidad de mejora y
              aprendizaje.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Experiencia
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Maverick, sala de juegos. Plaza Huincul, Neuquén</strong>{" "}
              - Encargado de personal de atención al cliente Abril de 2016-
              Febrero de 2019 Gestión y control de personal en sala de
              juego.Responsable de línea de caja: manejo de dinero/ apertura,
              cierre y arqueo de caja.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Educación
            </button>
          </h2>
          <div
            id="collapseThree"
            s
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Acámica</strong> -Desarrollador Web Full Stack Noviembre
              2020 - Por finalizar.<br></br>
              <strong>Educación IT</strong> -Node.Js Full Stack Developer
              Diciembre 2020 - Por finalizar
              <br></br>
              <strong>AXON Training</strong>- Coach Ontológico Abril 2019 -
              Julio 2020
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Acordeon;
