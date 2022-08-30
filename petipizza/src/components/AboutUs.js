import React from "react";
import "../styles/aboutUs.scss";

const AboutUs = () => {
  return (
    <div className="aboutUsWrapper">
      <div className="contactsection">
        <h4>Kapcsolat:</h4>
        <h4>Szeged, Tüszökcsőgyulladás sétány 69.</h4>
        <h4>
          <a href="kpeti962@gmail.com">pepepizza@gmail.org</a>
        </h4>
        <h3>
          <a href="petipizza.hu">Facebook</a>
        </h3>
      </div>
      <div className="openingSection">
        <h3>Nyitvatartás:</h3>
        <h4>H-V: 11:00-23:00</h4>
      </div>
    </div>
  );
};

export default AboutUs;
