import React, { useEffect, useRef, useState } from "react";
import "../styles/pizzaPage.scss";
import pizzas from "../datas/pizzas";
import Cart from "./Cart";
import { v4 as uuidv4 } from "uuid";

const PizzaPage = () => {
  const { pizzaElements } = pizzas;

  const [cart, setCart] = useState(0);
  const [cartItems, setCartItems] = useState([]);





  const addToCart = (e) => {
    const newItem = `${e.target.name} ${e.target.id} cm (${e.target.value} Ft)`;
    setCart(cart + parseInt(e.target.value));
    setCartItems([...cartItems, newItem]);
  };
  const resetHandler = () => {
    setCart(0);
    setCartItems([]);
  };

  const deleteHandler = (clickedItemId) => {
    console.log(clickedItemId);
    const filteredArray = cartItems.filter((item) => item.id !== clickedItemId);
    console.log(filteredArray);
    setCartItems(filteredArray)
  };

  return (
    <>
      <div className="pizzaPageWrapper">
        <h1>Pizzáink</h1>
        <Cart />

        {pizzaElements.map((pizza, index) => (
          <div className="pizzaCard">
            <h4>{pizza.name}</h4>
            <div className="imgPricesSizesWrapper">
              <img key={index} src={pizza.img} alt="margherita" />
              <div className="sizePriceButtonWrapper">
                <div className="sizeAndPriceWrapper">
                  <div className="sizes">
                    {<li>{pizza.size28} cm</li>}
                    {<li>{pizza.size32} cm</li>}
                  </div>
                  <div className="prices">
                    <div className="price1">
                      <button
                        onClick={addToCart}
                        size={pizza.size28}
                        value={pizza.price28}
                        name={pizza.name}
                        id="28"
                      >
                        Kosárba
                      </button>
                      {<li>{`${pizza.price28} Ft`}</li>}
                    </div>
                    <div className="price2">
                      <button
                        onClick={addToCart}
                        size={pizza.size32}
                        value={pizza.price32}
                        name={pizza.name}
                        id="32"
                      >
                        Kosárba
                      </button>
                      {<li>{`${pizza.price32} Ft`}</li>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <h3>{`${cart} Ft`}</h3>

        <ul>
          {cartItems.map((item) => {
            const {
              name,
              img,
              price28,
              price32,
              size28,
              size32,
              id,
              isChecked,
            } = item;
            return (   
              <div className="cartItems">
                <li>{item}</li>
                <button onClick={() => deleteHandler(id)}>Törlés</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="price">
        <button onClick={resetHandler}>Nulláz</button>
      </div>
    </>
  );
};

export default PizzaPage;
