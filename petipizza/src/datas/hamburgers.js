import { v4 as uuidv4 } from "uuid";
import chicken from "../img/chicken.png";
import cheese from "../img/cheese.png";
import bacon from "../img/bacon.png";
import juicy from "../img/juicylucy.png";



const hamburgers = {
    hamburgerElements: [
       {
         name: "Chicken burger",
         img: chicken,
         price28: 1490,
         price32: 1890,
         size28: "Burger",
         size32: "Menü",
         id: uuidv4(),
       },
       {
         name: "Sajtburger",
         img: cheese,
         price28: 1890,
         price32: 2290,
         size28: "Burger",
         size32: "Menü",
         id: uuidv4(),
         
        
       },
       {
         name: "Bacon Burger",
         img: bacon,
         price28: 1790,
         price32: 2290,
         size28: "Burger",
         size32: "Menü",
         id: uuidv4(),
         
        
       },
       {
         name: "Juicy Lucy",
         img: juicy,
         price28: 2090,
         price32: 2590,
         size28: "Burger",
         size32: "Menü",
         id: uuidv4(),
         
        
       },
     ]
 };
 
 
 export default hamburgers;