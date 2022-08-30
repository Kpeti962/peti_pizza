import React, { useEffect, useState } from "react";
import "../styles/foodPage.scss";
import hamburgers from "../datas/hamburgers";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import { pageAnim, successAnim } from "../animations";


const HamburgerPage = ({ cartItems, setCartItems, cart, setCart }) => {
  const [added, setAdded] = useState(false);

  const { hamburgerElements } = hamburgers;

  useEffect(() => {
    localStorage.setItem("localCart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (e) => {
    e.preventDefault();
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);

    const newItem = `${e.target.name} ${e.target.title} (${e.target.value} Ft)`;
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
      <motion.div
        className="foodPageWrapper"
        exit="exit"
        variants={pageAnim}
        initial="hidden"
        animate="show"
      >
        <h1>Hamburgereink</h1>

        {hamburgerElements.map((hamburger, index) => (
          <div key={index} className="foodCard">
            <h4>{hamburger.name}</h4>
            <div className="imgPricesSizesWrapper">
              <img key={index} src={hamburger.img} alt="margherita" />
              <div className="sizePriceButtonWrapper">
                <div className="sizeAndPriceWrapper">
                  <div className="sizes">
                    {<li>{hamburger.size28}</li>}
                    {<li>{hamburger.size32}</li>}
                  </div>
                  <div className="prices">
                    <div className="price1">
                      <button
                        onClick={addToCart}
                        size={hamburger.size28}
                        value={hamburger.price28}
                        name={hamburger.name}
                        title={"Burger"}
                        id={uuidv4()}
                      >
                        Kosárba
                      </button>
                      {<li>{`${hamburger.price28} Ft`}</li>}
                    </div>
                    <div className="price2">
                      <button
                        onClick={addToCart}
                        size={hamburger.size32}
                        value={hamburger.price32}
                        name={hamburger.name}
                        title={"Menü"}
                        id={uuidv4()}
                      >
                        Kosárba
                      </button>
                      {<li>{`${hamburger.price32} Ft`}</li>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <h3>{`${sumPrice()} Ft`}</h3>
      </motion.div>
      <div className="price"></div>
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

export default HamburgerPage;
