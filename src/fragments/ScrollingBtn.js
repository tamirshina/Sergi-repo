import React, { useLayoutEffect } from "react";
import { timer, removeTimer } from "../TimerHundler";
import scrollUpImg from '../assets/11_textArrowUP.png';
import scrollDwonImg from '../assets/37-down-arrow.png';
import "../css/Styles.css";

function ScrollingBtn({ homeBtnLogic, forwardRef }) {

  useLayoutEffect(() => {
    console.log(forwardRef.current);
  });

  function resetTimer() {
    removeTimer();
    timer(homeBtnLogic);
  }

  function scrollDown() {
    resetTimer();

    if (forwardRef) {
      forwardRef.current.scrollTop += 10;
    }
  }

  function scrollUp() {
    resetTimer();

    if (forwardRef) {
      forwardRef.current.scrollTop -= 10;
    }
  }

  return (
    <div className="scroll-button-container">
      <img
        src={scrollUpImg}
        alt="scroll-up"
        onClick={scrollUp}
        className={"left-scroll"}
      />
      <img src={scrollDwonImg} alt="scroll-up" onClick={scrollDown} />
    </div>
  );
}

export default ScrollingBtn;
