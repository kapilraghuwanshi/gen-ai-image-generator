import React, { useEffect, useState } from "react";
import image1 from "../images/City of Tomorrow.jpeg";
import image2 from "../images/Underwater Paradis.jpeg";
import image3 from "../images/Magical Creatures.jpeg";
import image4 from "../images/Time Travel Adventure.jpeg";
import image5 from "../images/Celebration of Life.jpeg";

const ChooseResults = ({ onSelect }) => {
  const handleClick = (value) => {
    onSelect(value);
  };

  const availableOptions = [
    { name: "City of Tomorrow", src: image1 },
    { name: "Underwater Paradise", src: image2 },
    { name: "Magical Creatures", src: image3 },
    { name: "Time Travel Adventure", src: image4 },
    { name: "Celebration of Life", src: image5 },
  ];

  return (
    <>
      <div style={{ marginTop: 20 }}>Choose from the below ideas</div>
      <div className="recentImageBox">
        {availableOptions.map((value) => (
          <>
            <div key={value.name} onClick={() => handleClick(value.name)}>
              <img className="recentImage" src={value.src} alt={value.name} />
              <div>{value.name}</div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default ChooseResults;
