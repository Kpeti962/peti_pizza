import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const navElements = [
    { name: "Főoldal", src: "1", pageName: "" },
    { name: "Pizzáink", src: "2", pageName: "pizzapage" },
    { name: "Hamburgereink", src: "3", pageName: "hamburgerpage" },
  ];

  return (
    <>
    <div className="navElementsWrapper">
      <ul>
        {navElements.map((element, index) => (
          <li key={index}>
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
