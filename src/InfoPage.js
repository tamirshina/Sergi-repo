/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect, useContext} from 'react';
import ScrollImage from './scrollImage';
import InfoRoutingImage from './03_background-screen-02.png';
import LanguagesButtons from './LanguageButtons';
import HomeBtn from './HomeBtn';
import {timer, removeTimer} from './TimerHundler';
import './Styles.css';

import LangContext from './SergiContext';



function InfoPage({moveToParticularInfo, homeBtnLogic}) {

    const card = useContext(LangContext).lang;

        useEffect(
        () => {
        timer(homeBtnLogic); 
        console.log('mounted2222')

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
            <h1>{card}</h1>
            <ScrollImage />
            </div>
            <div id='ella' onClick={moveToParticularInfo} className='ellaTitle'>
                <h1>אליזבטה</h1>
                <ScrollImage />
            </div>
            <div id='kwon' onClick={moveToParticularInfo} className='knownTitle'>
                <h1>מבקרים מפורסמים</h1>
                <ScrollImage />
            </div>
            <div id='ogFinger' onClick={moveToParticularInfo} className='ogTitle'>
                <h1>אצבע עוג</h1>
                <ScrollImage />
            </div>
            <div id='waterHoles' onClick={moveToParticularInfo} className='waterTitle'>
                <h1>בורות המים</h1>
                <ScrollImage />
            </div>
    </div>
    
    );
  }
  
  export default InfoPage;
  