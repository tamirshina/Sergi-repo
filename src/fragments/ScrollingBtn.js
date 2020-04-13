import React, { useLayoutEffect } from "react";
import { timer, removeTimer } from "../TimerHundler";
import scrollUpImg from '../assets/11_textArrowUP.png';
import scrollDwonImg from '../assets/37-down-arrow.png';
import isLeftToRight from './IsLeftToRightFunc';
import "../css/Styles.css";

function ScrollingBtn({ homeBtnLogic, type, forwardRef }) {

  useLayoutEffect(() => {
    console.log(forwardRef.current);
  });

  function resetTimer() {

    if (type === 'front') {
      return;
    }
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

  function whichCss() {

    switch (type) {
      case 'famous':
        return "ras-scroll-button-container";

      case 'front':
        if (isLeftToRight()) {
          return "scroll-button-container";
        } else {
          return "heb-front-scroll-button-container"
        }

      case 'particular':
        if (isLeftToRight()) {
          return "scroll-button-container";
        } else {
          return "heb-scroll-button-container"
        }
      default:
        return "scroll-button-container";
    }
  }

  return (
    <div className={whichCss()}>
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
