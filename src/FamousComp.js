import React, {useEffect, useState} from 'react';
import isLeftToRight from './IsLeftToRightFunc';
import {timer, removeTimer} from './TimerHundler';
import TextInserter from './FamousTextInserter';
import famousBack from './24_famousBack.png';
import ImageInserter from './ImagesInserter';
import './Styles.css';
import HomeBtn from './HomeBtn';

function FamousComp ({backBtnLogic, homeBtnLogic, typeOfParticularInfo}){
  
  const [infoToShow, setInfoToShow]=useState('raspotin');

  function changeText (e) {

    setInfoToShow(e.currentTarget.id);
  }

  useEffect(
        () => {
        timer(homeBtnLogic); 
        return () => { // Return callback to run on unmount.
        removeTimer();
          };
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);
 
  return (
          <>
            <img src={famousBack} alt='backgroundImage' className='particularBackGround'></img>
            <button onClick={backBtnLogic} id='backBtn' className={isLeftToRight()?'backBtn':'backBtnRightToLeft'}>back</button>
            <HomeBtn homeBtnLogic={homeBtnLogic} />
            <ImageInserter changeType={changeText} />
            <TextInserter typeOfInfo={infoToShow} homeBtnLogic={homeBtnLogic}/>
          </>
        );
    
}

export default FamousComp;
