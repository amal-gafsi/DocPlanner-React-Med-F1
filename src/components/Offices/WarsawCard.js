import React from "react";
import { Button } from "react-bootstrap";

const WarsawCard = () => {
  return (
    <div className="warsawCard">
      <img
        scr="https://www.docplanner.com/images/warsaw.png"
        srcset="https://www.docplanner.com/images/warsaw.png 1x, https://www.docplanner.com/images/warsaw@2x.png 2x"
      />
      <p>Warsaw</p>
    </div>
  );
};

export default WarsawCard;
