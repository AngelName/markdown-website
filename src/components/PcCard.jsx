import React from "react";
import Card from "./HomeCard";
import pcImg from "../asset/preview-pc.png";

function PcCard(props) {
  return (
    <Card
      style={{
        width: "600px",
        height: "310px",
        background: "#f3f3f3",
        margin: "0 auto",
        backgroundImage: `url(${pcImg})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    ></Card>
  );
}

export default PcCard;
