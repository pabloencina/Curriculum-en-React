import "./App.css";

import Navbar from "./componentes/Navbar";
import Acordeon from "./componentes/Acordeon";
import CarruselImagenes from "./componentes/CarruselImg";
import Presentacion from "./componentes/Presentacion";
import Habilidades from "./componentes/Habilidades";
import Zocalo from "./componentes/Zocalo";
import Hobbies from "./componentes/Hobbies";
//import { useState } from "react";

function App() {
  //const [show,setShow] = useState("")

  /*const mostrarComponenteHobbies = () =>{
    setShow(<Hobbies/>)
  }*/
  return (
    <div className="App">
      <Navbar />
      <Presentacion />
      <Hobbies/>
      <CarruselImagenes />
      <Acordeon />
      <Habilidades />
      <Zocalo/>
    </div>
  );
}

export default App;
