import React from "react";
import MainPage from "./components/MainPage";
import Nav from "./components/Nav";
import "./styles/app.scss";
import PizzaPage from "./components/PizzaPage";
import HamburgerPage from "./components/HamburgerPage";
import AboutUs from "./components/AboutUs";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {


  return (
    <div className="App">
      <Nav />
   
      
          <MainPage />
          <PizzaPage />
          <HamburgerPage />
          <AboutUs />
        
     
    </div>
  );
}

export default App;
