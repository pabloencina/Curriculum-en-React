//import React from "react";
import "../hojaDeEstiloCss/Navbar.css";
import React, { useEffect, useState } from "react";

function Navbar() {
  const [checked, setChecked] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );
  const [buttonText, setButtonText] = useState(localStorage.getItem("theme") === "dark" ? 'Modo Nocturno' : 'Modo Diurno');

  useEffect(() => {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, [checked]);

  const toggleThemeChange = () => {
    if (checked === false) {
      localStorage.setItem("theme", "dark");
      setChecked(true);
      setButtonText('Modo Nocturno')
      console.log("modo diurno");
    } else {
      localStorage.setItem("theme", "light");
      setChecked(false);
      setButtonText('Modo Diurno')
      console.log("modo nocturno");
    }
  };
  return (
    <nav className="navbar ">
      <form className="container-fluid justify-content-start">
        <button
          type="button"
          className="btn btn-sm btn-outline-secondary"
          //defaultChecked={checked}
          onClick={() => toggleThemeChange()}
        >
          {buttonText}
        </button>
      </form>
    </nav>
  );
}

export default Navbar;
