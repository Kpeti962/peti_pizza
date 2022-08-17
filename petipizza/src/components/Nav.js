import React from "react";
import { Link } from "react-router-dom";
/* import { useLocation } from "react-router-dom"; */


const Nav = () => {
/*   const {pathname} = useLocation() */
   

  const navElements = [
    { name: "Főoldal", src: "" , pageName: "mainpage"},
    { name: "Pizzáink", src: "2", pageName: "pizzapage" },
    { name: "Hamburgereink", src: "3", pageName: "hamburgerpage" },
    { name: "Rólunk", src: "4", pageName: "aboutus" },
  ];

  return (
  
      <div className="navElementsWrapper">
        <ul>
          {navElements.map((element, index) => (
              <li key={index}>  
                {element.name}
                </li>
          ))}
        </ul>
        <h1>Petipizza</h1>
      </div>
   
  );
};

export default Nav;
