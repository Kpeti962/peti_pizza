import React, { useEffect, useRef, useState } from "react";
import "../styles/pizzaPage.scss";
import pizzas from "../datas/pizzas";

const PizzaPage = () => {
  const { pizzaElements } = pizzas;

  const [cart, setCart] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  
  const handleChange = (e) => {
  const newItem = `${e.target.name} ${e.target.size} cm (${e.target.value} Ft), `;

    let isChecked = e.target.checked;

    if(isChecked === true) {
      setCart(cart + parseInt(e.target.value));
      setCartItems([cartItems+newItem]);
    } else {
      setCart(cart - parseInt(e.target.value));
    }
    
  }
  useEffect(() => {
   localStorage.setItem(2, JSON.stringify(cart))
  }, [cart]);
  useEffect(() => {
   localStorage.setItem(1, JSON.stringify(cartItems))
  }, [cart]);


  const addToCart = (e) => {
    setCart(0);
    setCartItems([])

  }


  return (
    <>
    <div className="pizzaPageWrapper">
      <h1>Pizzáink</h1>
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
                 <input
                 size={pizza.size28}
                 onChange={handleChange}
                 value={pizza.price28}
                 type="checkbox"
                 name={pizza.name}
                 id="price28Checkbox"
                 />
                 {<li>{`${pizza.price28} Ft`}</li>}
               </div>
               <div className="price2">
                 <input
                 size={pizza.size32}
                 onChange={handleChange}
                 value={pizza.price32}
                 type="checkbox"
                 name={pizza.name}
                 id="price32Checkbox"
                 />
                 {<li>{`${pizza.price32} Ft`}</li>}
               </div>
             </div>
           </div>
         </div>
       </div>
       
     </div>
      ))}
    <h3>{`${cart} Ft`}</h3>
    <h4>{cartItems}</h4>
    </div>
    <div className="price">
      <button onClick={addToCart}>Kosárba</button>
    </div>
      </>
  );
};

export default PizzaPage;
