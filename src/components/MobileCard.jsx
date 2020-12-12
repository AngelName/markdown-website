import React from "react";
import Card from "./HomeCard";
import mobileImg from "../asset/preview-m.png";

function MobileCard(props) {
  return (
    <Card
      style={{
        width: "280px",
        height: "460px",
        background: "#f3f3f3",
        margin: "0 auto",
        background: `url(${mobileImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    ></Card>
  );
}

export default MobileCard;
