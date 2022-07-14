import "./App.css";

import Navbar from "./componentes/Navbar";
import Acordeon from "./componentes/Acordeon";
import CarruselImagenes from "./componentes/CarruselImg";
import Presentacion from "./componentes/Presentacion";
import Habilidades from "./componentes/Habilidades";
import Zocalo from "./componentes/Zocalo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Presentacion />
      <CarruselImagenes />
      <Acordeon />
      <Habilidades />
      <Zocalo/>
    </div>
  );
}

export default App;
