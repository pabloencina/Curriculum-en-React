import React from "react";
import "../hojaDeEstiloCss/Presentacion.css"
import '../App.css';

function Presentacion() {
  return (
  <div id="contenedor">
    <div id="contenedor-foto">
        <img src={require(`../imagenes/20210313_101034 (copia).jpg`)} id="fotoPerfil" alt="foto1" />
    </div>
    <div id="contenedor-nombre">
        <h1 id="tituolo-presentacion" font-family= 'Roboto' sans-serif> PABLO DAVID ENCINA</h1>
        <p id="parrafo-presentacion">Desarrollador de Software en formación</p>
    </div>
    <div id="contenedor-datos">
        <p className="datos-personales">
          {" "}
          <i className="bi bi-house-fill"></i> Lima 742 6F, B General Paz
        </p>
        <p className="datos-personales">
          <i className="bi bi-geo-alt-fill"></i> Ciudad de Córdoba
        </p>
        <p className="datos-personales">
          <i className="bi bi-telephone-fill"></i> 2994231917
        </p>
        <a
          href="https://mail.google.com/mail/u/0/?tab=mm#inbox?compose=new"
          rel="noreferrer"
          target="_blank"
          className="datos-personales"
        >
          <i className="bi bi-envelope-check-fill"></i> encina.pd@gmail.com
        </a>

        <a
          href="https://github.com/pabloencina"
          rel="noreferrer"
          target="_blank"
          className="datos-personales"
        >
          <i className="bi bi-github"></i> Github
        </a>
        <a
          href="https://www.linkedin.com/in/pablo-david-encina-597399164/"
          rel="noreferrer"
          target="_blank"
          className="datos-personales"
        >
          <i className="bi bi-linkedin"></i> Linkedin
        </a>
      </div>
  </div>);
}
export default Presentacion;
