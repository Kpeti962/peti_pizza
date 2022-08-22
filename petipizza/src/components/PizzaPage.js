import React, { useEffect, useState } from "react";
import "../styles/pizzaPage.scss";
import pizzas from "../datas/pizzas";
import Cart from "./Cart";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"; 
//Amit kérdezni: Link, Routes; Cart komponensbe a local storaget átimportálni; id átadása a deletehandler-nél

const PizzaPage = ({ cartItems, setCartItems, cart, setCart }) => {
  const { pizzaElements } = pizzas;

/*   const [cart, setCart] = useState(0);
  const [cartItems, setCartItems] = useState([]); */

  /* useEffect(()=> {
  if(localStorage.getItem("localCart")){
    const storedCart = JSON.parse(localStorage.getItem("localCart"));
    setCartItems(storedCart);
  }
  },[]); */

  useEffect(() => {
    localStorage.setItem("localCart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (e) => {
    e.preventDefault();

    const newItem = `${e.target.name} ${e.target.title}  cm (${e.target.value} Ft)`;
    setCart(cart + parseInt(e.target.value));
    setCartItems([
      ...cartItems,
      { itemName: newItem, id: uuidv4(), price: e.target.value },
    ]);
    localStorage.setItem("localCart", JSON.stringify([...cartItems, newItem]));
  };


  const sumPrice = () => {
    let sumResult = 0;
    cartItems.forEach((item) => (sumResult += Number(item.price)));
    return sumResult;
  };
  return (
    <>
      <div className="pizzaPageWrapper">
        <h1>Pizzáink</h1>

        {pizzaElements.map((pizza, index) => (
          <div key={index}  className="pizzaCard">
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
                        title={28}
                        id={uuidv4()}
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
                        title={32}
                        id={uuidv4()}
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
        <h3>{`${sumPrice()} Ft`}</h3>

     
      </div>
      <div className="price">

       
      </div>
    
    </>
  );
};

export default PizzaPage;
