import React, { useState, useContext } from 'react';
import scrollBtn from './02_Continue-text-button-small.png';
import isLeftToRight from './IsLeftToRightFunc';
import LangContext from './SergiContext';
import russianText from './russianText';
import englishText from './englishText';
import hebrewText from './hebrewText';
import {timer, removeTimer} from './TimerHundler';
import './Styles.css';

function TextInserterParticular ({typeOfInfo, homeBtnLogic}){

    const lang = useContext(LangContext).lang;
    const [russianTextToShow] = useState(JSON.parse(JSON.stringify(russianText)).particularInfo);
    const [englishTextToshow] = useState(JSON.parse(JSON.stringify(englishText)).particularInfo);
    const [hebrewTextToShow] = useState(JSON.parse(JSON.stringify(hebrewText)).particularInfo);

    function resetTimer() {
        console.log('resetTimer activated')
        removeTimer();
        timer(homeBtnLogic);
      }

    function infoToInsert (){

        switch(typeOfInfo){

            case "sergi":
                if(lang==="hebrew"){
                    return hebrewTextToShow.sergi;
                }else if(lang==="english"){
                    return englishTextToshow.sergi;
                }
                return russianTextToShow.sergi;
            case "ella":
                if(lang==="hebrew"){
                    return hebrewTextToShow.ella;
                }else if(lang==="english"){
                    return englishTextToshow.ella;
                }
                return russianTextToShow.ella;            
            case "known":
                if(lang==="hebrew"){
                    return hebrewTextToShow.famous;
                }else if(lang==="english"){
                    return englishTextToshow.famous;
                }
                return russianTextToShow.famous;
            case "ogFinger":
                if(lang==="hebrew"){
                    return hebrewTextToShow.og;
                }else if(lang==="english"){
                    return englishTextToshow.og;
                }
                return russianTextToShow.og;
            case "waterHoles":
                if(lang==="hebrew"){
                    return hebrewTextToShow.water;
                }else if(lang==="english"){
                    return englishTextToshow.water;
                }
                return russianTextToShow.water; 
            default:
              return englishTextToshow.sergi;

        }
    }
    const [isTopScrollBtn, setIsTopScrollBtn] = useState(false);
    const [isButtomScrollBtn, setIsButtomScrollBtn] = useState(true);
    
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
      <div className={isLeftToRight()?'leftToRightTextBox':'textBoxCss'}>
        <h1>{typeOfInfo}</h1>
            {isTopScrollBtn?<img onClick={()=>{resetTimer(); scrollAndUpdateUp()}} src={scrollBtn} alt="scrollBtn" className='topScrollBtnCss'/>:null}
            <p className={isLeftToRight()?'lefToRightTexstCss':'textCss'} id="particularTextBox"> 
                {infoToInsert()}
            </p>
            {isButtomScrollBtn?<img onClick={()=>{resetTimer(); scrollAndUpdateDown()}} src={scrollBtn} alt="scrollBtn" className='scrollBtnCss'/>:null}
        </div>
        );
}

export default TextInserterParticular;
