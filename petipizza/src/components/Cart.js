import React, { useEffect, useState } from "react";
import "../styles/cart.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, setCartItems, localCart, setLocalCart }) => {
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
      return "The cart is empty";
    } else {
      return `Total: ${sumResult} Ft`;
    }
  };

  return (
    <>
      <div className="btnModal">
        <h4>{cartItems.length}</h4>
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 5px #FF0000",
          }}
          onClick={toggleModal}
        >
          <FontAwesomeIcon icon={faCartShopping} />
        </motion.button>
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
                    <div key={index} className="cartItems">
                      <li>{item.itemName}</li>
                      <button onClick={() => deleteHandler(item.id)}>
                        Delete
                      </button>
                    </div>
                  );
                })}
            </ul>
            <h1></h1>
            <button className="closeModal" onClick={toggleModal}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <div className="sumBtn">
              <h3>{sumPrice()}</h3>

              <Link to={"/ordering"}>
                {cartItems.length > 0 && (
                  <button
                    onClick={() => {
                      setModal(false);
                    }}
                  >
                    Buy it
                  </button>
                )}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
