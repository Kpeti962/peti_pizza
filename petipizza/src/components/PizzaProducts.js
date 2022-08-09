import React, { useState } from "react";
import Cart from "./Cart";

const PizzaProducts = (
  pizza,
  index,
  name,
  img,
  price28,
  price32,
  size28,
  size32,
  id
) => {

    const [cart, setCart] = useState(0)

const handleChange = (e) => {
    let isChecked = e.target.checked;
    
    if(isChecked === true) {
     setCart(cart + parseInt(e.target.value))
        console.log(setCart);
    } else {
        setCart(cart - parseInt(e.target.value))
    }
    
}

  return (
    <div className="pizzaCard">
      <h4>{pizza.name}</h4>
      <div className="imgPricesSizesWrapper">
        <img key={index} src={pizza.img} alt="margherita" />
        <div className="sizePriceButtonWrapper">
          <div className="sizeAndPriceWrapper">
            <div className="sizes">
              {<li>{pizza.size28}</li>}
              {<li>{pizza.size32}</li>}
            </div>
            <div className="prices">
              <div className="price1">
                <input
                onChange={handleChange}
                  value={pizza.price28}
                  type="checkbox"
                  name="price28Selector"
                  id="price28Checkbox"
                />
                {<li>{`${pizza.price28} Ft`}</li>}
              </div>
              <div className="price2">
                <input
                onChange={handleChange}
                  value={pizza.price32}
                  type="checkbox"
                  name="price32Selector"
                  id="price32Checkbox"
                />
                {<li>{`${pizza.price32} Ft`}</li>}
              </div>
            </div>
          </div>
          <div className="btn">
            <button>Kosárba</button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaProducts;
