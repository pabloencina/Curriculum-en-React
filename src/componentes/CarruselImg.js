import React from "react";
import "../hojaDeEstiloCss/Carrusel.css";

function CarruselImagenes() {
  return (
    <div id="contenedor-principal">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={require(`../imagenes/Tecnologias-mas-actuales-para-Desarrollo-Web.jpg`)}
              className="d-block "
              alt="foto1"
            />
          </div>
          <div className="carousel-item">
            <img
              src={require(`../imagenes/What-is-React-JS.jpg`)}
              className="d-block "
              alt="foto2"
            />
          </div>
          <div className="carousel-item">
            <img
              src={require(`../imagenes/adult-business-meeting-business-people-1438072-e1561723331329.jpg`)}
              className="d-block "
              alt="foto3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div id="contenedor-datos">
        <p className="datos-personales"> <i className="bi bi-house-fill"></i> Lima 742 6F, B General Paz</p>
        <p className="datos-personales"><i className="bi bi-geo-alt-fill"></i> Ciudad de Córdoba</p>
        <p className="datos-personales"><i className="bi bi-telephone-fill"></i> 2994231917</p>
        <a href="https://mail.google.com/mail/u/0/?tab=mm#inbox?compose=new" rel='noreferrer' target="_blank" className="datos-personales"><i className="bi bi-envelope-check-fill"></i> encina.pd@gmail.com</a>
        
        <a href="https://github.com/pabloencina" rel='noreferrer' target="_blank" className="datos-personales"><i className="bi bi-github"></i> Github</a>
        <a href="https://www.linkedin.com/in/pablo-david-encina-597399164/" rel='noreferrer' target="_blank" className="datos-personales"><i className="bi bi-linkedin"></i> Linkedin</a>
      </div>
    </div>
  );
}

export default CarruselImagenes;
