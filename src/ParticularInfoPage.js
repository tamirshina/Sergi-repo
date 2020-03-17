import React, {useEffect} from 'react';
import sergiPageImageEN from './06_sergiEnglish.png';
import sergiImageHE from './04_sergiImageHe.png';
import ellaPageImageEN from './17_Elizabeth-ENG.png';
import ellaImageHe from './17_Elizabeth-HEB.png'
import knownPageImageEN from './06_sergiEnglish.png';
import knownImageHe from './04_sergiImageHe.png';
import waterPageImageEN from './19_Water pits_HEB&ENG.png';
import waterImageHe from './19_Water pits_HEB&ENG.png';
import ogPageImageEN from './18_og finger_ENG.png';
import ogImageHe from './18_og finger_HEB.png';
import isLeftToRight from './IsLeftToRightFunc';
import {timer, removeTimer} from './TimerHundler';
import TextInserter from './TextInserterParticular';
import './Styles.css';
import HomeBtn from './HomeBtn';

function ParticularInfoPage ({backBtnLogic, homeBtnLogic, typeOfParticularInfo}){
  
  useEffect(
        () => {
        timer(homeBtnLogic); 
        return () => { // Return callback to run on unmount.
        removeTimer();
          };
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        function pictureToRender (){

          switch(typeOfParticularInfo){

            case "sergi":
                return isLeftToRight()? sergiPageImageEN:sergiImageHE;
            case "ella":
                return isLeftToRight()? ellaPageImageEN:ellaImageHe;            
            case "known":
                return isLeftToRight()?knownPageImageEN:knownImageHe; 
            case "og":
                return isLeftToRight()?ogPageImageEN:ogImageHe; 
            case "water":
                return isLeftToRight()?waterPageImageEN:waterImageHe; 
            default:
              return sergiPageImageEN;
        }
      }

      function isFamous (){

        if(typeOfParticularInfo==='known'){

          return true;
        }
        return false;
      }
 
  return (

          <>
            <img src={pictureToRender()} alt='backgroundImage' className='particularBackGround'></img>
            <button onClick={backBtnLogic} id='backBtn' className={isLeftToRight()?'backBtn':'backBtnRightToLeft'}>back</button>
            <HomeBtn homeBtnLogic={homeBtnLogic} />
            <TextInserter typeOfInfo={typeOfParticularInfo} homeBtnLogic={homeBtnLogic}/>:<TextInserter/>}
          </>
        );
    
}

export default ParticularInfoPage;
