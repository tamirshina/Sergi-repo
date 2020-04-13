import React, { useContext, useRef } from 'react';
import scrollBtn from '../assets/02_Continue-text-button-small.png';
import FrontTitleft from '../fragments/FrontTitleLeft';
import isLeftToRight from '../fragments/IsLeftToRightFunc';
import LangContext from '../SergiContext';
import russianText from './russianText';
import englishText from './englishText';
import HandArrowFront from '../fragments/HandArrowFront';
import upperTextArrow from '../assets/11_textArrowUP.png';
import hebrewHeader from '../assets/23_title_HEB.png';
import hebrewText from './HebrewText';
import '../css/Styles.css';

function TextInserter() {

    const lang = useContext(LangContext).lang;
    const textParaEl = useRef(null);
    const upperScrollEl = useRef(null);
    const bottomScrollEl = useRef(null);

    function createMarkup(str) { return { __html: str } };

    function whichFileToUse() {

        if (lang === "hebrew") {
            return hebrewText.frontPage;
        }
        if (lang === "english") {
            return JSON.parse(JSON.stringify(englishText.frontPage));
        }
        else {
            return JSON.parse(JSON.stringify(russianText.frontPage));
        }
    }
    const scrollAndUpdateDown = () => {

        let maxTextLength = textParaEl.current.scrollHeight - textParaEl.current.clientHeight;
        textParaEl.current.scrollTop += 10;

        if (textParaEl.current.scrollTop !== 0) {
            upperScrollEl.current.style.visibility = 'visible';
        }
        if (textParaEl.current.scrollTop === maxTextLength) {
            bottomScrollEl.current.style.visibility = 'hidden';
        }
    }

    const scrollAndUpdateUp = () => {


        textParaEl.current.scrollTop -= 10;

        if (textParaEl.current.scrollTop === 0) {
            upperScrollEl.current.style.visibility = 'hidden';
        } if (bottomScrollEl.current.style.visibility === 'hidden') {
            bottomScrollEl.current.style.visibility = 'visible';
        }
    }

    return (
        <>
            <HandArrowFront />
            <div className={isLeftToRight() ? 'leftToRightTextBox' : 'textBoxCssFront'}>
                {isLeftToRight() ?
                    <FrontTitleft /> :
                    <img alt='hebHeader' src={hebrewHeader} className='frontPageHeTitle' />}
                <img ref={upperScrollEl} onClick={scrollAndUpdateUp} id="scrollBtnPng" src={upperTextArrow} alt="scrollBtn" className={isLeftToRight() ? 'topScrollOneEN' : 'topScrollOneHE'} />
                {/* nitice what happens here! */}
                <p ref={textParaEl} className={isLeftToRight() ? 'lefToRightTexstCss' : 'textHeFront'} id="openingTextBox" dangerouslySetInnerHTML={createMarkup(whichFileToUse())}>

                </p>
                <img ref={bottomScrollEl} onClick={scrollAndUpdateDown} id="scrollBtnPng" src={scrollBtn} alt="scrollBtn" className={isLeftToRight() ? 'buttomScrollOneEN' : 'buttomScrollOneHE'} />
            </div>
        </>
    );
}

export default TextInserter;
