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
  </div>);
}
export default Presentacion;
