import React, { useEffect, useState } from "react";
import terrace from "../img/terrace.png";
import { motion } from "framer-motion";
import { pageAnim } from "../animations";
import "../styles/mainPage.scss";
import axios from "axios";

const MainPage = () => {
  const [weather, setWeather] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get(
        "http://api.weatherapi.com/v1/current.json?key=ced6e8ed8bb849b68d5125646221907&q=Szeged&aqi=no"
      )
      .then((data) => {
        setWeather(data.data);
        console.log(data.data.location.name);
        console.log(data.data.current.temp_c);
        console.log(data.data.current.condition.icon);
      })
      .catch((err) => console.log(err));
  }, []);

  /* 
  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=46.26&longitude=20.16&hourly=temperature_2m"
    )
    
      .then((response) => response.json() )
      .then((data) => setTemps(data.hourly.temperature_2m[data.hourly.temperature_2m.length-1]));
      if(temps>25){
        setMessage("Menj ki a szabadba élvezd a jó időt")
      } else if(temps<20){
        setMessage("Öltözz melegen")
      }
  }, []); */

  return (
    <motion.div
      className="mainPageWrapper"
      exit="exit"
      variants={pageAnim}
      initial="hidden"
      animate="show"
    >
      <div className="imgWrapper">
       {weather && ( <div className="weatherWrapper">
          <h3>{weather.location.name}</h3>
          <h3>{weather.current.temp_c} °C</h3>
          <img src={weather.current.condition.icon} alt="valami" />    
        </div>)}
        <img src={terrace} alt="terrace" />
        <div className="descriptionWrapper">
          <h3>
            Tengerre néző teraszunkkal várjuk kedves vendégeinket a csodaszép
            Kazincbarcikán, Soprontól keletre.
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default MainPage;
