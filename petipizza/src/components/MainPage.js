import React, { useEffect, useState } from "react";
import terrace from "../img/terrace.png";
import { motion } from "framer-motion";
import { pageAnim } from "../animations";

const MainPage = () => {
  const [temps, setTemps] = useState("");

  useEffect(() => {

    //Kérdés: mit kell átállítani, hogy ne egy semmibe érkezzünk, ha rámegyünk az oldalra




    fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Szeged?unitGroup=metric&key=QQ23V5SKEZY598SD5UL2TQCGX&contentType=json"
    )
      .then((response) => response.json())
      .then((temps) => setTemps(temps));
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
        <img src={terrace} alt="terrace" />
        <div className="descriptionWrapper">
          <h3>
            Tengerre néző teraszunkkal várjuk kedves vendégeinket a csodaszép
            Kazincbarcikán, Soprontól keletre.
          </h3>
        </div>
      </div>
      <div className="weatherWrapper">
      {/*   <h3>
          https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Szeged?unitGroup=metric&key=QQ23V5SKEZY598SD5UL2TQCGX&contentType=json
        </h3> */}
      </div>
    </motion.div>
  );
};

export default MainPage;
