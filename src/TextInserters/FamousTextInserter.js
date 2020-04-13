import React, { useContext, useRef } from 'react';
import isLeftToRight from '../fragments/IsLeftToRightFunc';
import LangContext from '../SergiContext';
import russianText from './russianText';
import englishText from './englishText';
import hebrewText from './HebrewText';
import LeftFamousTitle from '../fragments/LeftFamousTitle';
import RightFamousTitle from '../fragments/RightFamousTitle';
import '../css/famousCss.css';
import ScrollingBtn from '../fragments/ScrollingBtn';

function FamousTextInserter({ typeOfInfo, homeBtnLogic }) {

    const lang = useContext(LangContext).lang;
    const textParaEl = useRef(null);

    function createMarkup(str) { return { __html: str } };

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

        return whichFileToUse().famousInfo[typeOfInfo];

    }

    function titleToInsert() {

        return whichFileToUse().famousTitles[typeOfInfo];

    }

    return (

        <div className='famous-all-text-container'>
            {isLeftToRight() ?
                <LeftFamousTitle titleToInsert={titleToInsert} />
                :
                <RightFamousTitle titleToInsert={titleToInsert} />}
            <p ref={textParaEl} className={isLeftToRight() ? 'infoEnText famousAdjustText' : 'famousHeText'} id="particularTextBox" dangerouslySetInnerHTML={createMarkup(infoToInsert())}>
            </p>
            {typeOfInfo === "raspotin" ? <ScrollingBtn homeBtnLogic={homeBtnLogic} type={'famous'} forwardRef={textParaEl} /> : null}
        </div>
    );
}

export default FamousTextInserter;
