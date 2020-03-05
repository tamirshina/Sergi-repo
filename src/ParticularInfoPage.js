import React, {useEffect} from 'react';
import particularPageImage from './04_particularImage.png';
import ScrollImage from './scrollImage';
import {timer, removeTimer} from './TimerHundler';
import './Styles.css';
import HomeBtn from './HomeBtn';

function ParticularInfoPage ({backBtnLogic, homeBtnLogic}){

    useEffect(
        () => {
        console.log('didMount particu');
        timer(homeBtnLogic); 

        return () => { // Return callback to run on unmount.

        console.log('UNMount particu');
        removeTimer();
          };
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);


        function resetTimer() {
          removeTimer();
          timer(homeBtnLogic);
          
        }

 
  return (
        <>
            <img src={particularPageImage} alt='backgroundImage' className='particularBackGround'></img>
            <button onClick={backBtnLogic} id='backBtn' className='backBtn'>back</button>
            <HomeBtn homeBtnLogic={homeBtnLogic} />
            <div onClick={resetTimer} className='arrowHolder'>
            <ScrollImage />
            </div>
        
        </>

        );
    
}

export default ParticularInfoPage;
