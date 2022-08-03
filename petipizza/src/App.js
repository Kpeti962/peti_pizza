import React from "react";
import MainPage from "./components/MainPage";
import Nav from "./components/Nav";
import "./styles/app.scss";


import PizzaPage from "./components/PizzaPage";
import HamburgerPage from "./components/HamburgerPage";


function App() {

  

  return (
    <div className="App">
      <Nav />
     

      <MainPage />
      <PizzaPage />
      <HamburgerPage />
      
     
    </div>
  );
}

export default App;
