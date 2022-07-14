
import "../hojaDeEstiloCss/Hobbies.css"
//import React, { useState } from "react";
//import Navbar from "./Navbar";

function Hobbies() {
    //const [show,setShow] = useState(false)
  return (
    
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="false"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item  active">
          <img
            src={require(`../imagenes/Lecturas-para-mayores.jpg`)}
            className="d-block-hobbies "
            alt="lectura"
          />
          <div className="carousel-caption d-none d-md-block">
            <h1 className="titulo-hobbies">Lectura</h1>
            <p className="titulo-hobbies">Me gusta leer en mis ratos libres cuando hago un break en mi estudio.En este momento estoy leyendo novelas de epoca, una de mis escritoras preferidas es Isabel Allende.</p>
          </div>
        </div>
        <div className="carousel-item ">
          <img
            src={require(`../imagenes/deporteyadicciones.jpg`)}
            className="d-block-hobbies "
            alt="deporte"
          />
          <div className="carousel-caption d-none d-md-block">
            <h1 className="titulo-hobbies">Deporte</h1>
            <p className="titulo-hobbies">Entreno en un club donde voy alternando en la semana musculación y natación.</p>
          </div>
        </div>
        <div className="carousel-item ">
          <img
            src={require(`../imagenes/section_4_health_eating_at_restaurants.jpeg`)}
            className="d-block-hobbies "
            alt="comida"
          />
          <div className="carousel-caption d-none d-md-block">
            <h1 className="titulo-hobbies">Cocina Saludable</h1>
            <p className="titulo-hobbies">Me encanta cocinar e inventar recetas en el area saludable, hice un curso de alimentación viva en el 2014 y me recibí de técnico profesional gastronómico en el 2011.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Hobbies;
