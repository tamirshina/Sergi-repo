import React, { useState, useContext } from 'react';
import scrollBtn from './02_Continue-text-button-small.png';
import isLeftToRight from './IsLeftToRightFunc';
import LangContext from './SergiContext';
import russianText from './russianText';
import englishText from './englishText';
import hebrewText from './hebrewText';
import handArrowEn from './08_HendarrowENG.png';
import handArrowHE from './12_handarrowHE.png';
import seeMoreEN from './09_Touchtoseemore.png';
import seeMoreHE from './13_extraInfoHe.png';
import headerUnderline from './14_Headerunderline.png';
import upperTextArrow from './11_textArrowUP.png';
import hebrewHeader from './23_title_HEB.png';
import './Styles.css';

function TextInserter (){

    const lang = useContext(LangContext).lang;
    const [isTopScrollBtn, setIsTopScrollBtn] = useState(false);
    const [isButtomScrollBtn, setIsButtomScrollBtn] = useState(true);

    function whichFileToUse (){
        if(lang==="hebrew"){
            return JSON.parse(JSON.stringify(hebrewText.frontPage));
        }
        if(lang==="english"){
            return JSON.parse(JSON.stringify(englishText.frontPage));
        }
        else{
            return JSON.parse(JSON.stringify(russianText.frontPage));
        }
    }
    
    const  scrollAndUpdateDown=()=> {

        let textBox = document.getElementById('openingTextBox')
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

        let textBox = document.getElementById('openingTextBox')
        textBox.scrollTop-=10;

        if(textBox.scrollTop!== 0){
            setIsTopScrollBtn(true);
        }else{
            setIsTopScrollBtn(false);
        }
    }
 
  return (
    <>
    <div className={isLeftToRight()?'handFrontContainer':'heHandFrontContainer'}>
        <img src={isLeftToRight()?seeMoreEN:seeMoreHE} alt='handArrowTitle' className={isLeftToRight()?'gateHandEn':null}/>  
        <img src={isLeftToRight()?handArrowEn:handArrowHE} alt='handArrow' className={isLeftToRight()?'handArrowEn':'handArrowHe'}/>
    </div>
    <div className={isLeftToRight()?'leftToRightTextBox':'textBoxCssFront'}>
    {isLeftToRight()?<div>
            <h1 className='titleFont frontPageEnTitle'>{lang==="english"?'Sergi Courtyard':'реформирует'}</h1>
            <img alt='underline' src={headerUnderline} className='frontPageUnderline'/>
          </div>:<img alt='hebHeader' src={hebrewHeader} className='frontPageHeTitle'/>}
          {isTopScrollBtn?<img onClick={scrollAndUpdateUp} id="scrollBtnPng" src={upperTextArrow} alt="scrollBtn" className={isLeftToRight()?'topScrollOneEN':'topScrollOneHE'}/>:null}
            <p className={isLeftToRight()?'lefToRightTexstCss':'textCss'} id="openingTextBox"> 
                {whichFileToUse()}
            </p>
            {isButtomScrollBtn?<img onClick={scrollAndUpdateDown} id="scrollBtnPng" src={scrollBtn} alt="scrollBtn" className={isLeftToRight()?'buttomScrollOneEN':'buttomScrollOneHE'}/>:null}
        </div>
    </>
        );
}

export default TextInserter;
