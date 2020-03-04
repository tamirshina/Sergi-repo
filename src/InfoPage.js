/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ScrollImage from './scrollImage';
import InfoRoutingImage from './03_background-screen-02.png';
import HomeBtn from './HomeBtn';
import './Styles.css';




function InfoPage({moveToParticularInfo, homeBtnLogic}) {

 
    return (

    <div>  
        <img src={InfoRoutingImage} className='infoBackground'></img>
        <HomeBtn homeBtnLogic={homeBtnLogic} />
            <div id='sergi' onClick={moveToParticularInfo} className='sergiTitle'>
            <h1>סרגיי</h1>
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
  