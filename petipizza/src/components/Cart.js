import React, { useEffect, useState } from "react";
import pizzas from "../datas/pizzas";
import "../styles/cart.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark,faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cartItems, setCartItems }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const deleteHandler = (clickedItemId) => {
    const filteredArray = cartItems.filter((item) => item.id !== clickedItemId);

    setCartItems([]);
    setCartItems(filteredArray);
  };



  const sumPrice = () => {
    let sumResult = 0;
    cartItems.forEach((item) => (sumResult += Number(item.price)));
    if (sumResult === 0) {
      return "A kosár üres";
    } else {
      return `Összesen + Szállítási díj(300 Ft): ${sumResult + 300} Ft`;
    }
  };

  return (
    <>
    <div className="btnModal">
      <h4>{cartItems.length}</h4>
      <button onClick={toggleModal}>
      <FontAwesomeIcon icon={faCartShopping} />
      </button>
    </div>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modalContent">
            <ul>
              {cartItems !== undefined &&
                cartItems.length > 0 &&
                cartItems.map((item, index) => {
                  return (
                    <div  key={index} className="cartItems">
                      <li>{item.itemName}</li>
                      <button onClick={() => deleteHandler(item.id)}>
                        Törlés
                      </button>
                    </div>
                  );
                })}
            </ul>
            <button className="closeModal" onClick={toggleModal}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <h3>{sumPrice()}</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
