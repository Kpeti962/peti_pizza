import React from "react";
import MainPage from "./components/MainPage";
import Nav from "./components/Nav";
import "./styles/app.scss";


import PizzaPage from "./components/PizzaPage";
import HamburgerPage from "./components/HamburgerPage";
import AboutUs from "./components/AboutUs";
import Cart from "./components/Cart";


function App() {

  

  return (
    <div className="App">
      <Cart />
      <Nav />

      <MainPage />
      <PizzaPage />
      <HamburgerPage />
     <AboutUs />

      
     
    </div>
  );
}

export default App;
