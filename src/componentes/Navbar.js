//import React from "react";
import "../hojaDeEstiloCss/Navbar.css";
import React, { useEffect, useState } from "react";

function Navbar() {
  const [checked, setChecked] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  useEffect(() => {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, [checked]);

  const toggleThemeChange = () => {
    if (checked === false) {
      localStorage.setItem("theme", "dark");
      setChecked(true);
      setChecked("modo diurno");
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
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Mis proyectos
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a
                class="dropdown-item"
                href="https://romantic-lichterman-e8dc4d.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                <i class="bi-github" color="red"></i> Gifos
                
              </a>
            </li>
            <li>
              <a
                class="dropdown-item"
                href="https://elaborate-rabanadas-a89099.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                <i class="bi-github" color="red"></i> Color game
              </a>
            </li>
            <li>
              <a
                class="dropdown-item"
                href="https://62c5c6426dee8b05168be41e--statuesque-llama-7df0cc.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                <i class="bi-github" color="red"></i> Pókemon
              </a>
            </li>
          </ul>
        </div>

        <button
          type="button"
          className="btn btn-sm btn-outline-secondary"
          defaultChecked={checked}
          onClick={() => toggleThemeChange()}
        >
          Modo Diurno
        </button>
      </form>
    </nav>
  );
}

export default Navbar;
