import React, { useEffect, useRef } from "react";
import "../styles/orderingPage.scss";
import emailjs from "@emailjs/browser";

const OrderingPage = ({ cartItems }) => {
  const form = useRef();

  const sumPrice = () => {
    let sumResult = 0;
    cartItems.forEach((item) => (sumResult += Number(item.price)));

    if (sumResult === 0) {
      return "The cart is empty";
    } else {
      return `Total + Shipping(300 Ft): ${sumResult + 300} Ft`;
    }
  };

  const sendOrder = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ltrww8g",
        "template_s4e9i29",
        form.current,
        "Xp3QzsfkKgzqpOAfs"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="orderingPagesection">
      <form ref={form} onSubmit={sendOrder} className="orderingForm">
        <div className="addresSection">
          <h5>Name</h5>
          <input type="text" name="user_name" />
          <h5>E-mail</h5>
          <input type="text" name="user_email" />
          <h5>Address</h5>
          <input type="text" name="address" />
        </div>
        <div className="carContents">
          <ul>
            {cartItems !== undefined &&
              cartItems.length > 0 &&
              cartItems.map((item, index) => {
                return (
                  <div key={index} className="cartItems" name="message">
                    <li>{item.itemName}</li>
                  </div>
                );
              })}
            <h3 name="price">{sumPrice()}</h3>
          </ul>
        </div>
        <button>Send order</button>
      </form>
      <div className="submitBtn"></div>
    </div>
  );
};

export default OrderingPage;
