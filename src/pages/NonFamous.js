import React, {useEffect} from 'react';
import sergiPageImageEN from '../assets/06_sergiEnglish.png';
import sergiImageHE from '../assets/04_sergiImageHe.png';
import ellaPageImageEN from '../assets/17_Elizabeth-ENG.png';
import ellaImageHe from '../assets/17_Elizabeth-HEB.png'
import knownPageImageEN from '../assets/06_sergiEnglish.png';
import knownImageHe from '../assets/04_sergiImageHe.png';
import waterPageImageEN from '../assets/37-Water pitsENG.png';
import waterImageHe from '../assets/19-Water pitsHEB.png';
import ogPageImageEN from '../assets/18_og finger_ENG.png';
import ogImageHe from '../assets/18_og finger_HEB.png';
import isLeftToRight from '../fragments/IsLeftToRightFunc';
import {timer, removeTimer} from '../TimerHundler';
import TextInserter from '../TextInserters/TextInserterParticular';
import backImg from '../assets/32-back.png';
import '../css/Styles.css';

function NonFamous ({backBtnLogic, homeBtnLogic, typeOfInfo}){
  
  useEffect(
        () => {
        timer(homeBtnLogic); 
        return () => { // Return callback to run on unmount.
        removeTimer();
          };
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        function pictureToRender (){

          switch(typeOfInfo){

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
 
  return (
          <>
            <img src={pictureToRender()} alt='backgroundImage' className='particularBackGround'></img>
            <img src={backImg} alt='backBtn' onClick={backBtnLogic} id='backBtn' className='backBtn'/>
            <TextInserter typeOfInfo={typeOfInfo} homeBtnLogic={homeBtnLogic}/>
          </>
        );
    
}

export default NonFamous;
