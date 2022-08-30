import React, { useEffect, useState } from "react";
import "../styles/foodPage.scss";
import pizzas from "../datas/pizzas";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import { pageAnim, successAnim } from "../animations";
import Alert from "react-bootstrap/Alert";

const PizzaPage = ({ cartItems, setCartItems, cart, setCart }) => {
  const [added, setAdded] = useState(false);

  const { pizzaElements } = pizzas;

/*   useEffect(() => {
    localStorage.setItem("localCart", JSON.stringify(cartItems));
  }, [cartItems]); */

  const addToCart = (e) => {
    e.preventDefault();

    setAdded(true);
    setTimeout(() => setAdded(false), 1500);

    const newItem = `${e.target.name} ${e.target.title}  cm (${e.target.value} Ft)`;
    setCart(cart + parseInt(e.target.value));
    setCartItems([
      ...cartItems,
      { itemName: newItem, id: uuidv4(), price: e.target.value },
    ]);
    localStorage.setItem("localCart", JSON.stringify(cartItems));
  };

  const sumPrice = () => {
    let sumResult = 0;
    cartItems.forEach((item) => (sumResult += Number(item.price)));
    return sumResult;
  };
  return (
    <>
      <motion.div
        className="foodPageWrapper"
        exit="exit"
        variants={pageAnim}
        initial="hidden"
        animate="show"
      >
        <h1>Pizzáink</h1>

        {pizzaElements.map((pizza, index) => (
          <div key={index} className="foodCard">
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
      </motion.div>

      {added && (
        <motion.div
          className="added"
          exit="exit"
          variants={successAnim}
          initial="hidden"
          animate="show"
        >
          <h2>Tétel hozzáadva a kosárhoz</h2>
        </motion.div>
      )}
    </>
  );
};

export default PizzaPage;
