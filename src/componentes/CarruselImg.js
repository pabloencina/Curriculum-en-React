import React from "react";
import "../hojaDeEstiloCss/Carrusel.css";

function CarruselImagenes() {
  return (
    <div id="cont-proyectos">
      <h1 id="proyectos-titulo">Mis proyectos</h1>
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
            <div className="contenedor-image-texto">
              
                <img
                  src={require(`../imagenes/gifos screen shot.jpg`)}
                  className="d-block-hobbies "
                  alt="lectura"
                />
              
              <div className="contenedor-texto">
                <h1 className="titulo-texto">Gifos</h1>
                <p className="texto">
                Aplicación web de búsqueda, selección y creación de gifs. El proyecto consiste en la creación de una aplicación web interactiva para compartir GIFs animados, poniendo en práctica los fundamentos de la programación y el uso de JavaScript mediante la obtención de datos de la API https://giphy.com, trabajando con asincronía y aprovechando los nativos herramientas del navegador, como obtener imágenes a través de la cámara web. Las tecnologías utilizadas en este desafío fueron JAVASCRIPT y CSS; sin utilizar ningún framework. HTML.
                </p>
                <button
                type="button"
                class="btn-proyectos "
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-custom-class="custom-tooltip"
                title="Aplicación web de búsqueda, selección y creación de gifs."
              >
                <a
                  class="dropdown-item"
                  href="https://romantic-lichterman-e8dc4d.netlify.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i class="bi-github" color="red"></i> Gifos
                </a>
              </button>
              </div>
            </div>
          </div>

          <div className="carousel-item ">
            <div className="contenedor-image-texto">
              
                <img
                  src={require(`../imagenes/color game screenshoot.png`)}
                  className="d-block-hobbies "
                  alt="deporte"
                />
              
              <div className="contenedor-texto">
                <h1 className="titulo-texto">Color game</h1>
                <p className="texto">
                Este proyecto es un juego en el que el usuario debe adivinar un color a partir de su código RGB; Dispone de contador de clics y dependiendo de la dificultad (fácil, normal o difícil) será la puntuación final obtenida. Poner en práctica los fundamentos de la programación y el uso de JavaScript. Las tecnologías utilizadas en este reto fueron JAVASCRIPT y CSS y HTML sin utilizar ningún framework.
                </p>
                <button
                type="button"
                class="btn-proyectos btn-secondary"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-custom-class="custom-tooltip"
                title="Este proyecto es un juego en el que el usuario debe adivinar un color a partir de su código RGB."
              >
                <a
                  class="dropdown-item"
                  href="https://elaborate-rabanadas-a89099.netlify.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i class="bi-github" color="red"></i> Color game
                </a>
              </button>
              </div>
            </div>
          </div>

          <div className="carousel-item ">
            <div className="contenedor-image-texto">
              
                <img
                  src={require(`../imagenes/pokemon screenshoot.png`)}
                  className="d-block-hobbies"
                  alt="comida"
                />
              
              <div className="contenedor-texto">
                <h1 className="titulo-texto">Pokemon</h1>
                <p className="texto"> 
                En este proyecto llamado PokeApi trabajo con JS, HTML y CSS, usando Bootstrap. El principal objetivo de este trabajo es traer a través de la API "https://pokeapi.co/api/v2/pokemon/ditto" los pokemons contenidos en una carta, mostrando cada uno su ID y su poder en un POP-UP, Contiene un motor de búsqueda de pokemon separado.
                </p>
                <button
                type="button"
                class="btn-proyectos btn-secondary"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-custom-class="custom-tooltip"
                title="Búsqueda de pokemon y mapeo de cartas de pokemon con su ID y su poder correspondiente."
              >
                <a
                  class="dropdown-item"
                  href="https://62c5c6426dee8b05168be41e--statuesque-llama-7df0cc.netlify.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i class="bi-github" color="red"></i> Pókemon
                </a>
              </button>
              </div>
            </div>
          </div>

        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default CarruselImagenes;
