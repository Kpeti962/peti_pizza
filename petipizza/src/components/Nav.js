import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/nav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const navElements = [
    { name: "Main Page", src: "1", pageName: "peti_pizza" },
    { name: "Pizzas", src: "2", pageName: "pizzapage" },
    { name: "Hamburgers", src: "3", pageName: "hamburgerpage" },
  ];

  return (
    <>
      <div className="navElementsWrapper">
        <button onClick={handleToggle}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
          {navElements.map((element, index) => (
            <motion.li
              transition={{ duration: 0.1 }}
              whileHover={{
                scale: 1.05,
                textShadow: "0px 0px 8px #ffffff",
                boxShadow: "0px 0px 8px #ffffff",
              }}
              onClick={handleToggle}
              key={index}
            >
              <Link to={`/${element.pageName}`}>{element.name}</Link>
            </motion.li>
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
