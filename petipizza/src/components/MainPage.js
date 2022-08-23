import React, { useEffect, useState } from "react";
import terrace from "../img/terrace.png";
import { motion } from "framer-motion";
import { pageAnim } from "../animations";
import "../styles/mainPage.scss"

const MainPage = () => {
  const [temps, setTemps] = useState("");

  useEffect(() => {
    fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Szeged?unitGroup=metric&key=QQ23V5SKEZY598SD5UL2TQCGX&contentType=json"
    )
      .then((response) => response.json())
      .then((data) => setTemps(data.days[0].temp));
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
      <div className="weatherWrapper">
        <h3>A mai hőmérséklet: {temps} °C</h3>
      </div>
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
