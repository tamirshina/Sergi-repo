import React from "react";
import isLeftToRight from "./IsLeftToRightFunc";
import handArrowEn from "../assets/08_HendarrowENG.png";
import handArrowHE from "../assets/12_handarrowHE.png";
import seeMoreEN from "../assets/09_Touchtoseemore.png";
import seeMoreHE from "../assets/13_extraInfoHe.png";
import "../css/Styles.css";

function HandArrowFront() {
  return (
    <div
      className={
        isLeftToRight() ? "handFrontContainer" : "heHandFrontContainer"
      }
    >
      <img
        src={isLeftToRight() ? seeMoreEN : seeMoreHE}
        alt="handArrowTitle"
        className={isLeftToRight() ? "gateHandEn" : null}
      />
      <img
        src={isLeftToRight() ? handArrowEn : handArrowHE}
        alt="handArrow"
        className={isLeftToRight() ? "handArrowEn" : "handArrowHe"}
      />
    </div>
  );
}

export default HandArrowFront;
