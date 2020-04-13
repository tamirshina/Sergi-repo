import React, { useContext, useRef } from 'react';
import isLeftToRight from '../fragments/IsLeftToRightFunc';
import LangContext from '../SergiContext';
import russianText from './russianText';
import englishText from './englishText';
import hebrewText from './HebrewText';
import RighToLeftTitle from '../fragments/RightToLeftTitle';
import LeftToRightTitle from '../fragments/LeftToRightTitle';
import '../css/Styles.css';
import ScrollingBtn from '../fragments/ScrollingBtn';

function TextInserterParticular({ typeOfInfo, homeBtnLogic }) {

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

        return whichFileToUse().particularInfo[typeOfInfo];
    }
    function titleToInsert() {

        return whichFileToUse().titles[typeOfInfo];
    }

    return (

        <div id={`box-${typeOfInfo}-${isLeftToRight()}`} className={isLeftToRight() ? 'en-general-container' : 'textBoxCss'}>
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
