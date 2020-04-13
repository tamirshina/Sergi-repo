import React, { useContext, useRef } from 'react';
import scrollBtn from '../assets/02_Continue-text-button-small.png';
import isLeftToRight from '../fragments/IsLeftToRightFunc';
import LangContext from '../SergiContext';
import russianText from './russianText';
import englishText from './englishText';
import hebrewText from './HebrewText';
import { timer, removeTimer } from '../TimerHundler';
import upperTextArrow from '../assets/11_textArrowUP.png';
import RighToLeftTitle from '../fragments/RightToLeftTitle';
import LeftToRightTitle from '../fragments/LeftToRightTitle';
import '../css/Styles.css';

function TextInserterParticular({ typeOfInfo, homeBtnLogic }) {

    const lang = useContext(LangContext).lang;
    const textParaEl = useRef(null);
    const upperScrollEl = useRef(null);
    const bottomScrollEl = useRef(null);
    function createMarkup(str) { return { __html: str } };

    function resetTimer() {
        removeTimer();
        timer(homeBtnLogic);
    }

    function whichFileToUse() {
        if (lang === "hebrew") {
            return hebrewText;
        }
        if (lang === "english") {
            return JSON.parse(JSON.stringify(englishText));
        }
        else {
            return JSON.parse(JSON.stringify(russianText));
        }
    }

    function infoToInsert() {

        return whichFileToUse().particularInfo[typeOfInfo];
    }
    function titleToInsert() {

        return whichFileToUse().titles[typeOfInfo];
    }
    const scrollAndUpdateDown = () => {

        resetTimer();

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

        <div className={isLeftToRight() ? null : 'textBoxCss'}>
            {isLeftToRight() ?
                <LeftToRightTitle titleToInsert={titleToInsert()} /> :
                <RighToLeftTitle titleToInsert={titleToInsert()} />}
            <img ref={upperScrollEl} onClick={() => { resetTimer(); scrollAndUpdateUp() }} src={upperTextArrow} alt="scrollBtn" className={isLeftToRight() ? 'topInfoScrollEn' : 'topScrollOneHE'} />
            <p ref={textParaEl} className={isLeftToRight() ? 'infoEnText' : 'textCss'} id="particularTextBox" dangerouslySetInnerHTML={createMarkup(infoToInsert())}>

            </p>
            <img ref={bottomScrollEl} onClick={() => { resetTimer(); scrollAndUpdateDown() }} src={scrollBtn} alt="scrollBtn" className={isLeftToRight() ? 'buttomInfoScroll' : 'buttomScrollOneHE'} />
        </div>
    );
}

export default TextInserterParticular;
