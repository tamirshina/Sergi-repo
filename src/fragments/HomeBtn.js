import React, { useRef } from "react";
import homeImg from "../assets/35-home.png";
import "../css/Styles.css";

function HomeBtn({ homeBtnLogic }) {
  const homeButton = useRef(null);

  return (
    <img
      ref={homeButton}
      src={homeImg}
      alt="homeBtn"
      id="homeBtn"
      onClick={homeBtnLogic}
      className={"homeBtn"}
    />
  );
}

export default HomeBtn;
