import React, {useEffect, useState} from 'react';
import {timer, removeTimer} from '../TimerHundler';
import TextInserter from '../TextInserters/FamousTextInserter';
import famousBack from '../assets/24_famousBack.png';
import ImageInserter from '../TextInserters/ImagesInserter';
import backImg from '../assets/32-back.png';
import '../css/Styles.css';

function FamousComp ({backBtnLogic, homeBtnLogic}){
  
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
            <img src={backImg} alt='backBtn' onClick={backBtnLogic} id='backBtn' className='backBtn'/>
            <ImageInserter changeType={changeText} />
            <TextInserter typeOfInfo={infoToShow} homeBtnLogic={homeBtnLogic}/>
          </>
        );
    
}

export default FamousComp;
