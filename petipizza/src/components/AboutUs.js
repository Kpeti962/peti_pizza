import React from "react";
import "../styles/aboutUs.scss";

const AboutUs = () => {
  return (
    <div className="aboutUsWrapper">
      <div className="contactsection">
        <h4>Contact:</h4>
        <h4>Szeged, Streetname Str. 10.</h4>
        <h4>
          <a href="kpeti962@gmail.com">kpeti962@gmail.com</a>
        </h4>
        <h3>
          <a href="petipizza.hu">Facebook</a>
        </h3>
      </div>
      <div className="openingSection">
        <h3>Opening time:</h3>
        <h4>M-S: 11:00-23:00</h4>
      </div>
    </div>
  );
};

export default AboutUs;
