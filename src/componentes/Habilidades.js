import React from "react";
import "../hojaDeEstiloCss/habilidades.css";
//https://react-icons.github.io/react-icons/icons?name=bi ICONOS DE REACT
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";

function Habilidades() {
  return (
    <div id="cont-principal">
      <div id="cont-habilidades">
        <h1 className="titlulo-tec-habilid">Habilidades</h1>
        <ul className="list-group">
          <li className="list-group-item">Capacidad de adaptación</li>
          <li className="list-group-item">Proactividad</li>
          <li className="list-group-item">Positividad</li>
          <li className="list-group-item">Esfuerzo y lealtad</li>
          <li className="list-group-item">Confianza</li>
        </ul>
      </div>
      <div id="cont-tecnologias">
      <h1 className="titlulo-tec-habilid">Tecnologias</h1>
      <ul className="list-group">
          <li className="list-group-item"><FaHtml5/> HTML</li>
          <li className="list-group-item"><FaCss3/> CSS</li>
          <li className="list-group-item"><FaNodeJs/> JS</li>
          <li className="list-group-item"><FaReact/> REACT(hooks, redux, axios)</li>
          <li className="list-group-item"><FaNodeJs/> NODE.JS</li>
          <li className="list-group-item"><FaGithub/> GIT</li>
        </ul>
      </div>
    </div>
  );
}

export default Habilidades;
