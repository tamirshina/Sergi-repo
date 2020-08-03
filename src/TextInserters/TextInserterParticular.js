import React, { useContext, useRef, useState, useEffect } from 'react';
import isLeftToRight from '../fragments/IsLeftToRightFunc';
import LangContext from '../SergiContext';
import russianText from './RussianText';
import englishText from './EnglishText';
import hebrewText from './HebrewText';
import { timer, removeTimer } from "../TimerHundler";
import RighToLeftTitle from '../fragments/RightToLeftTitle';
import LeftToRightTitle from '../fragments/LeftToRightTitle';
import '../css/Styles.css';
import ScrollingBtn from '../fragments/ScrollingBtn';

function TextInserterParticular({ typeOfInfo, homeBtnLogic }) {

    const lang = useContext(LangContext).lang;
    const [isScrollDebounce, setIsScrollDebounce] = useState(true);
    const tempTimer = useRef(null);
    const textParaEl = useRef(null);

    useEffect(() => {
        return () => {
            clearTimeout(tempTimer.current);
        };
        // eslint-disable-next-line
    }, []);

    function resetTimer() {
        removeTimer();
        timer(homeBtnLogic);
    }

    function handleScroll() {
        if (isScrollDebounce) {
            setIsScrollDebounce(false);
            resetTimer();
            tempTimer.current = setTimeout(function () {
                setIsScrollDebounce(true);
            }, 10000);
        }
    }

    function createMarkup(str) { return { __html: str } };

    function whichFileToUse() {
        if (lang === "hebrew") {
            return hebrewText;
        }
        if (lang === "english") {
            return englishText;
        }
        else {
            return russianText;
        }
    }

    function infoToInsert() {

        return whichFileToUse().particularInfo[typeOfInfo];
    }
    function titleToInsert() {

        return whichFileToUse().titles[typeOfInfo];
    }

    return (

        <div id={`box-${typeOfInfo}-${isLeftToRight()}`} className={isLeftToRight() ? 'en-general-container' : 'textBoxCss'} onScroll={handleScroll}>
            {isLeftToRight() ?
                <LeftToRightTitle titleToInsert={titleToInsert()} /> :
                <RighToLeftTitle titleToInsert={titleToInsert()} />}
            <p ref={textParaEl} className={isLeftToRight() ? 'infoEnText' : 'textCss'} id="particularTextBox" dangerouslySetInnerHTML={createMarkup(infoToInsert())}>

            </p>
            {typeOfInfo === "og" ? null : <ScrollingBtn homeBtnLogic={homeBtnLogic} type={"particular"} forwardRef={textParaEl} />}
        </div>
    );
}

export default TextInserterParticular;
