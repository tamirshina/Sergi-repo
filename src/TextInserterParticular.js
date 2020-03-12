import React, { useState, useContext } from 'react';
import scrollBtn from './02_Continue-text-button-small.png';
import isLeftToRight from './IsLeftToRightFunc';
import LangContext from './SergiContext';
import russianText from './russianText';
import englishText from './englishText';
import hebrewText from './hebrewText';
import headerUnderline from './14_Headerunderline.png';
import {timer, removeTimer} from './TimerHundler';
import upperTextArrow from './11_textArrowUP.png';
import './Styles.css';

function TextInserterParticular ({typeOfInfo, homeBtnLogic}){

    const lang = useContext(LangContext).lang;
    const [russianTextToShow] = useState(JSON.parse(JSON.stringify(russianText)));
    const [englishTextToshow] = useState(JSON.parse(JSON.stringify(englishText)));
    const [hebrewTextToShow] = useState(JSON.parse(JSON.stringify(hebrewText)));
    
    function resetTimer() {
        removeTimer();
        timer(homeBtnLogic);
      }

    function infoToInsert (){

        switch(typeOfInfo){

            case "sergi":
                if(lang==="hebrew"){
                    return hebrewTextToShow.particularInfo.sergi;
                }else if(lang==="english"){
                    return englishTextToshow.particularInfo.sergi;
                }
                return russianTextToShow.particularInfo.sergi;
            case "ella":
                if(lang==="hebrew"){
                    return hebrewTextToShow.particularInfo.ella;
                }else if(lang==="english"){
                    return englishTextToshow.particularInfo.ella;
                }
                return russianTextToShow.particularInfo.ella;            
            case "known":
                if(lang==="hebrew"){
                    return hebrewTextToShow.particularInfo.famous;
                }else if(lang==="english"){
                    return englishTextToshow.particularInfo.famous;
                }
                return russianTextToShow.particularInfo.famous;
            case "ogFinger":
                if(lang==="hebrew"){                   
                    return hebrewTextToShow.particularInfo.og;
                }else if(lang==="english"){
                    return englishTextToshow.particularInfo.og;
                }
                return russianTextToShow.particularInfo.og;
            case "waterHoles":
                if(lang==="hebrew"){
                    return hebrewTextToShow.particularInfo.water;
                }else if(lang==="english"){
                    return englishTextToshow.particularInfo.water;
                }
                return russianTextToShow.particularInfo.water; 
            default:
              return englishTextToshow.particularInfo.sergi;
        }
    }

    function titleToInsert (){

        switch(typeOfInfo){

            case "sergi":
                if(lang==="hebrew"){
                    return hebrewTextToShow.titles.one;
                }else if(lang==="english"){
                    return englishTextToshow.titles.one;
                }
                return russianTextToShow.titles.one;
            case "ella":
                if(lang==="hebrew"){
                    return hebrewTextToShow.titles.two;
                }else if(lang==="english"){
                    return englishTextToshow.titles.two;
                }
                return russianTextToShow.titles.two;            
            case "known":
                if(lang==="hebrew"){
                    return hebrewTextToShow.titles.five;
                }else if(lang==="english"){
                    return englishTextToshow.titles.five;
                }
                return russianTextToShow.titles.five;
            case "ogFinger":
                if(lang==="hebrew"){
                    return hebrewTextToShow.titles.three;
                }else if(lang==="english"){
                    return englishTextToshow.titles.three;
                }
                return russianTextToShow.titles.three;
            case "waterHoles":
                if(lang==="hebrew"){
                    return hebrewTextToShow.titles.four;
                }else if(lang==="english"){
                    return englishTextToshow.titles.four;
                }
                return russianTextToShow.titles.four; 
            default:
              return englishTextToshow.particularInfo.sergi;
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
      <div className={isLeftToRight()?'infoTextBoxLeftToRight':'textBoxCss'}>
        {isLeftToRight()?<div className='enInfoTitle'>
            <h1 className='titleFont frontPageEnTitle'>{titleToInsert()}</h1>
            <img alt='underline' src={headerUnderline} className='frontPageUnderline'/>
          </div>:<div>
            <h1 className='titleFont heInfoPageTitle'>{titleToInsert()}</h1>
            <img alt='underline' src={headerUnderline} className='heInfoPageUnderline'/>
          </div>}
            {isTopScrollBtn?<img onClick={()=>{resetTimer(); scrollAndUpdateUp()}} src={upperTextArrow} alt="scrollBtn" className={isLeftToRight()?'topInfoScrollEn':'topScrollOneHE'}/>:null}
            <p className={isLeftToRight()?'infoEnText':'textCss'} id="particularTextBox"> 
                {infoToInsert()}
            </p>
            {isButtomScrollBtn?<img onClick={()=>{resetTimer(); scrollAndUpdateDown()}} src={scrollBtn} alt="scrollBtn" className={isLeftToRight()?'buttomInfoScroll':'buttomScrollOneHE'}/>:null}
        </div>
        );
}

export default TextInserterParticular;
