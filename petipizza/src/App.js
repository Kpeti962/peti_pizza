import React from "react";
import MainPage from "./components/MainPage";
import Nav from "./components/Nav";
import "./styles/app.scss";
import PizzaPage from "./components/PizzaPage";
import HamburgerPage from "./components/HamburgerPage";
import AboutUs from "./components/AboutUs";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

 

  return (
    <div className="App">
      <Nav />
      <Routes location={location} key={location.pathname}>
        <Route path="mainpage" element={<MainPage />} />
        <Route path="/pizzapage" element={<PizzaPage />} />
        <Route path="/hamburgerpage" element={<HamburgerPage />} />
      </Routes>
        <AboutUs />
    </div>
  );
}

export default App;
