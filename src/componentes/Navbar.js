//import React from "react";
import "../hojaDeEstiloCss/Navbar.css";
import React, { useEffect, useState } from "react";
import Hobbies from "./Hobbies";

function Navbar() {
  const [checked, setChecked] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  const [show, setShow] = useState(<Hobbies />);

  const mostrarComponenteHobbies = () => {
    setShow(show);
  };

  useEffect(() => {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, [checked]);

  const toggleThemeChange = () => {
    if (checked === false) {
      localStorage.setItem("theme", "dark");
      setChecked(true);
      setChecked("modo diurno")
      console.log("modo diurno");
    } else {
      localStorage.setItem("theme", "light");
      setChecked(false);
      console.log("modo nocturno");
    }
  };

  return (
    <nav className="navbar ">
      <form className="container-fluid justify-content-start">
        <button
          type="button"
          className="btn btn-sm btn-outline-secondary"
          defaultChecked={checked}
          onClick={() => toggleThemeChange()}
        >
          Modo Diurno
        </button>

        <button
          className="btn btn-sm btn-outline-secondary"
          type="button"
          onClick={() => console.log(mostrarComponenteHobbies)}
        >
          Hobbies
        </button>
      </form>
    </nav>
  );
}

export default Navbar;
