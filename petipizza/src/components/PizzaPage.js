import React from "react";
import { v4 as uuidv4 } from "uuid";
import margherita from "../img/margherita.png";
import ham from "../img/ham.png";
import kukorica from "../img/kukorica.png";
import funghi from "../img/funghi.png";
import "../styles/pizzaPage.scss"

const PizzaPage = () => {
  const pizzaElements = [
    {
      name: "Margharita",
      img: margherita,
      price28: "1390 Ft",
      price32: "1790 Ft",
      size28: "28 cm",
      size32: "32 cm",
      id: uuidv4(),
    },
    {
      name: "Sonkás",
      img: ham,
      price28: "1790 Ft",
      price32: "2090 Ft",
      size28: "28 cm",
      size32: "32 cm",
      id: uuidv4(),
    },
    {
      name: "Kukoricás",
      img: kukorica,
      price28: "1690 Ft",
      price32: "2090 Ft",
      size28: "28 cm",
      size32: "32 cm",
      id: uuidv4(),
    },
    {
      name: "Gombás",
      img: funghi,
      price28: "1690 Ft",
      price32: "1990 Ft",
      size28: "28 cm",
      size32: "32 cm",
      id: uuidv4(),
    },
  ];

  return (
    <div className="pizzaPageWrapper">
      <h1>Pizzáink</h1>
      {pizzaElements.map((pizza, index) => (
        <div className="pizzaCard">
          <h4>{pizza.name}</h4>
          <div className="imgPricesSizesWrapper">
            <img src={pizza.img} alt="margherita" />
            <div className="sizePriceButtonWrapper">
              <div className="sizeAndPriceWrapper">
                <div className="sizes">
                  {<li>{pizza.size28}</li>}

                  {<li>{pizza.size32}</li>}
                </div>
                <div className="prices">
                  <div className="price1">
                    <input type="checkbox" name="" id="" />
                    {<li>{pizza.price28}</li>}
                  </div>
                  <div className="price2">
                    <input type="checkbox" name="" id="" />
                    {<li>{pizza.price32}</li>}
                  </div>
                </div>
              </div>
              <div className="btn">
              <button>Kosárba</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PizzaPage;
