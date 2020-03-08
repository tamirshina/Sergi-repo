import React, { useState, useContext } from 'react';
import scrollBtn from './02_Continue-text-button-small.png';
import isLeftToRight from './IsLeftToRightFunc';
import LangContext from './SergiContext';
import russianText from './russianText';
import englishText from './englishText';
import hebrewText from './hebrewText';
import './Styles.css';

function TextInserter (){

    const lang = useContext(LangContext).lang;
    const [russianTextToShow] = useState(JSON.parse(JSON.stringify(russianText)).frontPage);
    const [englishTextToshow] = useState(JSON.parse(JSON.stringify(englishText)).frontPage);
    const [hebrewTextToShow] = useState(JSON.parse(JSON.stringify(hebrewText)).frontPage);


    const [isTopScrollBtn, setIsTopScrollBtn] = useState(false);
    const [isButtomScrollBtn, setIsButtomScrollBtn] = useState(true);
    
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
      <div className={isLeftToRight()?'leftToRightTextBox':'textBoxCss'}>
          {isTopScrollBtn?<img onClick={scrollAndUpdateUp} id="scrollBtnPng" src={scrollBtn} alt="scrollBtn" className='topScrollBtnCss'/>:null}
            <p className={isLeftToRight()?'lefToRightTexstCss':'textCss'} id="openingTextBox"> 
                {lang==="hebrew"?hebrewTextToShow
                :lang==="english"?englishTextToshow
                :russianTextToShow}
            </p>
            {isButtomScrollBtn?<img onClick={scrollAndUpdateDown} id="scrollBtnPng" src={scrollBtn} alt="scrollBtn" className='scrollBtnCss'/>:null}
        </div>
        );
}

export default TextInserter;
