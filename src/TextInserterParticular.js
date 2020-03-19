import React, { useState, useContext, useEffect } from 'react';
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
    const [isButtomScrollBtn, setIsButtomScrollBtn]=useState(false);

    useEffect(() => {
        // Update the document title using the browser API
        isButtomScroll();
      });
    
    
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
    function isButtomScroll(){
        let textBox = document.getElementById('particularTextBox')
        let maxTextLength =textBox.scrollHeight-textBox.clientHeight;
        if(textBox.scrollTop!==maxTextLength){
            
            setIsButtomScrollBtn(true);
        }
    }
    const  scrollAndUpdateDown=()=> {

        resetTimer();

        let textBox = document.getElementById('particularTextBox')
        let maxTextLength =textBox.scrollHeight-textBox.clientHeight;
        textBox.scrollTop+=10;

        if(textBox.scrollTop!== 0){
            setIsTopScrollBtn(true);
        }
        if(textBox.scrollTop===maxTextLength){
            setIsButtomScrollBtn(false);
        }
    }

    const  scrollAndUpdateUp=()=> {

        let textBox = document.getElementById('particularTextBox')
        textBox.scrollTop-=10;

        if(textBox.scrollTop=== 0){
            setIsTopScrollBtn(false);
        }if(isButtomScrollBtn===false){
            setIsButtomScrollBtn(true);
        }
    }
 
  return (

            <div className={isLeftToRight()? null:'textBoxCss'}>
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
