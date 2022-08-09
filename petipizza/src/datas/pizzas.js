import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import margherita from "../img/margherita.png";
import ham from "../img/ham.png";
import kukorica from "../img/kukorica.png";
import funghi from "../img/funghi.png";




const pizzas = {
   pizzaElements: [
      {
        name: "Margharita pizza",
        img: margherita,
        price28: 1390,
        price32: 1790,
        size28: 28,
        size32: 32,
        id: uuidv4(),
        isChecked: false
       
      },
      {
        name: "Sonkás pizza",
        img: ham,
        price28: 1790,
        price32: 2090,
        size28: 28,
        size32: 32,
        id: uuidv4(),
        isChecked: false
       
      },
      {
        name: "Kukoricás pizza",
        img: kukorica,
        price28: 1690,
        price32: 2090,
        size28: 28,
        size32: 32,
        id: uuidv4(),
        isChecked: false
       
      },
      {
        name: "Gombás pizza",
        img: funghi,
        price28: 1690,
        price32: 1990,
        size28: 28,
        size32: 32,
        id: uuidv4(),
        isChecked: false
       
      },
    ]
};


export default pizzas;