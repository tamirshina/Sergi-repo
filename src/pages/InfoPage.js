/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect, useContext} from 'react';
import InfoRoutingImage from '../assets/03_screen2background.png';
import {timer, removeTimer} from '../TimerHundler';
import LanguagesButtons from '../fragments/LanguageButtons';
import downHand from '../assets/20_downHand.png';
import leftHand from '../assets/22_leftHand.png';
import rightHand from '../assets/21_rightHand.png';
import LangContext from '../SergiContext';
import russianText from '../TextInserters/russianText';
import englishText from '../TextInserters/englishText';
import hebrewText from '../TextInserters/hebrewText';
import isLeftToRight from '../fragments/IsLeftToRightFunc';
import '../css/Styles.css';

function InfoPage({moveToParticularInfo, homeBtnLogic}) {

    const lang = useContext(LangContext).lang;

        useEffect(
        () => {
        timer(homeBtnLogic);

        return () => { // Return callback to run on unmount.
            
        removeTimer();
          };
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        function whichFileToUse (){
            if(lang==="hebrew"){
                return JSON.parse(JSON.stringify(hebrewText)).titles;
            }
            if(lang==="english"){
                return JSON.parse(JSON.stringify(englishText)).titles;
            }
            else{
                return JSON.parse(JSON.stringify(russianText)).titles;
            }
        }
 
    return (

    <div> 
        <LanguagesButtons />
        <img src={InfoRoutingImage} className='fullBackground'></img>
        
            <div id='sergi' onClick={moveToParticularInfo} className={isLeftToRight()?'sergiTitle addTitleFont':'sergiTitle addTitleFont addSomeRight'}>
            <h1>{whichFileToUse().sergi}</h1>
            <img src={rightHand} alt='hand' />
            </div>
            <div id='ella' onClick={moveToParticularInfo} className='ellaTitle addTitleFont'>
                <h1>{whichFileToUse().ella}</h1>
                <img src={leftHand} alt='hand' />
            </div>
            <div id='known' onClick={moveToParticularInfo} className='knownTitle addTitleFont'>
                <h1>{whichFileToUse().known}</h1>
                <img src={downHand} alt='hand' />
            </div>
            <div id='og' onClick={moveToParticularInfo} className='ogTitle addTitleFont'>
                 <h1>{whichFileToUse().og}</h1>
                <img src={downHand} alt='hand' />
            </div>
            <div id='water' onClick={moveToParticularInfo} className='waterTitle addTitleFont'>
                <h1>{whichFileToUse().water}</h1>
                <img src={downHand} alt='hand' />
            </div>
    </div>
    
    );
  }
  
  export default InfoPage;
  