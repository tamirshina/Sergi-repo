import React, { useContext, useRef } from 'react';
import scrollBtn from './02_Continue-text-button-small.png';
import isLeftToRight from './IsLeftToRightFunc';
import LangContext from './SergiContext';
import russianText from './russianText';
import englishText from './englishText';
import hebrewText from './hebrewText';
import {timer, removeTimer} from './TimerHundler';
import upperTextArrow from './11_textArrowUP.png';
import RighToLeftTitle from './RightToLeftTitle';
import LeftToRightTitle from './LeftToRightTitle'
import './Styles.css';

function TextInserterParticular ({typeOfInfo, homeBtnLogic}){

    const lang = useContext(LangContext).lang;
    const textParaEl = useRef(null);
    const upperScrollEl = useRef(null);
    const bottomScrollEl = useRef(null);
    
    function resetTimer() {
        removeTimer();
        timer(homeBtnLogic);
    }

    function whichFileToUse (){
        if(lang==="hebrew"){
            return JSON.parse(JSON.stringify(hebrewText));
        }
        if(lang==="english"){
            return JSON.parse(JSON.stringify(englishText));
        }
        else{
            return JSON.parse(JSON.stringify(russianText));
        }
    }

    function infoToInsert (){

        return whichFileToUse().particularInfo[typeOfInfo];  
    }
    function titleToInsert (){

        return whichFileToUse().titles[typeOfInfo];         
    }
    const  scrollAndUpdateDown=()=> {

        resetTimer();

        let maxTextLength =textParaEl.current.scrollHeight-textParaEl.current.clientHeight;
        textParaEl.current.scrollTop+=10;

        if(textParaEl.current.scrollTop!== 0){
            upperScrollEl.current.style.visibility = 'visible';
        }
        if(textParaEl.current.scrollTop===maxTextLength){
            bottomScrollEl.current.style.visibility = 'hidden';
    }
}

    const  scrollAndUpdateUp=()=> {

        textParaEl.current.scrollTop-=10;

        if(textParaEl.current.scrollTop=== 0){
            upperScrollEl.current.style.visibility = 'hidden';
        }if(bottomScrollEl.current.style.visibility==='hidden'){
            bottomScrollEl.current.style.visibility = 'visible';
        }
    }
 
  return (

            <div className={isLeftToRight()? null:'textBoxCss'}>
            {isLeftToRight()?
            <LeftToRightTitle titleToInsert={titleToInsert()}/>:
            <RighToLeftTitle titleToInsert={titleToInsert()}/>}
                <img ref={upperScrollEl} onClick={()=>{resetTimer(); scrollAndUpdateUp()}} src={upperTextArrow} alt="scrollBtn" className={isLeftToRight()?'topInfoScrollEn':'topScrollOneHE'}/>
                <p ref={textParaEl} className={isLeftToRight()?'infoEnText':'textCss'} id="particularTextBox"> 
                    {infoToInsert()}
                </p>
                <img ref={bottomScrollEl} onClick={()=>{resetTimer(); scrollAndUpdateDown()}} src={scrollBtn} alt="scrollBtn" className={isLeftToRight()?'buttomInfoScroll':'buttomScrollOneHE'}/>
            </div>
        );
}

export default TextInserterParticular;
