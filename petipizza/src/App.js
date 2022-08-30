import React, { useState } from "react";
import MainPage from "./components/MainPage";
import Nav from "./components/Nav";
import "./styles/app.scss";
import PizzaPage from "./components/PizzaPage";
import HamburgerPage from "./components/HamburgerPage";
import AboutUs from "./components/AboutUs";
import { Routes, Route, useLocation } from "react-router-dom";
import Cart from "./components/Cart";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  const [cart, setCart] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
      <Nav />
      <Cart
        cartItems={cartItems}
        setCartItems={setCartItems}
        cart={cart}
        setCart={setCart}
      />
      <AnimatePresence
        exitBeforeEnter
        //adjust scroll behaviour
        onExitComplete={() => {
          window.scrollTo(0, 0);
        }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/peti_pizza" element={<MainPage />} />
          <Route
            path="/pizzapage"
            element={
              <PizzaPage
                cartItems={cartItems}
                setCartItems={setCartItems}
                cart={cart}
                setCart={setCart}
              />
            }
          />
          <Route
            path="/hamburgerpage"
            element={
              <HamburgerPage
                cartItems={cartItems}
                setCartItems={setCartItems}
                cart={cart}
                setCart={setCart}
              />
            }
          />
        </Routes>
      </AnimatePresence>
      <AboutUs />
    </div>
  );
}

export default App;
