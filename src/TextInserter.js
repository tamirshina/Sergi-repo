import React, { useContext, useRef } from 'react';
import scrollBtn from './02_Continue-text-button-small.png';
import FrontTitleft from './FrontTitleLeft';
import isLeftToRight from './IsLeftToRightFunc';
import LangContext from './SergiContext';
import russianText from './russianText';
import englishText from './englishText';
import hebrewText from './hebrewText';
import HandArrowFront from './HandArrowFront';
import upperTextArrow from './11_textArrowUP.png';
import hebrewHeader from './23_title_HEB.png';
import './Styles.css';

function TextInserter (){

    const lang = useContext(LangContext).lang;
    const upperScrollEl = useRef(null);
    const bottomScrollEl = useRef(null);

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
            upperScrollEl.current.style.visibility = 'visible';
        }
        if(textBox.scrollTop===maxTextLength){
            bottomScrollEl.current.style.visibility = 'hidden';
        }
    }

    const  scrollAndUpdateUp=()=> {

        let textBox = document.getElementById('openingTextBox')
        textBox.scrollTop-=10;

        if(textBox.scrollTop=== 0){
            upperScrollEl.current.style.visibility = 'hidden';
        }if(bottomScrollEl.current.style.visibility==='hidden'){
            bottomScrollEl.current.style.visibility = 'visible';
        }
    }
 
  return (
    <>
    <HandArrowFront />
    <div className={isLeftToRight()?'leftToRightTextBox':'textBoxCssFront'}>
    {isLeftToRight()?
    <FrontTitleft />:
          <img alt='hebHeader' src={hebrewHeader} className='frontPageHeTitle'/>}
          <img  ref={upperScrollEl} onClick={scrollAndUpdateUp} id="scrollBtnPng" src={upperTextArrow} alt="scrollBtn" className={isLeftToRight()?'topScrollOneEN':'topScrollOneHE'}/>
            <p className={isLeftToRight()?'lefToRightTexstCss':'textHeFront'} id="openingTextBox"> 
                {whichFileToUse()}
            </p>
            <img ref={bottomScrollEl} onClick={scrollAndUpdateDown} id="scrollBtnPng" src={scrollBtn} alt="scrollBtn" className={isLeftToRight()?'buttomScrollOneEN':'buttomScrollOneHE'}/>
        </div>
    </>
        );
}

export default TextInserter;
