import React from "react";


const Nav = () => {

   

  const navElements = [
    { name: "Főoldal", src: "MainPage.js" },
    { name: "Pizzáink", src: "PizzaPage.js" },
    { name: "Hamburgereink", src: "" },
    { name: "Rólunk", src: "" },
  ];

  return (
  
      <div className="navElementsWrapper">
        <ul>
          {navElements.map((element, index) => (
              <li key={index} Link={element.src}>  
                {element.name}
                </li>
          ))}
        </ul>
        <h1>Petipizza</h1>
      </div>
   
  );
};

export default Nav;
