import React, { useState, useContext } from 'react';
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
    const [isTopScrollBtn, setIsTopScrollBtn] = useState(false);
    const [isButtomScrollBtn, setIsButtomScrollBtn] = useState(true);
    
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

        let textBox = document.getElementById('particularTextBox')
        let maxTextLength =textBox.scrollHeight-textBox.clientHeight;
        textBox.scrollTop+=10;

        if(textBox.scrollTop!== 0){
            setIsTopScrollBtn(true);
        }else{
            setIsTopScrollBtn(false);
        }
        if(textBox.scrollTop===maxTextLength){
            setIsButtomScrollBtn(false);
        }
    }

    const  scrollAndUpdateUp=()=> {

        let textBox = document.getElementById('particularTextBox')
        textBox.scrollTop-=10;

        if(textBox.scrollTop!== 0){
            setIsTopScrollBtn(true);
        }else{
            setIsTopScrollBtn(false);
        }
    }
    

 
  return (

            <div className={isLeftToRight()?'infoTextBoxLeftToRight':'textBoxCss'}>
            {isLeftToRight()?
            <LeftToRightTitle titleToInsert={titleToInsert()}/>:
            <RighToLeftTitle titleToInsert={titleToInsert()}/>}
                {isTopScrollBtn?<img onClick={()=>{resetTimer(); scrollAndUpdateUp()}} src={upperTextArrow} alt="scrollBtn" className={isLeftToRight()?'topInfoScrollEn':'topScrollOneHE'}/>:null}
                <p className={isLeftToRight()?'infoEnText':'textCss'} id="particularTextBox"> 
                    {infoToInsert()}
                </p>
                {isButtomScrollBtn?<img onClick={()=>{resetTimer(); scrollAndUpdateDown()}} src={scrollBtn} alt="scrollBtn" className={isLeftToRight()?'buttomInfoScroll':'buttomScrollOneHE'}/>:null}
            </div>
        );
}

export default TextInserterParticular;
