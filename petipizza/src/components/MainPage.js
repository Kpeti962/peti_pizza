import React from "react";
import terrace from '../img/terrace.png';


const MainPage = () => {

    return (
<div className="mainPageWrapper">
    <div className="imgWrapper">
    <img src={terrace} alt="terrace" />
    <div className="descriptionWrapper">
        <h3>Tengerre néző teraszunkkal várjuk kedves vendégeinket a csodaszép Kazincbarcikán, Soprontól keletre.</h3>
    </div>
    </div>
</div>
    )
};





export default MainPage;

