import React, { useState, useContext, useEffect } from 'react';
import scrollBtn from './02_Continue-text-button-small.png';
import isLeftToRight from './IsLeftToRightFunc';
import LangContext from './SergiContext';
import russianText from './russianText';
import englishText from './englishText';
import hebrewText from './hebrewText';
import handArrowEn from './08_HendarrowENG.png';
import handArrowHE from './12_handarrowHE.png';
import seeMoreEN from './09_Touchtoseemore.png';
import seeMoreHE from './13_extraInfoHe.png';
import headerUnderline from './14_Headerunderline.png';
import upperTextArrow from './11_textArrowUP.png';
import hebrewHeader from './23_title_HEB.png';
import { useMeasure } from './lib/useMeasure';
import './Styles.css';

function TextInserter() {
  const lang = useContext(LangContext).lang;
  const [bind, { height }] = useMeasure();
  const [isTopScrollBtn, setIsTopScrollBtn] = useState(false);
  const [isButtomScrollBtn, setIsButtomScrollBtn] = useState(true);
  const [textBox, setTextBox] = useState(null);
  useEffect(() => {
    if (bind.ref) {
      setTextBox(bind.ref.current);
    }
  }, [bind, height]);

  function renderButtons() {
    const top = bind.ref.current.scrollTop;
    if (top >= height - 200) {
      setIsButtomScrollBtn(false);
    }
    if (top <= 200) {
      setIsTopScrollBtn(false);
    }
  }
  function whichFileToUse() {
    if (lang === 'hebrew') {
      return JSON.parse(JSON.stringify(hebrewText.frontPage));
    }
    if (lang === 'english') {
      return JSON.parse(JSON.stringify(englishText.frontPage));
    } else {
      return JSON.parse(JSON.stringify(russianText.frontPage));
    }
  }

  const scrollAndUpdateDown = () => {
    renderButtons();
    textBox.scrollTop += 200;
    setIsTopScrollBtn(true);
  };

  const scrollAndUpdateUp = () => {
    renderButtons();
    textBox.scrollTop -= 200;
    setIsButtomScrollBtn(true);
  };

  return (
    <>
      <div
        className={
          isLeftToRight() ? 'handFrontContainer' : 'heHandFrontContainer'
        }>
        <img
          src={isLeftToRight() ? seeMoreEN : seeMoreHE}
          alt='handArrowTitle'
          className={isLeftToRight() ? 'gateHandEn' : null}
        />
        <img
          src={isLeftToRight() ? handArrowEn : handArrowHE}
          alt='handArrow'
          className={isLeftToRight() ? 'handArrowEn' : 'handArrowHe'}
        />
      </div>
      <div
        className={isLeftToRight() ? 'leftToRightTextBox' : 'textBoxCssFront'}>
        {isLeftToRight() ? (
          <div className='leftTitleFront'>
            <h1 className='titleFont frontPageEnTitle'>
              {lang === 'english' ? 'Sergi Courtyard' : 'реформирует'}
            </h1>
            <img alt='underline' src={headerUnderline} />
          </div>
        ) : (
          <img
            alt='hebHeader'
            src={hebrewHeader}
            className='frontPageHeTitle'
          />
        )}
        {isTopScrollBtn ? (
          <img
            onClick={scrollAndUpdateUp}
            id='scrollBtnPng'
            src={upperTextArrow}
            alt='scrollBtn'
            className={isLeftToRight() ? 'topScrollOneEN' : 'topScrollOneHE'}
          />
        ) : null}
        <p
          {...bind}
          className={isLeftToRight() ? 'lefToRightTexstCss' : 'textHeFront'}
          id='openingTextBox'>
          {whichFileToUse()}
        </p>
        {isButtomScrollBtn ? (
          <img
            onClick={scrollAndUpdateDown}
            id='scrollBtnPng'
            src={scrollBtn}
            alt='scrollBtn'
            className={
              isLeftToRight() ? 'buttomScrollOneEN' : 'buttomScrollOneHE'
            }
          />
        ) : null}
      </div>
    </>
  );
}

export default TextInserter;
