/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect, useContext, useState} from 'react';

import InfoRoutingImage from './03_background-screen-02.png';
import {timer, removeTimer} from './TimerHundler';
import LanguagesButtons from './LanguageButtons';
import ScrollImage from './scrollImage';
import LangContext from './SergiContext';
import russianText from './russianText';
import englishText from './englishText';
import hebrewText from './hebrewText';
import HomeBtn from './HomeBtn';
import './Styles.css';





function InfoPage({moveToParticularInfo, homeBtnLogic}) {

    const lang = useContext(LangContext).lang;
    const [russianTitlesToShow] = useState(JSON.parse(JSON.stringify(russianText)).titles);
    const [englishTitelsToshow] = useState(JSON.parse(JSON.stringify(englishText)).titles);
    const [hebrewTitelsToShow] = useState(JSON.parse(JSON.stringify(hebrewText)).titles);

        useEffect(
        () => {
        timer(homeBtnLogic); 

        return () => { // Return callback to run on unmount.
            
        removeTimer();
          };
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);



 
    return (

    <div> 
        <LanguagesButtons />
        <img src={InfoRoutingImage} className='infoBackground'></img>
        <HomeBtn homeBtnLogic={homeBtnLogic} />
            <div id='sergi' onClick={moveToParticularInfo} className='sergiTitle'>
            <h1>{lang==="hebrew"?hebrewTitelsToShow.one
                :lang==="english"?englishTitelsToshow.one
                :russianTitlesToShow.one}</h1>
            <ScrollImage />
            </div>
            <div id='ella' onClick={moveToParticularInfo} className='ellaTitle'>
                <h1>
                    {lang==="hebrew"?hebrewTitelsToShow.two
                    :lang==="english"?englishTitelsToshow.two
                    :russianTitlesToShow.two}
                </h1>
                <ScrollImage />
            </div>
            <div id='known' onClick={moveToParticularInfo} className='knownTitle'>
                <h1>
                    {lang==="hebrew"?hebrewTitelsToShow.five
                    :lang==="english"?englishTitelsToshow.five
                    :russianTitlesToShow.five}
                </h1>
                <ScrollImage />
            </div>
            <div id='ogFinger' onClick={moveToParticularInfo} className='ogTitle'>
                 <h1>
                    {lang==="hebrew"?hebrewTitelsToShow.three
                    :lang==="english"?englishTitelsToshow.three
                    :russianTitlesToShow.three}
                </h1>
                <ScrollImage />
            </div>
            <div id='waterHoles' onClick={moveToParticularInfo} className='waterTitle'>
                <h1>
                    {lang==="hebrew"?hebrewTitelsToShow.four
                    :lang==="english"?englishTitelsToshow.four
                    :russianTitlesToShow.four}
                </h1>
                <ScrollImage />
            </div>
    </div>
    
    );
  }
  
  export default InfoPage;
  