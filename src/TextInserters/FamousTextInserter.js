import React, { useContext, useRef, useState, useEffect } from 'react';
import isLeftToRight from '../fragments/IsLeftToRightFunc';
import { timer, removeTimer } from "../TimerHundler";
import LangContext from '../SergiContext';
import russianText from './RussianText';
import englishText from './EnglishText';
import hebrewText from './HebrewText';
import LeftFamousTitle from '../fragments/LeftFamousTitle';
import RightFamousTitle from '../fragments/RightFamousTitle';
import '../css/famousCss.css';
import ScrollingBtn from '../fragments/ScrollingBtn';

function FamousTextInserter({ typeOfInfo, homeBtnLogic }) {

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

        return whichFileToUse().famousInfo[typeOfInfo];

    }

    function titleToInsert() {

        return whichFileToUse().famousTitles[typeOfInfo];

    }
    return (

        <div className={typeOfInfo === "raspotin" ? 'famous-all-text-container' : 'not-ras-all-text-container'}>
            {isLeftToRight() ?
                <LeftFamousTitle titleToInsert={titleToInsert} />
                :
                <RightFamousTitle titleToInsert={titleToInsert} />}
            <p ref={textParaEl} className={isLeftToRight() ? 'infoEnText famousAdjustText' : 'famousHeText'} id="particularTextBox" dangerouslySetInnerHTML={createMarkup(infoToInsert())} onScroll={handleScroll}>
            </p>
            {typeOfInfo === "raspotin" ? <ScrollingBtn homeBtnLogic={homeBtnLogic} type={'famous'} forwardRef={textParaEl} /> : null}
        </div>
    );
}

export default FamousTextInserter;
