import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/nav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import barssolid from "../img/bars-solid.svg";

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const navElements = [
    { name: "Főoldal", src: "1", pageName: "peti_pizza" },
    { name: "Pizzáink", src: "2", pageName: "pizzapage" },
    { name: "Hamburgereink", src: "3", pageName: "hamburgerpage" },
  ];

  return (
    <>
      <div className="navElementsWrapper">
        <button onClick={handleToggle}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
          {navElements.map((element, index) => (
            <li onClick={handleToggle} key={index}>
              <Link to={`/${element.pageName}`}>{element.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="title">
        <h1>Petipizza</h1>
      </div>
    </>
  );
};

export default Nav;
