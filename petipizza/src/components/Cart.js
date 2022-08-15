import React, { useEffect, useState } from "react";
import pizzas from "../datas/pizzas";

const Cart = ({ cartItems, setCartItems }) => {


  const deleteHandler = (clickedItemId) => {
   
    const filteredArray = cartItems.filter((item) => item.id !== clickedItemId); 
    
  
    setCartItems([]);
     setCartItems(filteredArray);
    console.log(filteredArray);
    console.log(clickedItemId); 
  };

/*   const resetHandler = () => {
   
    setCartItems([]);
     localStorage.removeItem("localCart"); 
  }; */

  return (

      <ul>
        {cartItems !== undefined &&
          cartItems.length > 0 &&
          cartItems.map((item) => {
            return (
              <div className="cartItems">
                <li>{item.itemName}</li>
                <button onClick={() => deleteHandler(item.id)}>Törlés</button>
              </div>
            );
          })}
      </ul>
  )
 
};

export default Cart;
