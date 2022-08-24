import React, { useEffect, useState } from "react";
import terrace from "../img/terrace.png";
import { motion } from "framer-motion";
import { pageAnim } from "../animations";
import "../styles/mainPage.scss";
import axios from "axios";


const MainPage = () => {
  const [weather, setWeather] = useState(null);

   useEffect(() => {
    axios
      .get(
       `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=Szeged&aqi=no`
      )
      .then((data) => {
        setWeather(data.data);
    
      })
      .catch((err) => console.log(err));
  }, []); 
  


  return (
    <motion.div
      className="mainPageWrapper"
      exit="exit"
      variants={pageAnim}
      initial="hidden"
      animate="show"
    >
      <div className="imgWrapper">
        {weather && (
          <div className="weatherWrapper">
            <h4>{weather.location.name}</h4>
            <h4>{weather.current.temp_c} °C</h4>
            <img src={weather.current.condition.icon} alt="" />
          </div>
        )}
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
