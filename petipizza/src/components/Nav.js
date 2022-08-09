import React from "react";


const Nav = () => {

   

  const navElements = [
    { name: "Főoldal", src: "" },
    { name: "Pizzáink", src: "" },
    { name: "Hamburgereink", src: "" },
    { name: "Rólunk", src: "" },
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
