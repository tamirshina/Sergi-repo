import React, { useContext, useRef } from "react";
import FrontTitleft from "../fragments/FrontTitleLeft";
import isLeftToRight from "../fragments/IsLeftToRightFunc";
import LangContext from "../SergiContext";
import russianText from "./RussianText";
import englishText from "./EnglishText";
import HandArrowFront from "../fragments/HandArrowFront";
import hebrewHeader from "../assets/23_title_HEB.png";
import hebrewText from "./HebrewText";
import "../css/Styles.css";
import ScrollingBtn from "../fragments/ScrollingBtn";

function TextInserter() {
  const lang = useContext(LangContext).lang;
  const textParaEl = useRef(null);

  function createMarkup(str) {
    return { __html: str };
  }

  function whichFileToUse() {
    if (lang === "hebrew") {
      return hebrewText.frontPage;
    }
    if (lang === "english") {
      return englishText.frontPage;
    } else {
      return russianText.frontPage;
    }
  }

  return (
    <>
      <HandArrowFront />
      <div
        id="frontBox"
        className={isLeftToRight() ? "leftToRightTextBox" : "textBoxCssFront"}
      >
        {isLeftToRight() ? (
          <FrontTitleft />
        ) : (
          <img
            alt="hebHeader"
            src={hebrewHeader}
            className="frontPageHeTitle"
          />
        )}
        <p
          ref={textParaEl}
          className={isLeftToRight() ? "lefToRightTexstCss" : "textHeFront"}
          id="openingTextBox"
          dangerouslySetInnerHTML={createMarkup(whichFileToUse())}
        ></p>
        <ScrollingBtn type={"front"} forwardRef={textParaEl} />
      </div>
    </>
  );
}

export default TextInserter;
