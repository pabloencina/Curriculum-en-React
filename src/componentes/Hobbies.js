import "../hojaDeEstiloCss/Hobbies.css";

function Hobbies() {
  return (
    <div id="cont-hobbies">
      <h1 id="hobbies-titulo">Mis hobbies</h1>
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
              <button className="btn-hobbies">
                <img
                  src={require(`../imagenes/Lecturas-para-mayores.jpg`)}
                  className="d-block-hobbies "
                  alt="lectura"
                />
              </button>
              <div className="contenedor-texto">
                <h1 className="titulo-texto">Lectura</h1>
                <p className="texto">
                  Uno de mis hobbies preferidos a la hora de despejar mi cabeza
                  en la programación es leer, ultimamente estoy leyendo novelas
                  historicas, mi autora preferida en ese rubro es Isabel
                  Allende.
                </p>
              </div>
            </div>
          </div>

          <div className="carousel-item ">
            <div className="contenedor-image-texto">
              <button className="btn-hobbies">
                <img
                  src={require(`../imagenes/deporteyadicciones.jpg`)}
                  className="d-block-hobbies "
                  alt="deporte"
                />
              </button>
              <div className="contenedor-texto">
                <h1 className="titulo-texto">Deporte</h1>
                <p className="texto">
                  Entreno todas las mañanas alternando musculación y natación.
                </p>
              </div>
            </div>
          </div>

          <div className="carousel-item ">
            <div className="contenedor-image-texto">
              <button className="btn-hobbies">
                <img
                  src={require(`../imagenes/section_4_health_eating_at_restaurants.jpeg`)}
                  className="d-block-hobbies"
                  alt="comida"
                />
              </button>
              <div className="contenedor-texto">
                <h1 className="titulo-texto">Cocina saludable</h1>
                <p className="texto"> 
                  Me encanta cocinar e inventar recetas, realicé un curso en el año 2014 de alimentación consciente y en el 2011 me recibí de técnico profesional gastronómico.
                </p>
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

export default Hobbies;
